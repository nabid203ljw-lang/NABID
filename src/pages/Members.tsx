import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, Quote, BookOpen, GraduationCap, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEO from '@/components/SEO';
import { mockService } from '@/lib/mockDataService';
import { Member, Publication } from '@/types';

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllPubs, setShowAllPubs] = useState(false);

  useEffect(() => {
    Promise.all([
      mockService.getMembers(),
      mockService.getPublications()
    ]).then(([membersData, pubsData]) => {
      setMembers(membersData);
      setPublications(pubsData);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  const pi = members.find(m => m.role === 'Professor');
  const team = members.filter(m => m.role !== 'Professor');

  const selectedPubs = [
    {
      title: "Anti-inflammatory macrophage-derived exosomes modified with self-antigen peptides for treatment of experimental autoimmune encephalomyelitis",
      journal: "Adv Sci (Weinh)",
      year: "2025",
      authors: "Qiaoyun Li, Jinwon Park, Jung Suk Kim, Quoc-Viet Le, Jaiwoo Lee*, Yu-Kyoung Oh*"
    },
    {
      title: "Pathological Microenvironment-Remodeling Nanoparticles to Alleviate Liver Fibrosis: Reversing Hepatocytes-Hepatic Stellate Cells Malignant Crosstalk",
      journal: "Adv Sci (Weinh)",
      year: "2025",
      authors: "Ling-Feng Zhang, Wen-Qi Deng, ..., Jaiwoo Lee, Yu-Kyoung Oh*, Hu-Lin Jiang*"
    },
    {
      title: "Hybrid lipid nanoparticles with tumor antigen-primed dendritic cell membranes for post-surgical tumor immunotherapy",
      journal: "J. Control. Release",
      year: "2025",
      authors: "Dongyoon Kim, Jaehyun Choi, ..., Jaiwoo Lee*, Junho Byun*, Yu-Kyoung Oh*"
    },
    {
      title: "NET formation-mediated in situ protein delivery to the inflamed central nervous system",
      journal: "Nat. Commun.",
      year: "2024",
      authors: "Yina Wu, Jinwon Park, Junho Byun, Jaehyun Choi, Enzhen Xu, Jaiwoo Lee*, Yu-Kyoung Oh*"
    },
    {
      title: "Cell membrane-coated mRNA nanoparticles for enhanced delivery to dendritic cells and immunotherapy",
      journal: "Asian J Pharm Sci.",
      year: "2024",
      authors: "Qiaoyun Li, Junho Byun, Dongyoon Kim, Yina Wu, Jaiwoo Lee*, Yu-Kyoung Oh*"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO title="Members" description="Meet the researchers at NABID Lab." />
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
                Lab Members
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 select-none">Our Team</h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                Nano Advanced Biodrug Innovative Delivery Lab (NABID)
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Principal Investigator */}
        <section className="mb-24">
          <div className="bg-white shadow-2xl border border-slate-100 overflow-hidden rounded-3xl">
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center md:items-start border-b border-slate-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-64 h-64 shrink-0 bg-slate-50 rounded-2xl overflow-hidden border-4 border-ku-red/10"
              >
                <img 
                  src={pi?.imageUrl} 
                  alt={pi?.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">{pi?.name} 교수</h2>
                  <Badge className="bg-ku-red hover:bg-ku-red text-white px-3 py-1">Principal Investigator</Badge>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {pi?.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Mail size={20} className="text-ku-red" />
                    <span>{pi?.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <span className="text-ku-red font-bold">T.</span>
                    <span>044-860-1612 (office)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-slate-50/50">
              <Tabs defaultValue="cv" className="w-full">
                <TabsList className="bg-white border border-slate-200 p-1 mb-8">
                  <TabsTrigger value="cv" className="data-[state=active]:bg-ku-red data-[state=active]:text-white">
                    <BookOpen size={16} className="mr-2" /> Research CV
                  </TabsTrigger>
                  <TabsTrigger value="biography" className="data-[state=active]:bg-ku-red data-[state=active]:text-white">
                    <GraduationCap size={16} className="mr-2" /> Biography
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cv" className="mt-0">
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center">
                        <BookOpen size={18} className="mr-2 text-ku-red" /> {showAllPubs ? 'All Publications' : 'Selected Publications'}
                      </h4>
                      <div className={`space-y-6 ${showAllPubs ? 'max-h-[500px] overflow-y-auto pr-4 custom-scrollbar' : ''}`}>
                        {(showAllPubs ? publications : selectedPubs).map((pub, idx) => (
                          <div key={idx} className="group relative pl-6 border-l-2 border-slate-100 hover:border-ku-red transition-colors">
                            <p className="text-sm font-bold text-slate-900 mb-1 group-hover:text-ku-red transition-colors">{pub.title}</p>
                            <p className="text-xs text-slate-500 mb-1">{pub.authors}</p>
                            <div className="flex items-center space-x-3">
                              <span className="text-[10px] font-black text-ku-red uppercase">{pub.journal}</span>
                              <span className="text-[10px] text-slate-400">{pub.year}</span>
                            </div>
                          </div>
                        ))}
                        
                        {!showAllPubs && (
                          <div className="pt-4 border-t border-slate-50">
                            <button 
                              onClick={() => setShowAllPubs(true)}
                              className="text-xs text-ku-red font-bold hover:underline flex items-center"
                            >
                              ... and 30+ more publications in high-impact journals. (Click to view all)
                            </button>
                          </div>
                        )}

                        {showAllPubs && publications.length === 0 && (
                          <p className="text-sm text-slate-400 italic">No additional publications found in the database.</p>
                        )}

                        {showAllPubs && (
                          <div className="pt-4 border-t border-slate-50">
                            <button 
                              onClick={() => setShowAllPubs(false)}
                              className="text-xs text-slate-400 font-bold hover:text-ku-red transition-colors"
                            >
                              Show Selected Only
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="biography" className="mt-0">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center">
                          <GraduationCap size={18} className="mr-2 text-ku-red" /> Education
                        </h4>
                        <div className="space-y-6">
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-ku-red" />
                            <p className="font-bold text-slate-800 text-sm">Ph.D. / M.S. in Molecular Medicine</p>
                            <p className="text-xs text-slate-500">Seoul National University</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2011 ~ 2020</p>
                          </div>
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-300" />
                            <p className="font-bold text-slate-800 text-sm">B.S. in Life Science</p>
                            <p className="text-xs text-slate-500">Korea University</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2006 ~ 2011</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center">
                          <Globe size={18} className="mr-2 text-ku-red" /> Employment
                        </h4>
                        <div className="space-y-6">
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-ku-red" />
                            <p className="font-bold text-slate-800 text-sm">Assistant Professor</p>
                            <p className="text-xs text-slate-500">Korea University Sejong Campus</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2024. 09 ~ Present</p>
                          </div>
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-300" />
                            <p className="font-bold text-slate-800 text-sm">Research Assistant Professor</p>
                            <p className="text-xs text-slate-500">Seoul National University</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2022. 03 ~ 2024. 08</p>
                          </div>
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-300" />
                            <p className="font-bold text-slate-800 text-sm">Researcher</p>
                            <p className="text-xs text-slate-500">Seoul National University</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2021. 03 ~ 2022. 02</p>
                          </div>
                          <div className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-300" />
                            <p className="font-bold text-slate-800 text-sm">Postdoctoral Fellow</p>
                            <p className="text-xs text-slate-500">Seoul National University</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">2020. 03 ~ 2021. 02</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Lab Members */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Lab Members</h3>
            <div className="h-px flex-grow mx-8 bg-slate-200 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-100 p-6 hover:border-ku-red/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-20 h-20 border-2 border-slate-50 group-hover:border-ku-red/20 transition-colors">
                    <AvatarImage src={member.imageUrl} referrerPolicy="no-referrer" />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    <p className="text-ku-red text-sm font-semibold tracking-wider">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-slate-400 space-x-2">
                  <Mail size={14} />
                  <span>{member.email}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
