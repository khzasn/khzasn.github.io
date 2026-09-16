"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
    
    // Play audio
    if (audioRef.current) {
      audioRef.current.volume = 0.45;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    
    setTimeout(() => {
      setHideSplash(true);
    }, 2000);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-[family-name:var(--font-inter)] selection:bg-[var(--accent)] selection:text-white">
      
      <audio ref={audioRef} loop preload="auto">
        <source src="/Top 10 staTues tHat CriEd bloOd.mp3" type="audio/mpeg" />
      </audio>

      {/* SPLASH SCREEN */}
      {!hideSplash && (
        <div 
          id="splash" 
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg)] px-6 text-center transition-all duration-[2000ms] ease-in-out ${entered ? "opacity-0 invisible scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
        >
          <div className="text-[var(--accent)] font-bold text-4xl mb-4 animate-fade-up">&lt;/&gt;</div>
          <h2 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Khozin Sapzidan
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-[340px] mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Portofolio interaktif dengan musik latar. Klik untuk melanjutkan.
          </p>
          <button 
            onClick={handleEnter}
            className="bg-[var(--accent)] text-white font-semibold text-sm border-none rounded-full px-8 py-3 cursor-pointer transition-all hover:bg-blue-600 hover:-translate-y-0.5 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Masuk
          </button>
        </div>
      )}

      {/* NAVBAR */}
      <nav className={`absolute top-0 w-full p-6 lg:px-12 flex justify-between items-center z-30 transition-all duration-1000 delay-500 ${entered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
        <div className="font-bold text-xl flex items-center gap-2 font-[family-name:var(--font-space-grotesk)]">
          <span className="text-[var(--accent)]">&lt;/&gt;</span> 
          <span className="text-white tracking-wide">Khozin X</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-muted)]">
          <a href="#" className="text-white hover:text-[var(--accent)] transition-colors">Home</a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <main className={`relative max-w-[1400px] mx-auto min-h-screen px-6 lg:px-12 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 items-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* LEFT COLUMN - HERO TEXT */}
        <div className="lg:col-span-1 z-20 flex flex-col items-start mt-10 lg:mt-0">
          <div className="w-16 h-1.5 bg-white mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}></div>
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold mb-6 leading-[1.1] font-[family-name:var(--font-space-grotesk)] animate-fade-up" style={{ animationDelay: '0.5s' }}>
            I'm Khozin,<br />a Web<br />Developer
          </h1>
          <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-10 max-w-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Mahasiswa Sistem Informasi yang mengeksplorasi pengembangan web, desain UI/UX, dan analisis sistem untuk menciptakan solusi digital terbaik.
          </p>
          <button className="w-14 h-14 bg-[var(--accent)] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors animate-fade-up group" style={{ animationDelay: '0.7s' }}>
            <svg className="w-6 h-6 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* CENTER COLUMN - PHOTO */}
        {/* On desktop: absolute centered to overlap beautifully. On mobile: relative block */}
        <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[45%] h-[50vh] lg:h-[85vh] z-10 flex items-end justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {/* FOTO PLACEHOLDER - Nanti diganti dengan tag <img> asli */}
          <div className="w-full max-w-[400px] h-full rounded-t-[200px] photo-placeholder flex flex-col items-center justify-end pb-12 lg:pb-24 px-6 text-center border-t border-x border-[#2a2a2a]">
            <svg className="w-12 h-12 text-[#333] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="text-[#555] text-xs font-bold tracking-widest uppercase mb-2">Area Foto Utama</p>
            <p className="text-[#444] text-[11px]">Upload foto tanpa background (PNG) dengan nama <span className="text-[var(--accent)] font-mono">foto.png</span> ke folder public, lalu hubungi saya untuk memasangnya.</p>
          </div>
          {/* CONTOH CARA PASANG FOTO NANTI: */}
          {/* <img src="/foto.png" alt="Khozin" className="object-contain object-bottom w-full h-full" /> */}
        </div>

        {/* RIGHT COLUMN - INFO */}
        <div className="lg:col-span-1 z-20 flex flex-col gap-12 lg:ml-auto max-w-sm mt-8 lg:mt-0">
          
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white">About Me</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
              Berfokus membangun antarmuka pengguna yang fungsional dan memiliki estetika tinggi. Masih penasaran dengan banyak hal — kode, desain, dan konten.
            </p>
            <a href="#" className="text-sm font-bold flex items-center gap-2 text-white hover:text-[var(--accent)] transition-colors group w-fit">
              LEARN MORE 
              <span className="transition-transform group-hover:translate-x-1">➔</span>
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white">My Work</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
              Kumpulan proyek pengembangan sistem manajemen, prototipe aplikasi mobile, dan eksplorasi teknologi modern.
            </p>
            <a href="#" className="text-sm font-bold flex items-center gap-2 text-white hover:text-[var(--accent)] transition-colors group w-fit">
              BROWSE PORTFOLIO 
              <span className="transition-transform group-hover:translate-x-1">➔</span>
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '1.0s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white">Follow Me</h3>
            <div className="flex gap-5">
              <a href="https://github.com/khzasn" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/khozin-sapzidan-aabb81303" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
              </a>
              <a href="https://tiktok.com/@khzasn" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-1-.87-1.6-2.1-1.66-3.44h-3.34v13.5a2.72 2.72 0 1 1-1.93-2.6V9.9a6.1 6.1 0 1 0 5.27 6.04V9.7a8.3 8.3 0 0 0 4.9 1.58V8.03c-1.06 0-2.24-.4-3.24-1.14v-1.07Z"/></svg>
              </a>
              <a href="https://music.youtube.com/@khozinsapzidan7580" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2ZM9.6 7.5v9l7-4.5-7-4.5Z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* MUSIC WIDGET */}
      <div 
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-full py-2 px-4 pl-3 transition-all duration-500 shadow-xl ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 invisible"}`}
      >
        <div className="flex gap-[3px] items-end h-[14px]">
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.2s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.4s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
        </div>
        <button 
          onClick={toggleMute}
          aria-label="Bisukan musik"
          className="w-[34px] h-[34px] rounded-full bg-[var(--bg)] border border-[var(--border)] text-white flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)]"
        >
          {isMuted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          )}
        </button>
      </div>

    </div>
  );
}
