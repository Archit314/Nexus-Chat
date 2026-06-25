import { useEffect } from 'react';
import { useFriendRequests } from '../hooks';

export default function Requests() {
  const { pending, loading, error, fetchPending, acceptRequest, rejectRequest } = useFriendRequests();

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  return (
    <div className="flex flex-col flex-1">
      <header className="flex h-16 bg-glass-bg backdrop-blur-lg border-b border-border-subtle justify-between items-center px-gutter z-40 sticky top-0">
        <div className="flex items-center flex-1 max-w-2xl">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary-fixed-dim/50 transition-all font-body-md" placeholder="Search incoming signals..." type="text" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 ml-gutter">
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">shield</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-all duration-400 hover:scale-110"><span className="material-symbols-outlined">terminal</span></button>
          </div>
          <div className="h-6 w-px bg-border-subtle"></div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-secondary uppercase tracking-widest text-[10px]">Secure Node</span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-4 md:px-10 py-6 md:py-10 max-w-6xl mx-auto w-full">
        <div className="mb-6 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Connection Requests</h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-lg">Manage incoming handshake protocols. Review node security before granting persistent access to your communication stream.</p>
          </div>
        </div>
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse"></div>
              <span className="font-label-md uppercase tracking-widest">Scanning network...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 mb-6">
            <p className="text-error text-sm font-label-md">{error}</p>
          </div>
        )}
        {!loading && !error && pending.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="material-symbols-outlined text-[64px] text-primary-fixed-dim/40">group_add</span>
            <h3 className="font-headline-md text-headline-md text-text-primary mt-4">All Clear</h3>
            <p className="font-body-md text-on-surface-variant mt-2">No pending connection requests.</p>
          </div>
        )}
        {!loading && pending.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {pending.map((r) => (
              <div key={r.id || r.requestId} className="glass-card rounded-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 group hover:border-primary-fixed-dim/30 transition-all duration-500">
                <div className="flex items-center gap-4 md:gap-6 flex-1">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-surface-variant bg-surface-container"></div>
                    <div className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary-fixed rounded-full p-0.5 border-2 border-background">
                      <span className="material-symbols-outlined text-[12px] md:text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{r.senderName || r.userName || `User #${r.senderId}`}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant shrink-0">schedule</span>
                      <span className="font-label-sm text-on-surface-variant text-sm">{r.timestamp || 'Pending'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:ml-auto shrink-0">
                  <button
                    onClick={() => rejectRequest(r.id || r.requestId)}
                    className="flex-1 md:flex-none px-4 md:px-5 py-2.5 bg-surface-variant/30 text-on-surface-variant font-bold rounded-lg border border-border-subtle hover:bg-surface-variant hover:text-on-surface transition-all"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => acceptRequest(r.id || r.requestId)}
                    className="flex-1 md:flex-none px-5 md:px-6 py-2.5 bg-primary-fixed-dim text-on-primary-fixed font-bold rounded-lg cyan-glow hover:scale-105 transition-all"
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && !error && pending.length > 0 && (
          <div className="mt-12 flex flex-col items-center">
            <div className="w-12 h-1 px-1 bg-surface-variant/50 rounded-full flex gap-1 mb-6">
              <div className="flex-1 bg-primary-fixed-dim rounded-full"></div>
              <div className="flex-1 bg-surface-variant/30 rounded-full"></div>
              <div className="flex-1 bg-surface-variant/30 rounded-full"></div>
            </div>
            <button className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md">
              <span>LOAD PREVIOUS ARCHIVE</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
