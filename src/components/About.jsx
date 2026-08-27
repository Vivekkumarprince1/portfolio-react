import { useState, useEffect } from 'react';
import { EarthCanvas } from './canvas';
import "./styles/About.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format to Kolkata/Calcutta Time (UTC+05:30)
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'short',
    day: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(time);
  const getVal = (type) => parts.find((p) => p.type === type)?.value;

  const hour = parseInt(getVal('hour') || '0', 10);
  const minute = parseInt(getVal('minute') || '0', 10);
  const second = parseInt(getVal('second') || '0', 10);
  const weekday = (getVal('weekday') || '').toUpperCase();
  const day = getVal('day') || '';

  // Calculate angles
  const secAngle = second * 6;
  const minAngle = minute * 6 + second * 0.1;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;

  return (
    <div className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] select-none z-10">
      {/* Glow halo */}
      <div className="clock-halo" />

      <svg width="100%" height="100%" viewBox="0 0 360 360" className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] relative z-10">
        <defs>
          <linearGradient id="bezel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#434343" />
            <stop offset="50%" stopColor="#1e1e1e" />
            <stop offset="100%" stopColor="#0f0f0f" />
          </linearGradient>
          <radialGradient id="dial-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#181528" />
            <stop offset="70%" stopColor="#0a0813" />
            <stop offset="100%" stopColor="#05040a" />
          </radialGradient>
          <linearGradient id="chrome-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2c2c2c" />
            <stop offset="25%" stopColor="#8a8a8a" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#8a8a8a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>

        {/* Bezel Ring */}
        <circle cx="180" cy="180" r="170" fill="url(#bezel-grad)" stroke="url(#chrome-grad)" strokeWidth="4" />
        <circle cx="180" cy="180" r="162" fill="url(#dial-grad)" stroke="#111111" strokeWidth="2" />
        <circle cx="180" cy="180" r="158" fill="none" stroke="url(#chrome-grad)" strokeWidth="0.5" strokeOpacity="0.4" />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = i * 30;
          const isMain = i % 3 === 0;
          return (
            <g key={i} transform={`rotate(${angle} 180 180)`}>
              {isMain ? (
                i === 0 ? (
                  // Double dot triangle at 12 o'clock
                  <path d="M174 34 L180 20 L186 34 Z" fill="#ffffff" stroke="#000000" strokeWidth="0.5" />
                ) : (
                  // Triangles at 3, 6, 9
                  <path d="M176 34 L180 22 L184 34 Z" fill="#ffffff" stroke="#000000" strokeWidth="0.5" />
                )
              ) : (
                // Circular dots for other hours
                <circle cx="180" cy="28" r="3" fill="#ffffff" opacity="0.8" />
              )}
            </g>
          );
        })}

        {/* Minute ticks */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 === 0) return null;
          const angle = i * 6;
          return (
            <line
              key={i}
              x1="180"
              y1="20"
              x2="180"
              y2="24"
              stroke="#ffffff"
              strokeWidth="0.75"
              opacity="0.3"
              transform={`rotate(${angle} 180 180)`}
            />
          );
        })}

        {/* Moon subdial */}
        <g transform="translate(100, 180)">
          <circle cx="0" cy="0" r="22" fill="#121020" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
          <text x="0" y="-26" textAnchor="middle" fill="#ffffff" fontSize="7" opacity="0.3" letterSpacing="1" fontFamily="sans-serif">MOON</text>
          <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.9" />
          <circle cx="-3" cy="-3" r="3" fill="#475569" opacity="0.5" />
          <circle cx="4" cy="4" r="2" fill="#475569" opacity="0.5" />
          <circle cx="-5" cy="5" r="2.5" fill="#475569" opacity="0.5" />
        </g>

        {/* Date Window */}
        <g transform="translate(260, 180)">
          <text x="0" y="-26" textAnchor="middle" fill="#ffffff" fontSize="7" opacity="0.3" letterSpacing="1" fontFamily="sans-serif">WED</text>
          <rect x="-24" y="-12" width="48" height="24" rx="3" fill="#0d0a15" stroke="url(#chrome-grad)" strokeWidth="1" />
          <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
            {`${weekday} ${day}`}
          </text>
        </g>

        {/* Watch label */}
        <text x="180" y="275" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="500" letterSpacing="2" opacity="0.6" fontFamily="sans-serif">CALCUTTA</text>

        {/* Hour Hand */}
        <g transform={`rotate(${hourAngle} 180 180)`}>
          <path d="M176 180 L176 110 L180 100 L184 110 L184 180 Z" fill="#ffffff" stroke="#111111" strokeWidth="1.5" />
          <line x1="180" y1="175" x2="180" y2="105" stroke="#111111" strokeWidth="1" />
        </g>

        {/* Minute Hand */}
        <g transform={`rotate(${minAngle} 180 180)`}>
          <path d="M177 180 L178 70 L180 60 L182 70 L183 180 Z" fill="#ffffff" stroke="#111111" strokeWidth="1.5" />
          <line x1="180" y1="175" x2="180" y2="65" stroke="#111111" strokeWidth="1" />
        </g>

        {/* Second Hand */}
        <g transform={`rotate(${secAngle} 180 180)`}>
          <line x1="180" y1="210" x2="180" y2="50" stroke="#f43f5e" strokeWidth="1.25" />
          <circle cx="180" cy="200" r="4" fill="#f43f5e" />
        </g>

        {/* Center Cap */}
        <circle cx="180" cy="180" r="7" fill="#ffffff" stroke="url(#chrome-grad)" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="3" fill="#000000" />
      </svg>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <h2>About <span>Me</span></h2>

      <div className="relative w-full flex flex-col gap-6">
        {/* Row 1: Profile, Globe, Education */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Profile Card */}
          <div className="bento-card rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-pink-500/30 flex items-center justify-center bg-tertiary shrink-0">
                <span className="text-2xl md:text-3xl font-black text-white">VK</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Vivek Kumar</h3>
                <p className="text-sm text-secondary mt-1">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-secondary text-sm md:text-[15px] leading-relaxed mt-6">
              I'm a Full-Stack Developer with a passion for building robust, scalable web applications. I specialize in EJS, React, Node.js, and modern web solutions, combining technical expertise with business-driven problem-solving.
            </p>
          </div>

          {/* Card 2: Timezone & Globe Card */}
          <div className="bento-card rounded-3xl p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <p className="text-[11px] text-secondary uppercase tracking-[0.2em] font-semibold mb-2">Flexible with Timezones</p>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                Based in India, <span className="text-secondary font-medium">available globally</span>
              </h3>
            </div>
            <div className="w-full h-[180px] mt-4 overflow-hidden relative rounded-2xl bg-black/10">
              <EarthCanvas />
            </div>
          </div>

          {/* Card 3: Education Card */}
          <div className="bento-card rounded-3xl p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-pink-500 uppercase tracking-widest">Education</span>
              </div>
              <div className="p-4 rounded-2xl bg-black-100 border border-white/5 mt-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm md:text-[15px] font-bold text-white leading-tight">UIETH Panjab University</p>
                    <p className="text-[11px] text-secondary mt-1">Bachelor of Engineering in Computer Science</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 rounded-full px-2 py-0.5 shrink-0">Graduate</span>
                </div>
                <span className="inline-block text-[11px] font-medium text-secondary mt-3">2023 – 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Available Card, Quote Card, and overlapping Clock */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[220px]">
          {/* Card 4: Available for Work */}
          <div className="bento-card border-glow-green rounded-3xl p-6 md:p-8 lg:pr-[140px] flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.15em]">Available for Work</span>
            </div>

            <div className="flex flex-col items-start gap-4 mt-4">
              <p className="text-[1.2rem] md:text-[1.5rem] font-black leading-tight text-white">
                <span className="block text-secondary text-sm font-semibold uppercase tracking-wider mb-1">HAVE A VISION?</span>
                <span className="gradient-text-pink">LET'S BUILD IT</span>{' '}
                <span className="text-secondary font-medium italic">together.</span>
              </p>

              <a
                href="/resume.pdf"
                download="Vivek_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition-colors shadow-md shadow-emerald-500/20 w-fit shrink-0 mt-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Card 5: Steve Jobs Quote */}
          <div className="bento-card border-glow-pink rounded-3xl p-6 md:p-8 lg:pl-[140px] flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-end text-pink-500/20">
              <svg className="w-12 h-12 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black italic text-pink-400">
                Real artists ship.
              </p>
              <p className="text-xs text-secondary mt-2 tracking-widest uppercase font-bold">— Steve Jobs</p>
            </div>
          </div>

          {/* Overlapping Clock centered on desktop, static below cards on mobile */}
          <div className="flex items-center justify-center col-span-1 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 py-4 lg:py-0">
            <AnalogClock />
          </div>
        </div>

        {/* Row 3: Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {/* Stat 1: Projects */}
          <div className="bento-card rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-pink-500">10+</span>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold text-secondary">Projects</span>
            </div>
          </div>

          {/* Stat 2: Years of Experience */}
          <div className="bento-card rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-blue-500">1+</span>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold text-secondary">Experience</span>
            </div>
          </div>

          {/* Stat 3: Published Platforms */}
          <div className="bento-card rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-500">4</span>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs md:text-sm font-semibold text-secondary">Platforms</span>
            </div>
          </div>

          {/* Stat 4: Technical Skills */}
          <div className="bento-card rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-amber-500">12+</span>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold text-secondary">Tech Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;