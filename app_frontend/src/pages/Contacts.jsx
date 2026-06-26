import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFriends } from '../hooks';
import { useSocketContext } from '../context/SocketContext';

export default function Contacts() {
  const navigate = useNavigate();
  const { friends, loading, error, fetchFriends } = useFriends();
  const { unreadCounts, onlineUsers } = useSocketContext();

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  return (
    <>
      <header className="hidden md:flex h-16 bg-glass-bg backdrop-blur-lg border-b border-border-subtle justify-between items-center px-gutter sticky top-0 z-50">
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
      <header className="md:hidden bg-glass-bg backdrop-blur-md flex justify-between items-center px-gutter w-full sticky top-0 z-50 h-16 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="font-headline-md text-headline-md font-bold text-primary">Nexus Chat</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400 p-2 rounded-full">notifications</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400 p-2 rounded-full">settings</button>
          <div className="w-8 h-8 rounded-full border border-border-subtle overflow-hidden bg-surface-container"></div>
        </div>
      </header>
      <div className="hidden md:block p-8 flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Active Directory</h2>
            <p className="text-on-surface-variant mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {friends.length || 0} Connected Nodes
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
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse"></div>
              <span className="font-label-md uppercase tracking-widest">Synchronizing nodes...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 mb-6">
            <p className="text-error text-sm font-label-md">{error}</p>
          </div>
        )}
        {!loading && !error && friends.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="material-symbols-outlined text-[64px] text-primary-fixed-dim/40">group</span>
            <h3 className="font-headline-md text-headline-md text-text-primary mt-4">No Connections Yet</h3>
            <p className="font-body-md text-on-surface-variant mt-2">Send a friend request to start building your network.</p>
          </div>
        )}
        {!loading && friends.length > 0 && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {friends.map((f, i) => (
              <div key={f.id || i} className="glass-card rounded-xl p-5 flex items-center justify-between group cursor-pointer" onClick={() => navigate(`/messages/${f.id || f.userId}`, { state: { userName: f.userName || f.name } })}>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-border-subtle group-hover:border-primary-fixed-dim/50 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-4 border-surface-deep bg-secondary"></div>
                    {unreadCounts[f.id || f.userId] > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-error text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-error/50">
                        {unreadCounts[f.id || f.userId]}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">{f.userName || f.name || `User #${f.id || f.userId}`}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-label-md uppercase tracking-wider ${onlineUsers.has(f.id || f.userId) ? 'bg-secondary/10 text-secondary' : 'bg-surface-variant text-on-surface-variant/50'}`}>{onlineUsers.has(f.id || f.userId) ? 'Active' : 'Offline'}</span>
                      <span className="text-on-surface-variant font-label-md text-[11px] opacity-60">{f.role || 'Connected'}</span>
                    </div>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            ))}
          </div>
        )}
        {!loading && friends.length > 0 && (
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
              <div className="text-headline-md font-bold text-secondary">{friends.length}</div>
              <div className="flex items-center gap-2 mt-4 text-[12px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
                Connected
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
        )}
      </div>
      <main className="md:hidden flex-1 overflow-y-auto px-gutter pt-6 pb-24">
        <div className="mb-8">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
            <input className="w-full bg-surface-muted border border-border-subtle rounded-xl py-3 pl-12 pr-4 text-body-md focus:outline-none focus:border-primary-container/50 focus:ring-2 focus:ring-primary-container/10 transition-all placeholder:text-on-surface-variant/50" placeholder="Search contacts..." type="text" />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-sm text-headline-sm text-text-primary">Contact Network</h2>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Total: {friends.length}</span>
        </div>
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse"></div>
          </div>
        )}
        {!loading && friends.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body-md text-on-surface-variant">No contacts yet.</p>
          </div>
        )}
        {!loading && friends.length > 0 && (
          <div className="grid grid-cols-1 gap-stack-gap">
            {friends.map((f, i) => (
              <div key={f.id || i} className="glass-panel border border-border-subtle rounded-xl p-4 flex items-center gap-4 hover:border-primary-container/30 transition-all group active:scale-95 duration-400 cursor-pointer" onClick={() => navigate(`/messages/${f.id || f.userId}`, { state: { userName: f.userName || f.name } })}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-border-subtle bg-surface-container"></div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-surface-deep bg-secondary"></div>
                    {unreadCounts[f.id || f.userId] > 0 && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-error text-white text-[8px] font-bold flex items-center justify-center shadow-lg shadow-error/50">
                        {unreadCounts[f.id || f.userId]}
                      </div>
                    )}
                  </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-body-lg text-body-lg text-text-primary font-semibold">{f.userName || f.name || `User #${f.id || f.userId}`}</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{onlineUsers.has(f.id || f.userId) ? 'Online' : 'Offline'}</p>
                </div>
                <span className="material-symbols-outlined text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">chat_bubble</span>
              </div>
            ))}
          </div>
        )}
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
