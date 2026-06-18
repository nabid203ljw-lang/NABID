import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Mail, MapPin, Beaker, Globe, Shield, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { LOGOS } from '@/constants';
import { mockService } from '@/lib/mockDataService';

export default function Footer() {
  const [kuLogoUrl, setKuLogoUrl] = useState<string>(LOGOS.KU_PHARMACY);
  const location = useLocation();

  useEffect(() => {
    const fetchKuLogo = () => {
      mockService.getLabInfo().then(info => {
        if (info?.kuLogoUrl) {
          setKuLogoUrl(info.kuLogoUrl);
        } else {
          setKuLogoUrl(LOGOS.KU_PHARMACY);
        }
      }).catch(err => console.error(err));
    };

    fetchKuLogo();

    window.addEventListener('labInfoUpdated', fetchKuLogo);
    return () => {
      window.removeEventListener('labInfoUpdated', fetchKuLogo);
    };
  }, [location.pathname]);

  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex flex-wrap items-center gap-8 mb-12">
              <Logo className="h-10 w-auto" />
              <div className="hidden sm:block h-10 w-px bg-slate-200" />
              <img 
                src={kuLogoUrl} 
                alt="Korea University College of Pharmacy" 
                className="h-10 w-auto object-contain transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-ku-red mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-1">Office</p>
                  <p className="text-xs text-slate-500">고려대학교 세종캠퍼스 과학기술2관 123A</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Beaker size={18} className="text-ku-red mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-1">Laboratory</p>
                  <p className="text-xs text-slate-500">고려대학교 세종캠퍼스 약학대학 연구실험동 203호</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={18} className="text-ku-red shrink-0" />
                <span className="text-xs text-slate-500">ljw1112@korea.ac.kr</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://sejong.korea.ac.kr" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-ku-red flex items-center transition-colors">
                  <ArrowRight size={12} className="mr-2" /> Korea University
                </a>
              </li>
              <li>
                <Link to="/publications" className="text-xs text-slate-500 hover:text-ku-red flex items-center transition-colors">
                  <ArrowRight size={12} className="mr-2" /> Research Papers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs text-slate-500 hover:text-ku-red flex items-center transition-colors">
                  <ArrowRight size={12} className="mr-2" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-12 text-center">
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Nano Advanced Bio Innovative Drug delivery Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
