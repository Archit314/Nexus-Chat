export default function Home() {
  return (
    <>
      <header className="h-16 px-gutter flex items-center justify-between glass-card border-b border-border-subtle z-30 sticky top-0 bg-glass-bg">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button className="p-2 text-on-surface-variant"><span className="material-symbols-outlined">menu</span></button>
          </div>
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
      <div className="flex-1 flex items-center justify-center p-6 md:p-container-padding">
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
      <nav className="md:hidden fixed bottom-0 w-full h-16 glass-card border-t border-border-subtle flex items-center justify-around z-50">
        <button className="flex flex-col items-center gap-0.5 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
          <span className="text-[10px] font-bold">Chat</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold">People</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <div className="w-5 h-5 rounded-full overflow-hidden border border-border-subtle"></div>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </nav>
    </>
  );
}
