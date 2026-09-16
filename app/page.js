"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);

  // MOUSE TRACKING UNTUK EFEK GLOW KURSOR
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

      {/* BACKGROUND BLOBS (MESH GRADIENT) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* CURSOR GLOW EFFECT (DESKTOP ONLY) */}
      <div 
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 hidden lg:block" 
        style={{ background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 102, 255, 0.12), transparent 80%)' }}
      ></div>

      {/* SPLASH SCREEN */}
      {!hideSplash && (
        <div 
          id="splash" 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] px-6 text-center transition-all duration-[2000ms] ease-in-out ${entered ? "opacity-0 invisible scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
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
            className="bg-[var(--accent)] text-white font-semibold text-sm border-none rounded-full px-8 py-3 cursor-pointer transition-all hover:bg-blue-600 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,102,255,0.4)] animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Masuk
          </button>
        </div>
      )}

      {/* NAVBAR (GLASSMORPHISM) */}
      <nav className={`fixed top-0 w-full p-5 lg:px-12 flex justify-between items-center z-40 transition-all duration-1000 delay-500 backdrop-blur-md bg-black/20 border-b border-white/5 ${entered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
        <div className="font-bold text-xl flex items-center gap-2 font-[family-name:var(--font-space-grotesk)]">
          <span className="text-[var(--accent)]">&lt;/&gt;</span> 
          <span className="text-white tracking-wide drop-shadow-md">Khozin X</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-muted)]">
          <a href="#" className="text-white hover:text-[var(--accent)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[var(--accent)] transition-colors">Portfolio</a>
          <a href="https://github.com/khzasn" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className={`relative max-w-[1400px] mx-auto min-h-screen px-6 lg:px-12 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 items-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-30 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-1 flex flex-col items-start mt-10 lg:mt-0 relative">
          <div className="w-16 h-1.5 bg-[var(--accent)] mb-8 animate-fade-up rounded-full shadow-[0_0_15px_rgba(0,102,255,0.6)]" style={{ animationDelay: '0.4s' }}></div>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 leading-[1.1] font-[family-name:var(--font-space-grotesk)] animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.5s' }}>
            I'm Khozin,<br />a Web<br />Developer
          </h1>
          <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-10 max-w-sm animate-fade-up drop-shadow-md" style={{ animationDelay: '0.6s' }}>
            Mahasiswa Sistem Informasi yang mengeksplorasi pengembangan web, desain UI/UX, dan analisis sistem untuk menciptakan solusi digital terbaik.
          </p>
          <a href="#portfolio" className="w-14 h-14 bg-[var(--accent)] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,102,255,0.5)] animate-fade-up group" style={{ animationDelay: '0.7s' }}>
            <svg className="w-6 h-6 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* CENTER COLUMN - PHOTO */}
        <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[45%] h-[50vh] lg:h-[85vh] flex items-end justify-center animate-fade-up pointer-events-none" style={{ animationDelay: '0.6s' }}>
          <div className="w-full max-w-[400px] h-full rounded-t-[200px] backdrop-blur-sm bg-white/5 flex flex-col items-center justify-end pb-12 lg:pb-24 px-6 text-center border-t border-x border-white/10 shadow-2xl relative overflow-hidden pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <svg className="w-12 h-12 text-[#555] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-[#888] text-xs font-bold tracking-widest uppercase mb-2">Area Foto Utama</p>
              <p className="text-[#666] text-[11px]">Upload <span className="text-[var(--accent)] font-mono">foto.png</span> ke folder public.</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-1 flex flex-col gap-12 lg:ml-auto max-w-sm mt-8 lg:mt-0 relative">
          <div id="about" className="animate-fade-up scroll-mt-28" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[var(--accent)]">About Me</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 drop-shadow-md">
              Berfokus membangun antarmuka pengguna yang fungsional dan memiliki estetika tinggi. Masih penasaran dengan banyak hal — kode, desain, dan konten.
            </p>
            <a href="https://www.linkedin.com/in/khozin-sapzidan-aabb81303" target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2 text-white hover:text-[var(--accent)] transition-colors group w-fit">
              LEARN MORE 
              <span className="transition-transform group-hover:translate-x-1">➔</span>
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[var(--accent)]">My Work</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 drop-shadow-md">
              Kumpulan proyek pengembangan web, desain UI/UX, dan eksplorasi teknologi modern yang saya buat.
            </p>
            <a href="#portfolio" className="text-sm font-bold flex items-center gap-2 text-white hover:text-[var(--accent)] transition-colors group w-fit">
              BROWSE PORTFOLIO 
              <span className="transition-transform group-hover:translate-x-1">➔</span>
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '1.0s' }}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[var(--accent)]">Follow Me</h3>
            <div className="flex gap-5">
              {[
                { url: "https://github.com/khzasn", path: "M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.27 7.86 10.77.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" },
                { url: "https://www.linkedin.com/in/khozin-sapzidan-aabb81303", path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" },
                { url: "https://tiktok.com/@khzasn", path: "M16.6 5.82c-1-.87-1.6-2.1-1.66-3.44h-3.34v13.5a2.72 2.72 0 1 1-1.93-2.6V9.9a6.1 6.1 0 1 0 5.27 6.04V9.7a8.3 8.3 0 0 0 4.9 1.58V8.03c-1.06 0-2.24-.4-3.24-1.14v-1.07Z" },
                { url: "https://music.youtube.com/@khozinsapzidan7580", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2ZM9.6 7.5v9l7-4.5-7-4.5Z" }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] hover:scale-110 transition-all drop-shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={social.path}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* PORTFOLIO / PROJECTS SECTION */}
      <section id="portfolio" className={`w-full relative z-30 py-24 transition-all duration-1000 delay-300 scroll-mt-0 ${entered ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-t border-white/10 z-0"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-12 h-1 bg-[var(--accent)] mb-6 shadow-[0_0_10px_rgba(0,102,255,0.8)]"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-white drop-shadow-lg">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl text-[15px]">
              Karya terpilih dari eksplorasi saya di bidang web development dan desain antarmuka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                title: "Sistem Informasi Akademik",
                desc: "Aplikasi berbasis web untuk manajemen data mahasiswa, dosen, dan penjadwalan perkuliahan secara terintegrasi dan efisien.",
                tags: ["PHP", "MySQL", "Bootstrap"]
              },
              {
                title: "E-Commerce UI/UX Design",
                desc: "Prototipe desain antarmuka aplikasi mobile untuk toko online, berfokus pada kemudahan navigasi dan pengalaman pengguna yang modern.",
                tags: ["Figma", "Prototyping"]
              },
              {
                title: "Modern Portfolio Website",
                desc: "Pengembangan website portofolio interaktif yang sangat responsif, dilengkapi animasi mulus, efek glassmorphism, dan mouse tracking glow.",
                tags: ["Next.js", "React", "Tailwind"]
              }
            ].map((proj, i) => (
              <div key={i} className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.3)]">
                <div className="h-56 bg-black/40 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  <span className="text-white/30 text-sm tracking-widest font-bold group-hover:scale-110 transition-transform duration-500">GAMBAR PROJECT {i+1}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] text-white group-hover:text-[var(--accent)] transition-colors">{proj.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-white/90 bg-white/10 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm group-hover:bg-[var(--accent)]/20 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)] transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full relative z-30 bg-black/80 backdrop-blur-xl border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Khozin Sapzidan. Built with Next.js & Tailwind CSS.</p>
      </footer>

      {/* MUSIC WIDGET */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 backdrop-blur-md bg-black/40 border border-white/10 rounded-full py-2 px-4 pl-3 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 invisible"}`}
      >
        <div className="flex gap-[3px] items-end h-[14px]">
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto', boxShadow: '0 0 8px var(--accent)' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.2s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto', boxShadow: '0 0 8px var(--accent)' }}></span>
          <span className="w-[3px] rounded-[2px] bg-[var(--accent)] animate-eq" style={{ animationDelay: '0.4s', animationPlayState: isMuted ? 'paused' : 'running', height: isMuted ? '4px' : 'auto', boxShadow: '0 0 8px var(--accent)' }}></span>
        </div>
        <button 
          onClick={toggleMute}
          aria-label="Bisukan musik"
          className="w-[34px] h-[34px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]"
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
