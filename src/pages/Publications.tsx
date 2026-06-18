import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { Publication } from '@/types';

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    mockService.getPublications().then((data) => {
      setPublications(data);
      setLoading(false);
    });
  }, []);

  const filteredPubs = publications.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO title="Publications" description="Explore our research publications." />
      
      {/* Header */}
      <div className="relative overflow-hidden bg-white pt-24 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative border-b border-slate-100 pb-12">
            <div className="max-w-2xl relative">
              {/* Elegant brand vertical accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: 'var(--ku-red)' }} />
              
              <div className="pl-6">
                <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: 'var(--ku-red)' }}>
                  Academic Output
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 select-none">Publications</h1>
                <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                  NABID 연구실의 최신 연구 성과와 학술지 게재 논문 목록입니다.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pl-6 lg:pl-0">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <Input 
                  className="pl-10 pr-4 py-6 w-72 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ku-red/40 focus:ring-1 focus:ring-ku-red/40 transition-all font-medium text-sm shadow-xs animate-none" 
                  placeholder="Search papers..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="space-y-6">
          {filteredPubs.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 border border-slate-200 hover:border-ku-red/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-ku-red group-hover:bg-ku-red group-hover:text-white transition-colors">
                    <FileText size={28} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                      {pub.year}
                    </Badge>
                    <Badge className="bg-ku-red/10 text-ku-red hover:bg-ku-red/10 border-none font-bold uppercase tracking-wider text-[10px]">
                      {pub.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-ku-red transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-1">{pub.authors}</p>
                  <p className="text-slate-500 italic text-sm mb-4">{pub.journal}</p>
                  
                  <div className="flex items-center space-x-6">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-400 hover:text-ku-red flex items-center transition-colors"
                    >
                      DOI: {pub.doi} <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
