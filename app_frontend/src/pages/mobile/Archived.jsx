export default function Archived() {
  const items = [
    { name: 'Project X-Ray', time: '2h ago', preview: 'The protocol specs are finalized. Awaiting review from the security team.', icon: true },
    { name: 'Quantum Sync', time: 'Oct 24', preview: 'Shared file: core_infrastructure_v2.0.pdf', icon: false, initial: 'QS' },
    { name: 'Elena Vance', time: 'Oct 21', preview: "Let's revisit this conversation when the node deployment is complete.", icon: true },
  ];

  return (
    <>
      <header className="bg-glass-bg backdrop-blur-md flex justify-between items-center px-gutter w-full sticky top-0 z-50 h-16 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="font-headline-md text-headline-md font-bold text-primary">Nexus Chat</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full">search</button>
          <button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full">notifications</button>
          <button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full">settings</button>
        </div>
      </header>
      <main className="flex-grow flex flex-col px-4 pt-6 pb-24 gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-headline-md text-headline-md text-text-primary">Archived</h1>
          <span className="font-label-md text-label-md text-secondary border border-secondary/30 px-2 py-0.5 rounded uppercase tracking-widest">34 Files</span>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className="bg-surface-muted border border-border-subtle rounded-xl p-4 flex items-center gap-4 hover:bg-surface-variant/30 transition-all cursor-pointer group">
              <div className="relative w-12 h-12 flex-shrink-0">
                {item.icon ? (
                  <div className="w-full h-full rounded-full bg-surface-container"></div>
                ) : (
                  <div className="w-full h-full rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container font-bold text-lg">{item.initial}</div>
                )}
                <div className="absolute -bottom-1 -right-1 bg-surface-deep border border-border-subtle rounded-full p-1 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary-container">archive</span>
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-headline-sm text-headline-sm text-text-primary truncate">{item.name}</span>
                  <span className="font-label-md text-label-md text-text-secondary">{item.time}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant truncate">{item.preview}</p>
              </div>
            </div>
          ))}
          <div className="bg-surface-muted border border-border-subtle rounded-xl p-4 flex flex-col gap-3 hover:bg-surface-variant/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-secondary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">groups</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-surface-deep border border-border-subtle rounded-full p-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">archive</span>
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-headline-sm text-headline-sm text-text-primary truncate">Legacy Board</span>
                  <span className="font-label-md text-label-md text-text-secondary">Sep 15</span>
                </div>
                <p className="font-body-md text-body-md text-secondary">Group Archive (12 members)</p>
              </div>
            </div>
            <div className="flex gap-2 ml-16">
              <span className="bg-surface-container border border-border-subtle px-3 py-1 rounded-full text-label-sm font-label-sm text-on-surface-variant">Architecture</span>
              <span className="bg-surface-container border border-border-subtle px-3 py-1 rounded-full text-label-sm font-label-sm text-on-surface-variant">Closed</span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-8 border-t border-border-subtle flex flex-col gap-2">
          <div className="flex justify-between items-center opacity-40">
            <span className="font-label-md text-label-md uppercase tracking-widest text-text-secondary">System Node: LX-442</span>
            <span className="font-label-md text-label-md text-text-secondary">00:00:00 UTC</span>
          </div>
          <div className="h-1 bg-surface-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary-container/40 w-2/3"></div>
          </div>
          <div className="flex justify-between items-center opacity-40">
            <span className="font-label-sm text-label-sm text-text-secondary uppercase">Archive integrity: 100% Verified</span>
            <span className="font-label-sm text-label-sm text-text-secondary uppercase">Prot: Obsidian-V3</span>
          </div>
        </div>
      </main>
    </>
  );
}
