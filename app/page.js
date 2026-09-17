"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── DATA PROYEK DARI GITHUB ──────────────────────────────────
const projects = [
  {
    name: "Portfolio Website",
    repo: "khzasn.github.io",
    desc: "Website portofolio interaktif personal yang dibangun dengan Next.js & React. Menampilkan profil, proyek, dan tautan sosial dengan desain gelap modern, efek glassmorphism, animasi blob, dan cursor glow tracking.",
    lang: "JavaScript",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/khzasn/khzasn.github.io",
    live: "https://khzasn-github-io.vercel.app",
    color: "from-blue-600/20 to-indigo-900/20",
    icon: "🌐",
  },
  {
    name: "Jaga-in",
    repo: "Jaga-in",
    desc: "Aplikasi web berbasis Laravel yang dirancang untuk membantu pengelolaan dan pemantauan data secara terstruktur, dibangun menggunakan framework PHP modern dengan tampilan Blade yang rapi.",
    lang: "PHP / Laravel",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    github: "https://github.com/khzasn/Jaga-in",
    live: null,
    color: "from-red-600/20 to-orange-900/20",
    icon: "🛡️",
  },
  {
    name: "Personal Workflow",
    repo: "Personal-Workflow",
    desc: "Aplikasi manajemen alur kerja personal yang dibangun dengan TypeScript. Dirancang untuk meningkatkan produktivitas dengan fitur pencatatan, perencanaan, dan pengelolaan tugas secara terorganisir.",
    lang: "TypeScript",
    tags: ["TypeScript", "Node.js", "Workflow"],
    github: "https://github.com/khzasn/Personal-Workflow",
    live: null,
    color: "from-purple-600/20 to-violet-900/20",
    icon: "⚡",
  },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.45;
      audioRef.current.play().catch(() => {});
    }
    setTimeout(() => setHideSplash(true), 2000);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) audioRef.current.muted = nextMuted;
  };

  return (
    <div className="min-h-screen relative font-[family-name:var(--font-inter)] selection:bg-[var(--accent)] selection:text-white">
      <audio ref={audioRef} loop preload="auto">
        <source src="/Top 10 staTues tHat CriEd bloOd.mp3" type="audio/mpeg" />
      </audio>

      {/* ── ANIMATED BACKGROUND BLOBS ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/25 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* ── CURSOR GLOW ── */}
      <div className="pointer-events-none fixed inset-0 z-10 hidden lg:block" style={{ background: 'radial-gradient(600px at var(--mouse-x,50%) var(--mouse-y,50%), rgba(0,102,255,0.10), transparent 80%)' }}></div>

      {/* ── SPLASH ── */}
      {!hideSplash && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] px-6 text-center transition-all duration-[2000ms] ease-in-out overflow-hidden ${entered ? "opacity-0 invisible scale-110 pointer-events-none" : "opacity-100 scale-100"}`}>
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

          {/* Logo */}
          <div className="animate-fade-up mb-5 relative z-10" style={{ animationDelay: '0s' }}>
            <Image
              src="/logo.png"
              alt="Logo khzasn"
              width={88}
              height={88}
              className="object-contain drop-shadow-[0_0_24px_rgba(0,102,255,0.7)]"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          {/* Wave + Greeting */}
          <div className="relative z-10 animate-fade-up mb-1" style={{ animationDelay: '0.15s' }}>
            <span className="text-3xl inline-block" style={{ animation: 'waveHand 1.5s ease-in-out 0.6s 3' }}>👋</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white relative z-10 animate-fade-up mb-2" style={{ animationDelay: '0.2s' }}>
            Hey, Selamat Datang!
          </h2>

          {/* Name accent */}
          <p className="text-[var(--accent)] font-semibold text-sm mb-5 animate-fade-up tracking-widest uppercase relative z-10" style={{ animationDelay: '0.3s' }}>
            — Khozin Sapzidan —
          </p>

          {/* Subtitle */}
          <p className="text-[var(--text-muted)] text-sm max-w-[360px] mb-10 leading-relaxed animate-fade-up relative z-10" style={{ animationDelay: '0.4s' }}>
            Ini adalah ruang digital saya — tempat kode, desain, dan ide bertemu. Siap untuk menjelajah?
          </p>

          {/* Start Button */}
          <button
            onClick={handleEnter}
            className="group relative z-10 bg-[var(--accent)] text-white font-bold text-sm rounded-full px-10 py-3.5 cursor-pointer transition-all hover:bg-blue-600 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,102,255,0.5)] animate-fade-up overflow-hidden"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
          </button>

          <p className="text-white/20 text-xs mt-6 animate-fade-up relative z-10" style={{ animationDelay: '0.6s' }}>
            🎵 Musik akan otomatis diputar
          </p>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-14 py-4 backdrop-blur-md bg-black/25 border-b border-white/8 transition-all duration-1000 delay-300 ${entered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <div className="font-bold text-lg flex items-center gap-2.5 font-[family-name:var(--font-space-grotesk)] shrink-0">
          <Image
            src="/logo.png"
            alt="Logo khzasn"
            width={36}
            height={36}
            className="object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
          <span className="text-white tracking-wide">Khozin X</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
          <a href="#" className="text-white hover:text-[var(--accent)] transition-colors font-semibold">Home</a>
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[var(--accent)] transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/khzasn" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition-all hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/></svg>
            GitHub
          </a>
          <button className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1" aria-label="Menu">
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-4 h-0.5 bg-white block"></span>
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={`relative z-20 w-full min-h-screen flex flex-col lg:flex-row items-stretch pt-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 lg:max-w-[42%]">
          <div className="w-14 h-1 bg-[var(--accent)] mb-7 rounded-full shadow-[0_0_12px_rgba(0,102,255,0.7)] animate-fade-up" style={{ animationDelay: '0.3s' }}></div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.05] font-[family-name:var(--font-space-grotesk)] animate-fade-up drop-shadow-2xl" style={{ animationDelay: '0.4s' }}>
            I'm Khozin,<br />a Web<br />Developer
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Mahasiswa Sistem Informasi yang mengeksplorasi pengembangan web, desain UI/UX, dan analisis sistem untuk menciptakan solusi digital terbaik.
          </p>
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-blue-600 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,102,255,0.4)]">
              Lihat Proyek
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <a href="#about" className="text-sm font-semibold text-white/70 hover:text-white transition-colors border border-white/20 rounded-full px-6 py-3.5 hover:border-white/40">
              Tentang Saya
            </a>
          </div>
        </div>

        {/* CENTER — Foto dengan CSS blend agar menyatu dengan background */}
        <div className="relative flex items-end justify-center lg:flex-1 h-[70vw] max-h-[650px] lg:h-auto overflow-hidden animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {/* Glow biru di bawah */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-600/20 rounded-full filter blur-3xl pointer-events-none z-0"></div>
          <div
            className="relative z-10 h-full w-auto"
            style={{
              mixBlendMode: 'screen',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/foto.png"
              alt="Foto Khozin Sapzidan"
              width={520}
              height={680}
              className="object-contain object-bottom h-full w-auto"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div id="about" className="flex-1 flex flex-col justify-center gap-10 px-8 lg:px-12 py-16 lg:py-0 lg:max-w-[35%] scroll-mt-24 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80] animate-pulse"></span>
            Available for projects
          </div>

          {[
            {
              label: "About Me",
              body: "Berfokus membangun antarmuka yang fungsional dan estetis. Selalu ingin tahu — kode, desain, dan konten.",
              cta: "LEARN MORE →",
              href: "https://www.linkedin.com/in/khozin-sapzidan-aabb81303",
            },
            {
              label: "My Work",
              body: "Proyek web development, desain UI/UX, dan eksplorasi teknologi modern.",
              cta: "BROWSE PORTFOLIO →",
              href: "#portfolio",
            },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-[var(--accent)]/40 pl-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--accent)]">{item.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.body}</p>
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-xs font-bold text-white/80 hover:text-[var(--accent)] transition-colors group inline-flex items-center gap-1">
                {item.cta}
              </a>
            </div>
          ))}

          <div className="border-l-2 border-[var(--accent)]/40 pl-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--accent)]">Follow Me</h3>
            <div className="flex gap-3">
              {[
                { url: "https://github.com/khzasn", d: "M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" },
                { url: "https://www.linkedin.com/in/khozin-sapzidan-aabb81303", d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" },
                { url: "https://tiktok.com/@khzasn", d: "M16.6 5.82c-1-.87-1.6-2.1-1.66-3.44h-3.34v13.5a2.72 2.72 0 1 1-1.93-2.6V9.9a6.1 6.1 0 1 0 5.27 6.04V9.7a8.3 8.3 0 0 0 4.9 1.58V8.03c-1.06 0-2.24-.4-3.24-1.14v-1.07Z" },
                { url: "https://music.youtube.com/@khozinsapzidan7580", d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2ZM9.6 7.5v9l7-4.5-7-4.5Z" },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition-all hover:scale-110 hover:shadow-[0_0_12px_rgba(0,102,255,0.3)]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SECTION ── */}
      <section id="portfolio" className={`relative z-20 w-full py-24 transition-all duration-1000 delay-300 ${entered ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-t border-white/8 z-0"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-center mb-14 text-center">
            <div className="w-10 h-1 bg-[var(--accent)] mb-5 rounded-full shadow-[0_0_10px_rgba(0,102,255,0.8)]"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 text-white">Featured Projects</h2>
            <p className="text-gray-500 max-w-xl text-sm">Proyek-proyek dari GitHub saya yang dibangun dengan berbagai teknologi modern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.repo} className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.25)] flex flex-col">
                
                {/* Card Header */}
                <div className={`h-40 bg-gradient-to-br ${proj.color} relative overflow-hidden flex items-center justify-center border-b border-white/5`}>
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,102,255,0.3), transparent 70%)' }}></div>
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">{proj.icon}</span>
                  {/* Lang Badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-white/60 bg-white/10 border border-white/15 px-2 py-0.5 rounded-full">{proj.lang}</span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-1 font-[family-name:var(--font-space-grotesk)] text-white group-hover:text-[var(--accent)] transition-colors">{proj.name}</h3>
                  <p className="text-xs text-gray-600 mb-3 font-mono">{proj.repo}</p>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-1">{proj.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-white/60 bg-white/8 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]/80 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white/70 border border-white/15 rounded-lg py-2 hover:border-[var(--accent)]/50 hover:text-white transition-all hover:bg-[var(--accent)]/10">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/></svg>
                      Source Code
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[var(--accent)] rounded-lg py-2 hover:bg-blue-600 transition-all shadow-[0_0_10px_rgba(0,102,255,0.3)]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link ke semua proyek GitHub */}
          <div className="flex justify-center mt-10">
            <a href="https://github.com/khzasn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 border border-white/15 rounded-full px-6 py-3 hover:text-white hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/></svg>
              Lihat semua di GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="relative z-20 w-full bg-black/70 backdrop-blur-xl border-t border-white/8 py-10 text-center">
        <p className="text-gray-600 text-xs">&copy; 2026 Khozin Sapzidan. Built with Next.js & Tailwind CSS.</p>
      </footer>

      {/* ── MUSIC WIDGET ── */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 backdrop-blur-md bg-black/50 border border-white/10 rounded-full py-2 px-4 pl-3 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 invisible"}`}>
        <div className="flex gap-[3px] items-end h-[14px]">
          {[0, 0.2, 0.4].map((delay, i) => (
            <span key={i} className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: `${delay}s`, animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto', boxShadow: '0 0 6px var(--accent)' }}></span>
          ))}
        </div>
        <button onClick={toggleMute} aria-label="Bisukan musik" className="w-[32px] h-[32px] rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_12px_rgba(0,102,255,0.5)]">
          {isMuted ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          )}
        </button>
      </div>

    </div>
  );
}
