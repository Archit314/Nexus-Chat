import { NavLink } from 'react-router-dom';

export default function CommonBottomFooter() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-nexus-cyan' : 'text-gray-500 hover:text-nexus-cyan'}`;

  return (
    <nav className="h-16 bg-obsidian-800 border-t border-white/5 flex items-center justify-around px-2 shrink-0" data-purpose="main-nav">
      <NavLink to="/mobile/home" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="text-[10px] font-bold">HOME</span>
      </NavLink>
      <NavLink to="/mobile/contacts" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <span className="text-[10px] font-bold">CONTACTS</span>
      </NavLink>
      <NavLink to="/mobile/messages" className={linkClass}>
        <div className="relative">
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-nexus-cyan rounded-full border border-obsidian-800"></span>
        </div>
        <span className="text-[10px] font-bold">MESSAGES</span>
      </NavLink>
      <NavLink to="/mobile/archived" className={linkClass}>
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="text-[10px] font-bold">ARCHIVED</span>
      </NavLink>
    </nav>
  );
}
