export default function Archived() {
  const archives = [
    { id: '#AX-99421', title: 'Alpha Stream 09', protocol: 'v4.2.8 SHA-256', type: 'Encrypted Stream', synced: '24 Oct 2023', size: '1.2 GB', tag: 'LOCKED' },
    { id: '#CX-01128', title: 'Client: NeoTokyo', protocol: 'Legacy v1.0', type: 'Conversation Log', synced: '12 Jan 2024', size: '452 KB', tag: 'ARCHIVED' },
    { id: '#KX-10022', title: 'Key Exchange 8b', protocol: 'Signal v7', type: 'System Protocol', synced: '02 Feb 2024', size: '12 MB', tag: 'REDACTED' },
    { id: '#MX-77312', title: 'Mainframe Logs', protocol: 'G-Node v9', type: 'Metadata Batch', synced: '15 Feb 2024', size: '8.4 GB', tag: 'PENDING' },
    { id: '#BX-00041', title: 'Asset Backup', protocol: 'Brotli 1.1', type: 'Media Bundle', synced: '28 Feb 2024', size: '14.2 GB', tag: 'COMPRESSED' },
    { id: '#VX-55420', title: 'Voice Protocol', protocol: 'FLAC Multi', type: 'Audio Data', synced: '01 Mar 2024', size: '210 MB', tag: 'ENCRYPTED' },
  ];

  return (
    <>
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-glass-bg backdrop-blur-lg border-b border-border-subtle flex justify-between items-center px-gutter z-50">
        <div className="flex items-center w-1/3">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary-fixed-dim placeholder:text-on-surface-variant/50" placeholder="Search archives..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">shield</span></button>
            <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">terminal</span></button>
          </div>
          <div className="h-6 w-px bg-border-subtle"></div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full border border-secondary p-[2px]">
              <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-[10px] text-on-secondary font-bold">AV</div>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">Active</span>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <div className="p-container-padding">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-2">Communication Archives</h2>
              <p className="text-on-surface-variant max-w-xl">Deep storage for encrypted data streams, legacy conversations, and authenticated protocol logs. All items are cold-stored with periodic integrity checks.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-surface-container-high border border-border-subtle text-on-surface-variant font-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Sort by Date
              </button>
              <button className="px-4 py-2 rounded-lg bg-surface-container-high border border-border-subtle text-on-surface-variant font-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Logs
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {archives.map((a, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex flex-col gap-4 group">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-fixed-dim">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{a.title}</h3>
                      <span className="text-xs text-secondary font-label-md uppercase tracking-widest">{a.type}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] rounded border border-border-subtle">{a.tag}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-3 pt-2 border-t border-border-subtle/50">
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-label-md uppercase opacity-50">Archive ID</p>
                    <p className="text-xs font-label-md text-primary-fixed-dim">{a.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-label-md uppercase opacity-50">Protocol</p>
                    <p className="text-xs font-label-md">{a.protocol}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-label-md uppercase opacity-50">Last Synced</p>
                    <p className="text-xs font-label-md">{a.synced}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-label-md uppercase opacity-50">File Size</p>
                    <p className="text-xs font-label-md">{a.size}</p>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  <button className="flex-1 py-2 rounded bg-surface-container-highest text-[11px] font-bold hover:bg-surface-variant transition-colors">DECRYPT</button>
                  <button className="px-2 py-2 rounded bg-surface-container-highest hover:text-primary-fixed-dim transition-colors">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-8 items-center justify-center p-6 bg-surface-container rounded-2xl border border-border-subtle/50">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-md mb-1">Total Archived</p>
              <p className="text-2xl font-bold text-primary-fixed-dim">1.4 TB</p>
            </div>
            <div className="h-8 w-px bg-border-subtle"></div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-md mb-1">Items Count</p>
              <p className="text-2xl font-bold text-on-surface">8,922</p>
            </div>
            <div className="h-8 w-px bg-border-subtle"></div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-md mb-1">Encryption Tier</p>
              <p className="text-2xl font-bold text-secondary">AES-256</p>
            </div>
            <div className="h-8 w-px bg-border-subtle"></div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-md mb-1">Uptime</p>
              <p className="text-2xl font-bold text-on-surface">99.9%</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
