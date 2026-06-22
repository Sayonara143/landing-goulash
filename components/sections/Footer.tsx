import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <p>Сделано на Next.js · framer-motion</p>
      </div>
    </footer>
  );
}
