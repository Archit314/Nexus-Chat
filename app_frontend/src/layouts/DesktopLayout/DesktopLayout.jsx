import { NavLink, Outlet } from 'react-router-dom';

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-400 group ${isActive ? 'text-primary-fixed-dim border-r-2 border-primary-fixed-dim bg-primary/10' : 'text-on-surface-variant hover:bg-surface-variant/50'}`;

  return (
    <>
      <div className="px-6 mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary-fixed-dim tracking-tight">Nexus Chat</h1>
        <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Command Center</p>
      </div>
      <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
        <NavLink to="/home" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">chat</span>
          <span className="font-body-md">Home</span>
        </NavLink>
        <NavLink to="/messages" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">forum</span>
          <span className="font-body-md">Messages</span>
        </NavLink>
        <NavLink to="/contacts" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">contacts</span>
          <span className="font-body-md">Contacts</span>
        </NavLink>
        <NavLink to="/requests" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">group_add</span>
          <span className="font-body-md">Requests</span>
        </NavLink>
        <NavLink to="/archived" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">archive</span>
          <span className="font-body-md">Archived</span>
        </NavLink>
        <div className="pt-8 pb-2">
          <button className="w-full bg-primary-container text-on-primary-container font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">add</span>
            New Message
          </button>
        </div>
      </nav>
      <footer className="px-4 mt-auto space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400" href="#">
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="font-body-md">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-colors duration-400" href="#">
          <span className="material-symbols-outlined text-xl">help</span>
          <span className="font-body-md">Support</span>
        </a>
        <div className="mt-4 flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-on-surface">A. Vance</span>
            <span className="text-[10px] text-secondary">PRO USER</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function BottomNav() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-nexus-cyan' : 'text-gray-500 hover:text-nexus-cyan'}`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-obsidian-800 border-t border-white/5 flex items-center justify-around px-2 z-[60]">
      <NavLink to="/home" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="text-[10px] font-bold">HOME</span>
      </NavLink>
      <NavLink to="/contacts" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <span className="text-[10px] font-bold">CONTACTS</span>
      </NavLink>
      <NavLink to="/messages" className={linkClass}>
        <div className="relative">
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-nexus-cyan rounded-full border border-obsidian-800"></span>
        </div>
        <span className="text-[10px] font-bold">MESSAGES</span>
      </NavLink>
      <NavLink to="/requests" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" x2="20" y1="8" y2="14"></line>
          <line x1="23" x2="17" y1="11" y2="11"></line>
        </svg>
        <span className="text-[10px] font-bold">REQUESTS</span>
      </NavLink>
      <NavLink to="/archived" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="text-[10px] font-bold">ARCHIVED</span>
      </NavLink>
    </nav>
  );
}

export default function DesktopLayout() {
  return (
    <div className="min-h-screen bg-surface-deep text-on-surface flex flex-col">
      <aside className="hidden md:flex w-sidebar-width h-screen fixed left-0 top-0 bg-glass-bg backdrop-blur-md border-r border-border-subtle flex-col py-container-padding z-[60]">
        <Sidebar />
      </aside>
      <main className="md:ml-sidebar-width flex-1 flex flex-col relative pb-16 md:pb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
