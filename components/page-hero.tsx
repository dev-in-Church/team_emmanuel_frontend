import type { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-16 bg-neutral-950 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        </>
      )}

      {/* Ambient decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
