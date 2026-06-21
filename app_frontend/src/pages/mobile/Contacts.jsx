export default function Contacts() {
  const contacts = [
    { name: 'Alex Rivera', status: 'Just now', desc: 'Reviewing system architecture...', online: true },
    { name: 'Sarah Chen', status: '5m ago', desc: 'Available for sync-up', online: true },
    { name: 'Jordan Blake', status: '2h ago', desc: 'In deep work mode', online: false },
    { name: 'Elena Rodriguez', status: 'Active', desc: 'Working on the Flux API', online: true },
    { name: 'Marcus Wright', status: 'Online', desc: 'Checking global metrics', online: true },
  ];

  return (
    <>
      <header className="bg-glass-bg backdrop-blur-md flex justify-between items-center px-gutter w-full sticky top-0 z-50 h-16 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="font-headline-md text-headline-md font-bold text-primary">Nexus Chat</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400 p-2 rounded-full">notifications</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400 p-2 rounded-full">settings</button>
          <div className="w-8 h-8 rounded-full border border-border-subtle overflow-hidden bg-surface-container"></div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-gutter pt-6 pb-24">
        <div className="mb-8">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
            <input className="w-full bg-surface-muted border border-border-subtle rounded-xl py-3 pl-12 pr-4 text-body-md focus:outline-none focus:border-primary-container/50 focus:ring-2 focus:ring-primary-container/10 transition-all placeholder:text-on-surface-variant/50" placeholder="Search contacts..." type="text" />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-sm text-headline-sm text-text-primary">Contact Network</h2>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Active: 4</span>
        </div>
        <div className="grid grid-cols-1 gap-stack-gap">
          {contacts.map((c, i) => (
            <div key={i} className="glass-panel border border-border-subtle rounded-xl p-4 flex items-center gap-4 hover:border-primary-container/30 transition-all group active:scale-95 duration-400">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-border-subtle bg-surface-container"></div>
                <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-surface-deep ${c.online ? 'bg-secondary' : 'border-2 border-on-surface-variant bg-transparent'}`}></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-body-lg text-body-lg text-text-primary font-semibold">{c.name}</h3>
                  <span className="font-label-sm text-label-sm text-text-secondary">{c.status}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{c.desc}</p>
              </div>
              <button className="material-symbols-outlined text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">chat_bubble</button>
            </div>
          ))}
        </div>
        <div className="mt-12 p-4 border-t border-border-subtle">
          <div className="flex flex-col gap-2 font-label-md text-label-md text-on-surface-variant/40">
            <div className="flex justify-between">
              <span>SYSTEM_LATENCY</span>
              <span>14.2ms</span>
            </div>
            <div className="flex justify-between">
              <span>ENCRYPTION_LAYER</span>
              <span>AES-256-GCM</span>
            </div>
            <div className="flex justify-between">
              <span>FLUX_NODE_STABILITY</span>
              <span className="text-secondary">99.98%</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
