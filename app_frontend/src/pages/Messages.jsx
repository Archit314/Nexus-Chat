export default function Messages() {
  return (
    <div className="flex flex-col h-full w-full relative flex-1">
      <header className="flex h-16 px-gutter items-center justify-between glass-card border-b border-border-subtle z-30 sticky top-0 bg-glass-bg">
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
      <div className="flex-1 overflow-y-auto px-4 md:px-container-padding py-8 space-y-8 chat-scrollbar pb-32">
        <div className="flex justify-center">
          <span className="px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-on-surface-variant/50">Today</span>
        </div>
        <div className="flex flex-col gap-3 max-w-[85%] md:max-w-[70%]">
          <div className="glass-card rounded-2xl rounded-tl-none p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
            <p className="text-body-md text-on-surface relative z-10 leading-relaxed">Hey there! I just reviewed the latest design specs for the Nexus dashboard. The glassmorphism effects are looking really sharp.</p>
          </div>
          <div className="glass-card rounded-2xl rounded-tl-none p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
            <p className="text-body-md text-on-surface relative z-10 leading-relaxed">Do we have the final tokens for the Electric Blue accent? I want to make sure the contrast ratios are hitting our AA standards.</p>
          </div>
          <span className="text-[10px] text-on-surface-variant/60 ml-1">10:25 AM</span>
        </div>
        <div className="flex flex-col items-end gap-3 max-w-[85%] md:max-w-[70%] ml-auto">
          <div className="glass-card-primary rounded-2xl rounded-tr-none p-5 relative overflow-hidden group border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <p className="text-body-md text-primary relative z-10 leading-relaxed">Thanks, Alex! Glad you like the direction. I'm finishing up the token export right now.</p>
          </div>
          <div className="glass-card-primary rounded-2xl rounded-tr-none p-5 relative overflow-hidden group border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <p className="text-body-md text-primary relative z-10 leading-relaxed">I'll drop the JSON file here in a second. Check the 'Archive' tab if you need the previous iterations.</p>
          </div>
          <div className="flex items-center gap-1.5 mr-1">
            <span className="text-[10px] text-on-surface-variant/60">10:29 AM</span>
            <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 max-w-[85%] md:max-w-[70%]">
          <div className="glass-card rounded-2xl rounded-tl-none p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
            <p className="text-body-md text-on-surface relative z-10 leading-relaxed">Yes, it's working perfectly. Check out this preview of the shader integration.</p>
          </div>
          <div className="w-full bg-surface-container-low border border-border-subtle rounded-xl overflow-hidden glass-panel p-2 flex items-center gap-3 active:scale-95 transition-transform cursor-pointer">
            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed-dim">data_object</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-body-md font-medium text-primary truncate">flux_shader_v2.glsl</span>
              <span className="text-label-sm text-on-surface-variant">4.2 MB • Source Code</span>
            </div>
            <span className="material-symbols-outlined ml-auto text-on-surface-variant">download</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3 max-w-[85%] md:max-w-[70%] ml-auto">
          <div className="glass-card-primary rounded-2xl rounded-tr-none p-5 relative overflow-hidden group border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <p className="text-body-md text-primary relative z-10 leading-relaxed">Impressive. The vibrancy on the cyan accents is exactly what the brand needs. Let's push this to the staging environment.</p>
          </div>
          <div className="flex items-center gap-1.5 mr-1">
            <span className="text-[10px] text-on-surface-variant/60">10:48 AM</span>
            <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
          </div>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-75"></div>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-150"></div>
          </div>
          <span className="text-[11px] font-label-sm text-on-surface-variant italic">Alex is typing...</span>
        </div>
      </div>
      <footer className="floating-bar absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[800px] z-40 px-4 md:px-0">
        <div className="glass-card rounded-2xl p-2 flex items-center gap-2 border border-white/10 shadow-2xl float-anim">
          <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <div className="flex-1">
            <textarea className="w-full bg-transparent border-none focus:ring-0 text-body-md text-text-primary placeholder:text-on-surface-variant/50 resize-none py-2 max-h-32 chat-scrollbar" placeholder="Message Nexus..." rows="1"></textarea>
          </div>
          <div className="flex items-center gap-0.5">
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">mood</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary-container text-on-primary-container rounded-xl hover:brightness-110 active:scale-90 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
