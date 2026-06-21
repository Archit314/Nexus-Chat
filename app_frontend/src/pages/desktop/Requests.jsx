export default function Requests() {
  const requests = [
    { name: 'Kaelen_Mod_04', mutual: 14, timestamp: '2023.10.27 // 14:22:01', encryption: 'AES-256 VERIFIED', secure: true },
    { name: 'Sera_Flux', mutual: 2, timestamp: '2023.10.27 // 09:12:44', encryption: 'RSA-4096 VERIFIED', secure: true },
    { name: 'System_Arch_3', mutual: 0, timestamp: '2023.10.26 // 23:59:59', encryption: 'UNKNOWN PROTOCOL', secure: false },
    { name: 'Dr_Voxel_PhD', mutual: 142, timestamp: '2023.10.26 // 18:05:30', encryption: 'ECDSA SECURE', secure: true },
    { name: 'Proto_X', mutual: 3, timestamp: '2023.10.26 // 11:40:12', encryption: 'AES-256 VERIFIED', secure: true },
  ];

  return (
    <>
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-glass-bg backdrop-blur-lg border-b border-border-subtle flex justify-between items-center px-gutter z-40">
        <div className="flex items-center flex-1 max-w-2xl">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary-fixed-dim/50 transition-all font-body-md" placeholder="Search incoming signals..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6 ml-gutter">
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">shield</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">terminal</span></button>
          </div>
          <div className="h-6 w-px bg-border-subtle"></div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-secondary uppercase tracking-widest text-[10px]">Secure Node</span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          </div>
        </div>
      </header>
      <div className="pt-24 px-10 pb-10 max-w-6xl mx-auto relative z-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Connection Requests</h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-lg">Manage incoming handshake protocols. Review node security before granting persistent access to your communication stream.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-body-md hover:bg-surface-container-high transition-colors">Select All</button>
            <button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-body-md hover:bg-surface-container-high transition-colors">Reject All</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {requests.map((r, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex items-center gap-6 group hover:border-primary-fixed-dim/30 transition-all duration-500">
              <div className="relative">
                {r.secure ? (
                  <div className="w-16 h-16 rounded-full border-2 border-surface-variant bg-surface-container"></div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-variant">
                    <span className="material-symbols-outlined text-[32px] text-on-surface-variant">shield_lock</span>
                  </div>
                )}
                {r.secure && (
                  <div className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary-fixed rounded-full p-0.5 border-2 border-background">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                )}
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{r.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">group</span>
                    <span className="font-label-sm text-on-surface-variant">{r.mutual} Mutual Nodes</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-primary-fixed-dim text-[10px]">TIMESTAMP:</span>
                    <span className="font-label-md text-on-surface-variant text-[10px]">{r.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-label-md text-[10px] ${r.secure ? 'text-secondary' : 'text-error'}`}>ENCRYPTION:</span>
                    <span className="font-label-md text-on-surface-variant text-[10px]">{r.encryption}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button className="px-5 py-2.5 bg-surface-variant/30 text-on-surface-variant font-bold rounded-lg border border-border-subtle hover:bg-surface-variant hover:text-on-surface transition-all">Ignore</button>
                  <button className="px-6 py-2.5 bg-primary-fixed-dim text-on-primary-fixed font-bold rounded-lg cyan-glow hover:scale-105 transition-all">Accept</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="w-12 h-1 px-1 bg-surface-variant/50 rounded-full flex gap-1 mb-6">
            <div className="flex-1 bg-primary-fixed-dim rounded-full"></div>
            <div className="flex-1 bg-surface-variant/30 rounded-full"></div>
            <div className="flex-1 bg-surface-variant/30 rounded-full"></div>
          </div>
          <button className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md">
            <span>LOAD PREVIOUS ARCHIVE</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
          </button>
        </div>
      </div>
    </>
  );
}
