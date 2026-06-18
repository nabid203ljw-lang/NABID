import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { News as NewsType } from '@/types';
import { format } from 'date-fns';

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockService.getNews().then((data) => {
      setNewsItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO title="News" description="Latest news and updates from NABID Lab." />
      {/* Header */}
      <div className="relative overflow-hidden bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl relative"
          >
            {/* Elegant brand vertical accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: 'var(--ku-red)' }} />
            
            <div className="pl-6">
              <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: 'var(--ku-red)' }}>
                Latest Updates
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 select-none">Lab News</h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                NABID 연구실의 최신 소식과 활동 내용을 전해드립니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <Link to={`/news/${item.id}`} className="block group">
                <div className="relative aspect-video overflow-hidden mb-6">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
              
              <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wider">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" /> {format(new Date(item.date), 'yyyy.MM.dd')}
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" /> {item.author}
                </div>
              </div>
              
              <Link to={`/news/${item.id}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-ku-red transition-colors leading-tight">
                  {item.title}
                </h3>
              </Link>
              
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                {item.content}
              </p>
              
              <Link to={`/news/${item.id}`} className="inline-flex items-center text-sm font-bold text-ku-red hover:underline">
                Read More <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
