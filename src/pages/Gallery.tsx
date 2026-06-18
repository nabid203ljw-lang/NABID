import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { GalleryImage } from '@/types';

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockService.getGallery().then(data => {
      setImages([...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO title="Gallery" description="NABID Lab Gallery - Research and Life at the Lab" />
      
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
                Lab Gallery & Life
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 select-none">Gallery</h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                NABID 연구실의 다양한 활동 모습입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-lg"
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-xl mb-1">{image.title}</p>
                  {image.description && (
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  )}
                  <p className="text-white/60 text-[10px] mt-2 font-mono">{image.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">등록된 사진이 없습니다. 곧 새로운 소식으로 찾아뵙겠습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
