import React from "react";

// small classnames helper
const cn = (...args) => args.filter(Boolean).join(" ");

function AnimatedGridPattern({ numSquares = 30, maxOpacity = 0.1, duration = 3, repeatDelay = 1, className = "" }) {
  const squares = Array.from({ length: numSquares }).map((_, i) => {
    // pseudo-random positions/sizes based on index so layout is deterministic
    const top = (i * 73) % 100; // 0-99
    const left = (i * 47) % 100; // 0-99
    // make particles smaller: sizes vary between ~2-7px now (was 4-13px)
    const size = 2 + (i % 6); // vary sizes between 2-7px
    const delay = (i % numSquares) * (duration / numSquares) * 0.8; // stagger delays
    return { top, left, size, delay, key: i };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <style>{`
        .agp-square { position: absolute; border-radius: 2px; transform-origin: center; }
        @keyframes agp-fade {
          0% { opacity: 0; transform: scale(0.85) translateY(0); }
          50% { opacity: 1; transform: scale(1) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.85) translateY(0); }
        }
      `}</style>

      {squares.map((s) => (
        <div
          key={s.key}
          className="agp-square"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: 'currentColor',
            opacity: maxOpacity,
            animationName: 'agp-fade',
            animationDuration: `${duration}s`,
            animationDelay: `${s.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ))}
    </div>
  );
}

export default function AnimatedGridPatternDemo() {
  return (
    // absolute full-bleed background; pointer-events-none so it doesn't capture clicks
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="relative h-full w-full text-[--accent]">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.08}
          duration={3}
          repeatDelay={1}
          className={cn("h-full w-full")}
        />
      </div>
    </div>
  );
}
