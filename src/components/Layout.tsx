import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';
import { mockService } from '@/lib/mockDataService';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const fetchTheme = () => {
      mockService.getLabInfo().then(info => {
        if (info?.primaryColor) {
          document.documentElement.style.setProperty('--ku-red', info.primaryColor);
        }
      });
    };

    fetchTheme();

    window.addEventListener('labInfoUpdated', fetchTheme);
    return () => {
      window.removeEventListener('labInfoUpdated', fetchTheme);
    };
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
