import { Outlet } from 'react-router-dom';
import CommonBottomFooter from './CommonBottomFooter';

export default function MobileLayout() {
  return (
    <div className="h-screen flex flex-col bg-obsidian-900 text-gray-100 font-sans overflow-hidden select-none">
      <main className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
        <Outlet />
      </main>
      <CommonBottomFooter />
    </div>
  );
}
