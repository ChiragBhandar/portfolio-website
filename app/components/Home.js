import AnimatedGridPatternDemo from "./AnimatedGridPatternDemo";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* background pattern inserted here */}
      <AnimatedGridPatternDemo />

      <div className="relative z-10 max-w-6xl w-full px-8 text-center">
        {/* Availability pill button (matches provided design) */}
        <div className="mb-6 flex justify-center">
          <span
            className="inline-flex items-center gap-3 rounded-full px-4 py-2"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15))',
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), 0 6px 24px rgba(2,6,23,0.6)'
            }}
          >
            <span
              aria-hidden
              className="inline-block rounded-full"
              style={{
                width: 10,
                height: 10,
                background: '#2dd4bf',
                boxShadow: '0 0 8px rgba(45,212,191,0.12)'
              }}
            />

            <span className="text-sm" style={{ color: 'var(--foreground)' }}>Available for Work</span>
          </span>
        </div>

        {/* <p className="text-sm tracking-widest mb-6 reveal reveal-delay-0" style={{ color: 'var(--muted-foreground)' }}>FRONTEND WEB DEVELOPER</p> */}

        <h1 className="mx-auto text-[3.6rem] md:text-[5.5rem] leading-[1.02] font-extrabold text-white max-w-[1100px] reveal reveal-delay-1">
          Crafting Clean & Impactful
          <br />
         <span className="bg-clip-text text-transparent reveal reveal-delay-2" style={{ backgroundImage: 'linear-gradient(90deg,var(--accent),#00bcd4)' }}>User Experiences</span>
        </h1>

        <p className="mt-8 text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto reveal reveal-delay-3">
          <span className="typewriter">Hi! I&apos;m Chirag Bhandar , Frontend Web Developer...</span>
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#projects" className="group btn-ghost inline-block rounded-xl px-8 py-4 text-sm md:text-base border fade-up reveal reveal-delay-4" style={{ borderColor: 'rgba(0,229,255,0.25)', color: 'var(--foreground)', boxShadow: '0 10px 40px rgba(0,229,255,0.08)' }}>
            <span>Show my work</span>
            &nbsp;
            <span className="btn-arrow" aria-hidden>➜</span>
          </a>

          <a href="/Chirag-Resume.pdf" download="Chirag-Resume.pdf" aria-label="Download my resume" className="group btn-cta inline-block rounded-xl px-8 py-4 text-sm md:text-base text-black fade-up reveal reveal-delay-4" style={{ boxShadow: '0 10px 40px rgba(0,188,212,0.12)' }}>
            <span>My Resume</span>
            &nbsp;
            <span className="btn-arrow" aria-hidden>📄</span>
          </a>
        </div>
        
      </div>

      
    </main>
  );
}
