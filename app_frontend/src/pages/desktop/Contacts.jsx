export default function Contacts() {
  const contacts = [
    { name: 'Evelyn Vance', status: 'Active', role: 'Architect • London Node', sync: '14ms', node: '8824-VX', online: true },
    { name: 'Marcus Thorne', status: 'Busy', role: 'Lead Op • Singapore Node', sync: '102ms', node: '1109-TK', online: false },
    { name: 'Alex Chen', status: 'Active', role: 'Security • Tokyo Node', sync: '42ms', node: '4432-QA', online: true },
    { name: 'Dr. Aris Thorne', status: 'Offline', role: 'Advisor • Berlin Node', sync: '--', node: '9001-ER', online: false },
    { name: 'Jordan Moss', status: 'Active', role: 'Creative • NYC Node', sync: '8ms', node: '2200-NY', online: true },
    { name: 'Liam Zhang', status: 'Busy', role: 'Analyst • Seattle Node', sync: '215ms', node: '3311-WA', online: false },
  ];

  return (
    <>
      <header className="h-16 bg-glass-bg backdrop-blur-lg border-b border-border-subtle flex justify-between items-center px-gutter sticky top-0 z-50">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input className="w-full bg-surface-container/50 border-none rounded-full pl-10 pr-4 py-2 text-body-md focus:ring-1 focus:ring-primary-fixed-dim placeholder:text-on-surface-variant/50" placeholder="Search across nodes..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <button className="hover:text-primary transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">notifications</span></button>
            <button className="hover:text-primary transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">shield</span></button>
            <button className="hover:text-primary transition-all duration-400 hover:scale-105"><span className="material-symbols-outlined">terminal</span></button>
          </div>
          <div className="w-8 h-8 rounded-full border border-primary-fixed-dim/30 overflow-hidden bg-surface-container active-glow"></div>
        </div>
      </header>
      <div className="p-8 flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Active Directory</h2>
            <p className="text-on-surface-variant mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              14 Nodes Synchronized
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg glass-card text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
            <button className="px-4 py-2 rounded-lg glass-card text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-[18px]">sync</span>
              Re-Sync
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-center justify-between group" style={c.online ? {} : { opacity: 0.7 }}>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-border-subtle group-hover:border-primary-fixed-dim/50 transition-colors"></div>
                  <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-4 border-surface-deep ${c.online ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">{c.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-label-md uppercase tracking-wider ${c.online ? 'bg-secondary/10 text-secondary' : 'bg-surface-variant text-on-surface-variant opacity-60'}`}>{c.status}</span>
                    <span className="text-on-surface-variant font-label-md text-[11px] opacity-60">{c.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="font-label-md text-primary-fixed-dim text-[12px]">SYNC: {c.sync}</div>
                <div className="text-[10px] text-on-surface-variant opacity-50 uppercase tracking-tighter">NODE_ID: {c.node}</div>
                <button className="mt-2 text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="glass-card rounded-xl p-6 col-span-1 border-l-4 border-l-primary-fixed-dim">
            <div className="text-on-surface-variant font-label-md uppercase tracking-widest text-[10px] mb-2">Network Health</div>
            <div className="text-headline-md font-bold text-primary-fixed-dim">99.98%</div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary-fixed-dim h-full w-[99%]" style={{ boxShadow: '0 0 10px rgba(0, 219, 233, 0.5)' }}></div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 col-span-1">
            <div className="text-on-surface-variant font-label-md uppercase tracking-widest text-[10px] mb-2">Active Channels</div>
            <div className="text-headline-md font-bold text-secondary">248</div>
            <div className="flex items-center gap-2 mt-4 text-[12px] text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
              +12% vs last cycle
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 col-span-1">
            <div className="text-on-surface-variant font-label-md uppercase tracking-widest text-[10px] mb-2">Primary Node</div>
            <div className="text-headline-md font-bold text-text-primary">LON-01</div>
            <div className="text-[12px] text-on-surface-variant font-label-md mt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              51.5074° N, 0.1278° W
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
