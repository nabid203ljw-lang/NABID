import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Beaker, Target, Zap, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { ResearchArea } from '@/types';

const iconMap: Record<string, any> = {
  'Target': Target,
  'Beaker': Beaker,
  'Zap': Zap,
  'ShieldCheck': ShieldCheck
};

export default function Research() {
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockService.getResearchAreas().then((data) => {
      setResearchAreas(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  return (
    <div className="bg-slate-50/20 min-h-screen pb-24">
      <SEO title="Research" description="Explore our research areas in nano-bio innovative drug delivery." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl relative"
        >
          {/* Elegant brand vertical accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full" style={{ backgroundColor: 'var(--ku-red)' }} />
          
          <div className="pl-6">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: 'var(--ku-red)' }}>
              Research Frontiers
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 select-none">
              Research Excellence
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-semibold">
              NABID 연구실은 나노 기술과 바이오 의약품을 결합하여 난치성 질환 치료를 위한 차세대 약물 전달 플랫폼을 구축하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {researchAreas.map((area, i) => (
            <motion.section
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col group"
            >
              {/* Image Header with restricted aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-slate-550">
                <img
                  src={area.imageUrl}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-80" />
                
                {/* Floating Area tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/50 px-3.5 py-1 rounded-full text-[10px] font-mono font-black tracking-tight" style={{ color: 'var(--ku-red)' }}>
                  AREA 0{i + 1}
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center space-x-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-ku-red">
                      {area.icon && iconMap[area.icon] ? React.createElement(iconMap[area.icon], { size: 16 }) : <Beaker size={16} />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Research Focus</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-ku-red transition-colors" style={{ transitionProperty: 'color' }}>
                    {area.title}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                    {area.description}
                  </p>
                </div>

                {area.bullets && (
                  <div className="border-t border-slate-100/80 pt-5 mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Core Topics</span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center bg-slate-50 border border-slate-100/50 rounded-lg px-2.5 py-1">
                          <span className="w-1 h-1 rounded-full mr-2 shrink-0 bg-slate-400" />
                          <span className="text-slate-650 font-bold text-[11px] tracking-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
