import { Outlet } from 'react-router-dom';
import CommonSidebar from './CommonSidebar';

export default function DesktopLayout() {
  return (
    <div className="min-h-screen bg-surface-deep text-on-surface">
      <CommonSidebar />
      <main className="ml-sidebar-width min-h-screen flex flex-col relative">
        <Outlet />
      </main>
    </div>
  );
}
