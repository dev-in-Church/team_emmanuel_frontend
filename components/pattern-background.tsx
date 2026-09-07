// components/pattern-background.tsx
export function PatternBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.03] ${className}`}
      style={{
        backgroundImage: "url(/images/logo.png)",
        backgroundSize: "90px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
