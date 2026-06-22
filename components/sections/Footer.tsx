import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        borderTop: "3px solid #F4EFE2",
        padding: "26px 24px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          color: "#8c8676",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        <span>
          © 2026 {profile.name} · {profile.location}
        </span>
      </div>
    </footer>
  );
}
