import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import DOMPurify from 'dompurify';
import { mockService } from '@/lib/mockDataService';
import { News as NewsType } from '@/types';
import { format } from 'date-fns';
import SEO from '@/components/SEO';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      mockService.getNews().then((items) => {
        const item = items.find(n => n.id === id);
        setNews(item || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!news) return <div className="flex items-center justify-center h-screen">News not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO title={news.title} description={news.content.substring(0, 160).replace(/<[^>]*>/g, '')} />
      
      {/* Header */}
      <div className="bg-slate-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to News
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              {news.title}
            </h1>
            <div className="flex items-center space-x-6 text-slate-400 font-medium uppercase tracking-widest text-xs">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-ku-red" /> {format(new Date(news.date), 'yyyy.MM.dd')}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2 text-ku-red" /> {news.author}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-slate-100 shadow-2xl rounded-3xl overflow-hidden"
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src={news.imageUrl} 
              alt={news.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-slate prose-lg max-w-none rich-text-content"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.content) }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
