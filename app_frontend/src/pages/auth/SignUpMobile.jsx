export default function SignUpMobile() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-4 bg-[#0d1117]">
      <header className="flex flex-col items-center mt-12 mb-8">
        <div className="w-14 h-14 bg-[#161b22] border border-[#30363d] rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <svg fill="none" height="28" stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Nexus Chat</h1>
        <p className="font-mono text-[10px] tracking-[0.3em] text-gray-400 uppercase">Encrypted Gateway</p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-sm p-8 rounded-2xl shadow-2xl" style={{ background: 'rgba(22,27,34,0.8)', backdropFilter: 'blur(12px)', border: '1px solid #30363d' }}>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">Access Protocol</h2>
            <p className="text-sm text-gray-400">Verify credentials to initialize session.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="flex items-center gap-2 mb-2 text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Electronic Mail
              </label>
              <input className="nexus-input w-full h-12 px-4 rounded-lg text-sm placeholder:text-gray-600 focus:text-white" placeholder="operator@nexus.sys" required type="email" />
            </div>
            <div>
              <label className="flex items-center gap-2 mb-2 text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
                Nexus Identifier
              </label>
              <input className="nexus-input w-full h-12 px-4 rounded-lg text-sm placeholder:text-gray-600 focus:text-white" placeholder="ident_alpha_01" required type="text" />
            </div>
            <div className="relative">
              <label className="flex items-center gap-2 mb-2 text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                  <rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Create Access Key
              </label>
              <input className="nexus-input w-full h-12 px-4 rounded-lg text-sm placeholder:text-gray-600 focus:text-white" id="accessKey" required type="password" defaultValue="••••••••••••" />
              <button className="absolute right-4 top-[38px] text-gray-500 hover:text-cyan-400" type="button">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-xs text-gray-400">
                <input className="rounded border-gray-700 bg-gray-900 text-cyan-500 focus:ring-0 mr-2" type="checkbox" />
                Persistent Auth
              </label>
              <a className="text-xs text-cyan-500 hover:text-cyan-400 font-medium" href="#">Recover Access</a>
            </div>
            <button className="w-full h-14 bg-cyan-400 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)]" type="submit">
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="20">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" x2="20" y1="8" y2="14"></line>
                <line x1="23" x2="17" y1="11" y2="11"></line>
              </svg>
              <span className="font-mono tracking-tight text-lg">CREATE IDENTITY</span>
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400 mb-4">Already recognized by Nexus?</p>
            <button className="w-full h-12 border border-gray-800 rounded-lg font-mono text-xs text-gray-300 hover:bg-gray-800 transition-colors uppercase tracking-widest">
              Authorize Here
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-12 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between border-t border-gray-800 pt-4 px-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase text-gray-500">Node Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-emerald-500 font-bold">ACTIVE_OPERATIONAL</span>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-800 mx-4"></div>
          <div className="flex flex-col flex-grow items-end mr-4">
            <span className="text-[9px] font-mono uppercase text-gray-500">Uptime</span>
            <span className="text-[11px] font-mono text-white">00:14:22:11</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-900 rounded-md border border-gray-800">
            <svg fill="none" height="14" stroke="#4b5563" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
              <path d="M12 20v-6M6 20V10M18 20V4"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4 px-2">
          <span className="text-[8px] font-mono text-gray-600">V-2.4.0-STABLE</span>
          <span className="text-[8px] font-mono text-gray-600">TLS 1.3 ENCRYPTED</span>
          <span className="text-[8px] font-mono text-gray-600">REGION: US-EAST-01</span>
        </div>
      </footer>
    </div>
  );
}
