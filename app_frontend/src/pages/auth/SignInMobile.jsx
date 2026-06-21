export default function SignInMobile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden bg-surface-deep">
      <main className="w-full max-w-md relative z-10">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(0,219,233,0.1)]">
              <span className="material-symbols-outlined text-surface-tint text-3xl">terminal</span>
            </div>
          </div>
          <h1 className="font-headline-md text-headline-md text-text-primary tracking-tight">Nexus Chat</h1>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1">Encrypted Gateway</p>
        </div>
        <div className="glass-card rounded-xl p-8 relative overflow-hidden shadow-2xl">
          <div className="scanline"></div>
          <div className="space-y-6">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-1">Access Protocol</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Verify credentials to initialize session.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                  USER_IDENTITY
                </label>
                <div className="relative group">
                  <input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-4 py-3 font-label-md text-text-primary focus:outline-none glow-input transition-all placeholder:text-outline-variant" placeholder="username@nexus.sys" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  PASSCODE_STRING
                </label>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-4 py-3 font-label-md text-text-primary focus:outline-none glow-input transition-all placeholder:text-outline-variant" placeholder="••••••••••••" type="password" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="w-4 h-4 rounded border-border-subtle bg-surface-container-lowest text-surface-tint focus:ring-surface-tint focus:ring-offset-surface-deep" type="checkbox" />
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Persistent Auth</span>
                </label>
                <a className="font-label-sm text-label-sm text-surface-tint hover:underline transition-all" href="#">Recover Access</a>
              </div>
              <button className="w-full py-4 bg-primary-container hover:bg-surface-tint text-on-primary-container font-headline-sm rounded-lg shadow-[0_4px_20px_rgba(0,240,255,0.25)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wide">
                <span className="material-symbols-outlined">power_settings_new</span>
                Initialize Session
              </button>
            </div>
            <div className="pt-4 border-t border-border-subtle flex flex-col items-center gap-4">
              <p className="font-body-md text-body-md text-on-surface-variant">New operator?</p>
              <button className="w-full py-3 bg-transparent border border-border-subtle hover:bg-surface-variant/20 text-primary font-label-md rounded-lg transition-all flex items-center justify-center gap-2">
                Register New Node
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-6 bg-surface-deep/80 backdrop-blur-sm border-t border-border-subtle">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Node Status</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4edea3]"></span>
                <span className="font-label-md text-label-md text-secondary">ACTIVE_OPERATIONAL</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 border-l border-border-subtle pl-4">
            <div className="flex flex-col items-end">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Uptime</span>
              <span className="font-label-md text-label-md text-primary">000:14:22:09</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">analytics</span>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-6 opacity-40">
          <span className="font-label-sm text-[9px] text-on-surface-variant">V-2.4.0-STABLE</span>
          <span className="font-label-sm text-[9px] text-on-surface-variant">TLS 1.3 ENCRYPTED</span>
          <span className="font-label-sm text-[9px] text-on-surface-variant">REGION: US-EAST-01</span>
        </div>
      </footer>
    </div>
  );
}
