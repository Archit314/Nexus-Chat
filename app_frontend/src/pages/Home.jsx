export default function Home() {
  return (
    <>
      <header className="hidden md:flex h-16 px-gutter items-center justify-between glass-card border-b border-border-subtle z-30 sticky top-0 bg-glass-bg">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
              <div className="w-full h-full rounded-full bg-surface-container"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h2 className="text-body-md font-bold text-text-primary">Alex Rivera</h2>
            <span className="text-[11px] text-secondary">Active now</span>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">call</span></button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">videocam</span></button>
          <div className="h-4 w-px bg-border-subtle mx-1"></div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
        </div>
      </header>
      <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-white/5 bg-obsidian-900/80 backdrop-blur-md z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border border-nexus-cyan/30 bg-obsidian-700"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-nexus-cyan rounded-full border-2 border-obsidian-900"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider uppercase text-nexus-cyan">Nexus Chat</span>
              <span className="text-[10px] text-nexus-cyan/60 font-mono uppercase">System Active — v4.2.0</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400">
            <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </header>
      <div className="hidden md:flex flex-1 items-center justify-center p-6 md:p-container-padding">
        <div className="glass-card w-full max-w-2xl rounded-2xl p-8 md:p-12 flex flex-col items-center text-center space-y-8 float-anim">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[40px]">person_search</span>
          </div>
          <div className="space-y-3">
            <h1 className="font-headline-lg text-headline-lg font-bold text-text-primary">Find your connections</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">Search the network for colleagues and friends not yet in your contacts.</p>
          </div>
          <div className="w-full space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary/50 group-focus-within:text-primary transition-colors">search</span>
              </div>
              <input className="w-full bg-surface-muted/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-body-md text-text-primary placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all font-label-md" placeholder="Search by name, email, or @handle..." type="text" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-label-sm text-on-surface-variant/50 uppercase tracking-widest">Trending:</span>
              <button className="text-label-sm text-primary hover:underline">#DesignOps</button>
              <button className="text-label-sm text-primary hover:underline">#NexusCore</button>
              <button className="text-label-sm text-primary hover:underline">#FluxEngine</button>
            </div>
          </div>
          <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Start Discovery
          </button>
        </div>
      </div>
      <main className="md:hidden flex-1 overflow-y-auto no-scrollbar relative flex flex-col items-center justify-center p-6 space-y-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-nexus-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center space-y-2 z-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Connect with the Future.</h1>
          <p className="text-gray-400 text-sm font-mono uppercase tracking-[0.2em]">Flux Protocol Initialized</p>
        </div>
        <section className="w-full max-w-sm glass-panel rounded-2xl p-6 space-y-6 z-10" style={{ background: 'rgba(30,37,43,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)' }}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-nexus-cyan/50" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd"></path>
                </svg>
              </div>
              <input className="block w-full bg-obsidian-800/50 border-white/10 rounded-xl py-3.5 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-nexus-cyan focus:border-nexus-cyan text-gray-200 transition-all font-mono" placeholder="Search by name, ID, or @handle..." type="text" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-obsidian-700/50 rounded-full text-[10px] font-bold text-gray-400 border border-white/5 hover:border-nexus-cyan/30 transition-colors cursor-pointer">#DesignOps</span>
              <span className="px-3 py-1 bg-obsidian-700/50 rounded-full text-[10px] font-bold text-gray-400 border border-white/5 hover:border-nexus-cyan/30 transition-colors cursor-pointer">#NexusCore</span>
              <span className="px-3 py-1 bg-obsidian-700/50 rounded-full text-[10px] font-bold text-gray-400 border border-white/5 hover:border-nexus-cyan/30 transition-colors cursor-pointer">#FluxEngine</span>
            </div>
          </div>
          <button className="w-full bg-nexus-cyan hover:bg-cyan-400 text-obsidian-900 font-black uppercase tracking-widest py-4 rounded-xl transition-all active:scale-[0.98] cyan-glow text-sm">
            Start Discovery
          </button>
        </section>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-obsidian-800/50 rounded-lg border border-white/5 z-10">
          <div className="w-1.5 h-1.5 bg-nexus-cyan rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">Searching Node: 77.214.8.109</span>
        </div>
      </main>
      <footer className="md:hidden bg-obsidian-900 border-t border-white/5 px-4 py-2 flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-tighter shrink-0">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-nexus-cyan">●</span>
            <span>Node: US-EAST-1</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Latency: 22ms</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span>E-Hash: 8xf2...9aa1</span>
        </div>
      </footer>
    </>
  );
}
