import { NavLink } from 'react-router-dom';

export default function CommonSidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-400 group ${isActive ? 'text-primary-fixed-dim border-r-2 border-primary-fixed-dim bg-primary/10' : 'text-on-surface-variant hover:bg-surface-variant/50'}`;

  return (
    <aside className="w-sidebar-width h-screen fixed left-0 top-0 bg-glass-bg backdrop-blur-md border-r border-border-subtle flex flex-col py-container-padding z-[60]">
      <div className="px-6 mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary-fixed-dim tracking-tight">Nexus Chat</h1>
        <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Command Center</p>
      </div>
      <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
        <NavLink to="/desktop/home" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">chat</span>
          <span className="font-body-md">Home</span>
        </NavLink>
        <NavLink to="/desktop/contacts" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">contacts</span>
          <span className="font-body-md">Contacts</span>
        </NavLink>
        <NavLink to="/desktop/requests" className={linkClass}>
          <span className="material-symbols-outlined text-xl group-hover:text-primary-fixed-dim">group_add</span>
          <span className="font-body-md">Requests</span>
        </NavLink>
        <NavLink to="/desktop/archived" className={linkClass}>
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
    </aside>
  );
}
