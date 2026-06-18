import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Beaker, Users, FileText, Newspaper, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { ResearchArea, LabInfo, Member, News } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import Logo from '@/components/Logo';

export default function Home() {
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  const [labInfo, setLabInfo] = useState<LabInfo | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      mockService.getResearchAreas(),
      mockService.getLabInfo(),
      mockService.getMembers(),
      mockService.getNews()
    ]).then(([areas, info, membersData, newsData]) => {
      setResearchAreas(areas.slice(0, 3));
      setLabInfo(info);
      setMembers(membersData.slice(0, 4));
      setNews(newsData.slice(0, 1));
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className="flex flex-col">
      <SEO title="Home" description="Nano Advanced Bio Innovative Drug delivery Laboratory (NABID) - Korea University" />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://st.korea.ac.kr/sites/ipstr/atchmnfl_mngr/imageSlide/586/temp_1725189822079100.jpg" 
            alt="Korea University Sejong Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay inspired by official site */}
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-4 bg-ku-red text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">
              Korea University College of Pharmacy
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tighter drop-shadow-2xl">
            NABID
          </h2>
          
          <p className="text-lg md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight drop-shadow-lg">
            Nano Advanced Bio Innovative Drug delivery Laboratory
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/research">
              <Button size="lg" className="bg-ku-red hover:bg-ku-red/90 text-white px-10 h-14 rounded-none font-bold transition-all border-none">
                RESEARCH AREAS
              </Button>
            </Link>
            <Link to="/members">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-10 h-14 rounded-none font-bold bg-transparent transition-all">
                OUR MEMBERS
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Research Areas</h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Nano Advanced Biodrug Innovative Delivery Lab (NABID)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {researchAreas.map((area, i) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 shrink-0 bg-ku-red/10 rounded-md flex items-center justify-center text-ku-red font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{area.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {area.subtitle || area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/research" className="inline-flex items-center text-ku-red font-bold mt-12 hover:underline">
              자세히 보기 <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Latest News</h2>
              <p className="text-slate-500">연구실의 최근 소식과 공지사항입니다.</p>
            </div>
            <Link to="/news" className="text-ku-red font-bold flex items-center hover:underline">
              View All <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link to={`/news/${item.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/news/${item.id}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-ku-red transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{item.content}</p>
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>{format(new Date(item.date), 'yyyy. MM. dd.')}</span>
                    <Link to={`/news/${item.id}`} className="text-slate-900 font-bold hover:text-ku-red transition-colors">Read More</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Members</h2>
          <p className="text-slate-500 mb-12">NABID의 구성원들을 소개합니다.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {members.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.imageUrl} referrerPolicy="no-referrer" />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/members">
            <Button variant="outline" className="border-ku-red text-ku-red hover:bg-ku-red hover:text-white">
              전체 구성원 보기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
