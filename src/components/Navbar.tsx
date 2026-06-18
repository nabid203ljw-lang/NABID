import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { mockService } from '@/lib/mockDataService';
import { LabInfo } from '@/types';
import Logo from './Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Members', path: '/members' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Admin', path: '/admin' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [labInfo, setLabInfo] = useState<LabInfo | null>(null);
  const location = useLocation();

  useEffect(() => {
    mockService.getLabInfo().then(setLabInfo);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b',
        scrolled ? 'py-2 border-slate-200 shadow-sm' : 'py-4 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-ku-red',
                  location.pathname === item.path ? 'text-ku-red' : 'text-slate-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-ku-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === item.path ? 'bg-ku-red/10 text-ku-red' : 'text-slate-600 hover:bg-slate-50 hover:text-ku-red'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ku-red border-t border-slate-100 mt-4"
            >
              Admin Dashboard
            </Link>
            <div className="px-3 py-4 mt-4 bg-slate-50 rounded-xl">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Affiliation</p>
              <p className="text-xs font-bold text-slate-900">고려대학교 세종캠퍼스 약학대학</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
