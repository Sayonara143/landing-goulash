// Декоративный анимированный «aurora»-фон.
// Чистый CSS, без JS и без влияния на SEO/производительность.
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/4 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent2/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px] animate-aurora [animation-delay:-12s]" />
      {/* Лёгкая сетка поверх */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  );
}
