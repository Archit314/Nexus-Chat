export default function Messages() {
  return (
    <div className="flex flex-col h-screen w-full relative bg-surface-deep">
      <header className="bg-glass-bg backdrop-blur-md border-b border-border-subtle flex justify-between items-center px-gutter w-full sticky top-0 z-50 h-16 shrink-0">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-surface-variant/50 transition-colors duration-400 rounded-full">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border border-primary/20 bg-surface-container"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-deep"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight">Alex Rivera</span>
              <span className="font-label-sm text-label-sm text-secondary-fixed">Online — Active 2m ago</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-surface-variant/50 transition-colors duration-400 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant">videocam</span>
          </button>
          <button className="p-2 hover:bg-surface-variant/50 transition-colors duration-400 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant">info</span>
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6 relative z-10 no-scrollbar">
        <div className="flex justify-center">
          <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm font-label-md text-on-surface-variant border border-border-subtle">Today, Oct 24</span>
        </div>
        <div className="flex flex-col items-start max-w-[85%] group">
          <div className="flex items-end gap-2">
            <div className="message-bubble-inbound p-4 rounded-2xl rounded-bl-none text-on-surface leading-relaxed shadow-sm">
              Hey! I've just finished the initial technical specifications for the Obsidian Flux project. The latency optimizations look promising.
            </div>
          </div>
          <span className="mt-1 ml-1 text-[10px] font-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">10:42 AM</span>
        </div>
        <div className="flex flex-col items-end max-w-[85%] self-end group">
          <div className="message-bubble-outbound p-4 rounded-2xl rounded-br-none backdrop-blur-md text-primary leading-relaxed shadow-sm">
            That's great news, Alex. Did you manage to implement the glassmorphic rendering pipeline we discussed?
          </div>
          <div className="mt-1 mr-1 flex items-center gap-1">
            <span className="text-[10px] font-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">10:45 AM</span>
            <span className="material-symbols-outlined text-secondary-fixed text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
          </div>
        </div>
        <div className="flex flex-col items-start max-w-[85%] group">
          <div className="flex flex-col gap-2">
            <div className="message-bubble-inbound p-4 rounded-2xl rounded-bl-none text-on-surface leading-relaxed">
              Yes, it's working perfectly. Check out this preview of the shader integration.
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
        </div>
        <div className="flex flex-col items-end max-w-[85%] self-end group">
          <div className="message-bubble-outbound p-4 rounded-2xl rounded-br-none backdrop-blur-md text-primary leading-relaxed">
            Impressive. The vibrancy on the cyan accents is exactly what the brand needs. Let's push this to the staging environment.
          </div>
          <div className="mt-1 mr-1 flex items-center gap-1">
            <span className="text-[10px] font-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">10:48 AM</span>
            <span className="material-symbols-outlined text-secondary-fixed text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
          </div>
        </div>
        <div className="h-4"></div>
      </main>
      <footer className="p-4 bg-surface-deep/80 backdrop-blur-xl border-t border-border-subtle z-20">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 duration-200">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <div className="flex-1 bg-surface-container-high border border-border-subtle rounded-full px-4 py-2 flex items-center gap-2 group focus-within:border-primary-fixed-dim/50 transition-all duration-300">
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant py-1 text-body-md" placeholder="Type a message..." type="text" />
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </button>
          </div>
          <button className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary active:scale-90 transition-all shadow-[0_0_15px_rgba(0,219,233,0.3)]">
            <span className="material-symbols-outlined">mic</span>
          </button>
        </div>
        <div className="h-4 md:hidden"></div>
      </footer>
    </div>
  );
}
