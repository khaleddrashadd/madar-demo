import SidebarNav from './SidebarNav';
import Header from './Header';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Outlet } from '@tanstack/react-router';

const MainLayout = () => {
  return (
    <div className="grid bg-ivory-100 w-full grid-cols-[max-content,minmax(0,1fr)] grid-rows-[max-content,1fr,max-content]">
      <SidebarNav />
      <Header />
      <main className="flex flex-col h-full">
        <Outlet />
        <Footer className="text-end" />
      </main>
      <Toaster position="top-right" closeButton />
    </div>
  );
};

export default MainLayout;
