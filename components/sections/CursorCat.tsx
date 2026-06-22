"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Hideout = {
  hidden: Point;
  half: Point;
  full: Point;
  side: "left" | "right" | "top" | "bottom";
};

const CAT_SIZE = 88;
const EDGE_PADDING = 12;
const BODY_PEEK = CAT_SIZE * 0.5;
const HIDEOUT_SELECTORS = [
  "[data-cat-hideout]",
  "nav",
  "section",
  "blockquote",
  ".neo-action-button",
  ".neo-relevance-card",
  ".neo-project-card",
  ".neo-architecture-card",
].join(",");

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));
const random = (min: number, max: number) => min + Math.random() * (max - min);
const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getPointFromRect(rect: DOMRect): Hideout {
  const side = pick(["left", "right", "top", "bottom"] as const);
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const safeX = (x: number) => clamp(x, EDGE_PADDING, viewportWidth - CAT_SIZE - EDGE_PADDING);
  const safeY = (y: number) => clamp(y, EDGE_PADDING, viewportHeight - CAT_SIZE - EDGE_PADDING);
  const y = safeY(random(rect.top, Math.max(rect.top, rect.bottom - CAT_SIZE)));
  const x = safeX(random(rect.left, Math.max(rect.left, rect.right - CAT_SIZE)));

  if (side === "left") {
    return {
      side,
      hidden: { x: safeX(rect.left + EDGE_PADDING), y },
      half: { x: safeX(rect.left - BODY_PEEK), y },
      full: { x: safeX(rect.left - CAT_SIZE - EDGE_PADDING), y },
    };
  }

  if (side === "right") {
    return {
      side,
      hidden: { x: safeX(rect.right - CAT_SIZE - EDGE_PADDING), y },
      half: { x: safeX(rect.right - BODY_PEEK), y },
      full: { x: safeX(rect.right + EDGE_PADDING), y },
    };
  }

  if (side === "top") {
    return {
      side,
      hidden: { x, y: safeY(rect.top + EDGE_PADDING) },
      half: { x, y: safeY(rect.top - BODY_PEEK) },
      full: { x, y: safeY(rect.top - CAT_SIZE - EDGE_PADDING) },
    };
  }

  return {
    side,
    hidden: { x, y: safeY(rect.bottom - CAT_SIZE - EDGE_PADDING) },
    half: { x, y: safeY(rect.bottom - BODY_PEEK) },
    full: { x, y: safeY(rect.bottom + EDGE_PADDING) },
  };
}

function getFallbackHideout(): Hideout {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const y = random(viewportHeight * 0.25, viewportHeight * 0.72);

  return {
    side: "left",
    hidden: { x: -CAT_SIZE, y },
    half: { x: -BODY_PEEK, y },
    full: { x: EDGE_PADDING, y },
  };
}

function findHideout(): Hideout {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(HIDEOUT_SELECTORS));
  const visibleRects = elements
    .map((element) => element.getBoundingClientRect())
    .filter((rect) => {
      const hasUsefulSize = rect.width >= 90 && rect.height >= 44;
      const intersectsViewport =
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth;

      return hasUsefulSize && intersectsViewport;
    });

  if (visibleRects.length === 0) {
    return getFallbackHideout();
  }

  return getPointFromRect(pick(visibleRects));
}

function getDirection(from: Point, to: Point) {
  return to.x < from.x ? -1 : 1;
}

function faceCursor(from: Point, cursor: Point | null) {
  if (!cursor) {
    return 1;
  }

  return getDirection(from, cursor);
}

function getClipPath(side: Hideout["side"], state: "hidden" | "half" | "full") {
  if (state === "full") {
    return "inset(0% 0% 0% 0%)";
  }

  if (side === "left") {
    return state === "half" ? "inset(0% 50% 0% 0%)" : "inset(0% 100% 0% 0%)";
  }

  if (side === "right") {
    return state === "half" ? "inset(0% 0% 0% 50%)" : "inset(0% 0% 0% 100%)";
  }

  if (side === "top") {
    return state === "half" ? "inset(0% 0% 50% 0%)" : "inset(0% 0% 100% 0%)";
  }

  return state === "half" ? "inset(50% 0% 0% 0%)" : "inset(100% 0% 0% 0%)";
}

function getInitialDirection(side: Hideout["side"], from: Point, to: Point) {
  if (side === "left") {
    return -1;
  }

  if (side === "right") {
    return 1;
  }

  return getDirection(from, to);
}

function getCursorTarget(cursor: Point | null) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const target = cursor ?? {
    x: random(viewportWidth * 0.25, viewportWidth * 0.75),
    y: random(viewportHeight * 0.25, viewportHeight * 0.75),
  };

  return {
    x: clamp(target.x - CAT_SIZE / 2 + random(-24, 24), EDGE_PADDING, viewportWidth - CAT_SIZE - EDGE_PADDING),
    y: clamp(target.y - CAT_SIZE / 2 + random(-18, 18), EDGE_PADDING, viewportHeight - CAT_SIZE - EDGE_PADDING),
  };
}

export function CursorCat() {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const cursorRef = useRef<Point | null>(null);
  const currentRef = useRef<Point>({ x: -CAT_SIZE, y: -CAT_SIZE });
  const cursorClassRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let cancelled = false;
    let timeoutId: number | undefined;

    const trackCursor = (event: PointerEvent) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };
    };

    const setMouseCursor = (enabled: boolean) => {
      if (cursorClassRef.current === enabled) {
        return;
      }

      cursorClassRef.current = enabled;
      document.documentElement.classList.toggle("cursor-cat-is-active", enabled);
      document.body.classList.toggle("cursor-cat-is-active", enabled);
    };

    window.addEventListener("pointermove", trackCursor, { passive: true });

    const runCycle = async () => {
      await sleep(random(4200, 9000));

      if (cancelled) {
        return;
      }

      const entry = findHideout();
      currentRef.current = entry.hidden;
      controls.set({
        x: entry.hidden.x,
        y: entry.hidden.y,
        opacity: 1,
        clipPath: getClipPath(entry.side, "hidden"),
        rotate: entry.side === "top" ? -8 : 0,
        scale: 1,
        scaleX: getInitialDirection(entry.side, entry.hidden, entry.half),
      });

      setMouseCursor(true);
      await controls.start({
        x: entry.half.x,
        y: entry.half.y,
        clipPath: getClipPath(entry.side, "half"),
        rotate: entry.side === "top" ? -3 : 0,
        scale: 1,
        scaleX: getInitialDirection(entry.side, entry.hidden, entry.half),
        transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
      });
      currentRef.current = entry.half;

      await controls.start({
        x: entry.full.x,
        y: entry.full.y,
        clipPath: getClipPath(entry.side, "full"),
        rotate: 0,
        scale: 1,
        scaleX: getInitialDirection(entry.side, entry.half, entry.full),
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      });
      currentRef.current = entry.full;

      const lookDirection = faceCursor(entry.full, cursorRef.current);
      await controls.start({
        x: [entry.full.x, entry.full.x + lookDirection * 5, entry.full.x],
        y: [entry.full.y, entry.full.y - 3, entry.full.y],
        rotate: [0, lookDirection * -2, lookDirection * 2, 0],
        clipPath: getClipPath(entry.side, "full"),
        scale: [1, 1.03, 1],
        scaleX: lookDirection,
        transition: { duration: 1.25, ease: "easeInOut", times: [0, 0.45, 1] },
      });

      const firstTarget = getCursorTarget(cursorRef.current);
      await controls.start({
        x: firstTarget.x,
        y: firstTarget.y,
        clipPath: getClipPath(entry.side, "full"),
        rotate: 0,
        scale: 1,
        scaleX: getDirection(currentRef.current, firstTarget),
        transition: { duration: 1.65, ease: [0.16, 1, 0.3, 1] },
      });
      currentRef.current = firstTarget;

      const chaseEndsAt = Date.now() + random(4200, 6200);
      while (!cancelled && Date.now() < chaseEndsAt) {
        const next = getCursorTarget(cursorRef.current);
        controls.start({
          x: next.x,
          y: next.y,
          clipPath: getClipPath(entry.side, "full"),
          rotate: random(-3, 3),
          scale: 1,
          scaleX: getDirection(currentRef.current, next),
          transition: { type: "spring", stiffness: 62, damping: 18, mass: 1.1 },
        });
        currentRef.current = next;
        await sleep(520);
      }

      if (cancelled) {
        return;
      }

      const exit = findHideout();
      await controls.start({
        x: exit.full.x,
        y: exit.full.y,
        clipPath: getClipPath(exit.side, "full"),
        rotate: 0,
        scale: 1,
        scaleX: getDirection(currentRef.current, exit.full),
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      await controls.start({
        x: exit.half.x,
        y: exit.half.y,
        clipPath: getClipPath(exit.side, "half"),
        scale: 1,
        scaleX: getInitialDirection(exit.side, exit.full, exit.half),
        transition: { duration: 0.68, ease: "easeInOut" },
      });
      await controls.start({
        x: exit.hidden.x,
        y: exit.hidden.y,
        clipPath: getClipPath(exit.side, "hidden"),
        scale: 1,
        scaleX: getInitialDirection(exit.side, exit.half, exit.hidden),
        transition: { duration: 0.58, ease: "easeIn" },
      });
      setMouseCursor(false);

      if (!cancelled) {
        timeoutId = window.setTimeout(runCycle, random(1200, 3600));
      }
    };

    timeoutId = window.setTimeout(runCycle, random(1000, 2400));

    return () => {
      cancelled = true;
      window.removeEventListener("pointermove", trackCursor);
      setMouseCursor(false);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      controls.stop();
    };
  }, [controls, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.img
      aria-hidden="true"
      alt=""
      initial={{
        opacity: 1,
        x: -CAT_SIZE,
        y: -CAT_SIZE,
        clipPath: getClipPath("left", "hidden"),
      }}
      animate={controls}
      src="/svg/cat.svg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: CAT_SIZE,
        height: CAT_SIZE,
        pointerEvents: "none",
        zIndex: 45,
        transformOrigin: "50% 70%",
        willChange: "transform, clip-path",
        filter: "drop-shadow(3px 4px 0 rgba(0, 0, 0, 0.28))",
      }}
    />
  );
}
