"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";

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
    
    // Remove splash from DOM after 2 seconds (animation duration)
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
    <>
      <div className="bg-ambient"></div>
      
      <audio ref={audioRef} loop preload="auto">
        <source src="/Top 10 staTues tHat CriEd bloOd.mp3" type="audio/mpeg" />
      </audio>

      {/* SPLASH SCREEN */}
      {!hideSplash && (
        <div 
          id="splash" 
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg)] px-6 text-center transition-all duration-[2000ms] ease-in-out ${entered ? "opacity-0 invisible scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
        >
          <div className="w-[70px] h-[70px] rounded-[20px] bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-2xl mb-6 animate-fade-up">
            KS
          </div>
          <h2 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Khozin Sapzidan
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-[340px] mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Portofolio interaktif dengan musik latar. Klik untuk melanjutkan.
          </p>
          <button 
            onClick={handleEnter}
            className="bg-[var(--text-main)] text-[var(--bg)] font-semibold text-sm border-none rounded-xl px-8 py-3 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,244,245,0.15)] animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Masuk Portofolio
          </button>
        </div>
      )}

      {/* MUSIC WIDGET */}
      <div 
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-full py-2 px-4 pl-3 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 invisible"}`}
      >
        <div className="flex gap-[3px] items-end h-[14px]">
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.2s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.4s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto' }}></span>
        </div>
        <button 
          onClick={toggleMute}
          aria-label="Bisukan musik"
          className="w-[34px] h-[34px] rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-main)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--text-main)] hover:text-[var(--bg)]"
        >
          {isMuted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          )}
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main 
        className={`max-w-[860px] mx-auto px-6 py-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <div className="grid grid-cols-4 gap-4">
          
          {/* Profile Card */}
          <div className={`bento-card col-span-4 p-7 flex flex-col relative overflow-hidden opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e] animate-pulse-ring"></div>
              Available for new projects
            </div>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[var(--surface-hover)] to-[var(--border)] flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-space-grotesk)] shrink-0">
                KS
              </div>
              <div>
                <h1 className="text-[26px] font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">Khozin Sapzidan</h1>
                <p className="text-[var(--text-muted)] text-sm font-medium">Sistem Informasi &middot; Tech Enthusiast</p>
              </div>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-[15px]">
              Mahasiswa Sistem Informasi yang mengeksplorasi berbagai teknologi mulai dari pengembangan web, desain antarmuka, hingga analisis sistem. Berfokus membangun solusi digital yang fungsional dan memiliki estetika tinggi.
            </p>
          </div>

          {/* Tech Stack */}
          <div className={`bento-card col-span-4 md:col-span-2 p-7 flex flex-col relative overflow-hidden opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Tech Stack &amp; Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {['HTML5 & CSS3', 'JavaScript', 'UI/UX Design', 'Figma', 'Git & GitHub', 'System Analysis'].map(tag => (
                <span key={tag} className="bg-[var(--bg)] border border-[var(--border)] px-3.5 py-2 rounded-xl text-[13px] font-medium transition-colors hover:border-[var(--border-hover)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className={`bento-card col-span-4 md:col-span-2 p-7 flex flex-col relative overflow-hidden opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              Recent Projects
            </div>
            <div className="flex gap-4 py-3 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">Sistem Informasi Akademik</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Proyek pengembangan sistem manajemen data perkuliahan.</p>
              </div>
            </div>
            <div className="flex gap-4 pt-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">Desain Aplikasi Mobile</h4>
                <p className="text-[13px] text-[var(--text-muted)]">Prototipe UI/UX untuk aplikasi produktivitas mahasiswa.</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <a href="https://github.com/khzasn" target="_blank" rel="noreferrer" className={`bento-card col-span-2 md:col-span-1 p-6 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.5s' }}>
            <span className="absolute top-4 right-4 text-[var(--text-muted)] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--text-main)]">&#8599;</span>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/></svg>
            <span className="font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/khozin-sapzidan-aabb81303" target="_blank" rel="noreferrer" className={`bento-card col-span-2 md:col-span-1 p-6 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.5s' }}>
            <span className="absolute top-4 right-4 text-[var(--text-muted)] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--text-main)]">&#8599;</span>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
            <span className="font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">LinkedIn</span>
          </a>

          <a href="https://tiktok.com/@khzasn" target="_blank" rel="noreferrer" className={`bento-card col-span-2 md:col-span-1 p-6 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.6s' }}>
            <span className="absolute top-4 right-4 text-[var(--text-muted)] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--text-main)]">&#8599;</span>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-1-.87-1.6-2.1-1.66-3.44h-3.34v13.5a2.72 2.72 0 1 1-1.93-2.6V9.9a6.1 6.1 0 1 0 5.27 6.04V9.7a8.3 8.3 0 0 0 4.9 1.58V8.03c-1.06 0-2.24-.4-3.24-1.14v-1.07Z"/></svg>
            <span className="font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">TikTok</span>
          </a>

          <a href="https://music.youtube.com/@khozinsapzidan7580" target="_blank" rel="noreferrer" className={`bento-card col-span-2 md:col-span-1 p-6 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group opacity-0 translate-y-8 ${entered ? "animate-card-in" : ""}`} style={{ animationDelay: '0.6s' }}>
            <span className="absolute top-4 right-4 text-[var(--text-muted)] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--text-main)]">&#8599;</span>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2ZM9.6 7.5v9l7-4.5-7-4.5Z"/></svg>
            <span className="font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">Playlist</span>
          </a>

        </div>
        
        <footer className="text-center text-[var(--text-muted)] text-xs pt-16">
          &copy; 2026 Khozin Sapzidan. Dibangun dengan React &amp; Next.js.
        </footer>
      </main>
    </>
  );
}
