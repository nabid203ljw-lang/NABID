import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LOGOS } from '@/constants';
import { mockService } from '@/lib/mockDataService';

interface LogoProps {
  className?: string;
  vertical?: boolean;
}

export default function Logo({ 
  className, 
  vertical = false
}: LogoProps) {
  const [logoUrl, setLogoUrl] = useState<string>(LOGOS.NABID);
  const location = useLocation();

  useEffect(() => {
    const fetchLogo = () => {
      mockService.getLabInfo().then(info => {
        if (info?.logoUrl) {
          setLogoUrl(info.logoUrl);
        } else {
          setLogoUrl(LOGOS.NABID);
        }
      }).catch(err => console.error(err));
    };

    fetchLogo();

    window.addEventListener('labInfoUpdated', fetchLogo);
    return () => {
      window.removeEventListener('labInfoUpdated', fetchLogo);
    };
  }, [location.pathname]);

  return (
    <div className={cn(
      "flex items-center", 
      vertical ? "flex-col space-y-2" : "",
      className
    )}>
      <div className={cn(
        "relative flex items-center justify-center overflow-hidden", 
        vertical ? "w-48 h-48" : "h-12 w-auto",
        className && "h-full w-auto min-w-0 min-h-0"
      )}>
        <img 
          src={logoUrl} 
          alt="NABID Logo" 
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
