export interface LabInfo {
  name: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  professorName: string;
  affiliation: string;
  primaryColor?: string;
  logoUrl?: string;
  kuLogoUrl?: string;
}

export interface Member {
  id: string;
  name: string;
  role: 'Professor' | 'PhD Student' | 'Master Student' | 'Undergraduate' | 'Researcher' | 'Alumni' | 'Integrated M.S.-Ph.D. Student';
  bio: string;
  email: string;
  imageUrl: string;
  order: number;
}

export interface ResearchArea {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  icon?: string;
  bullets?: string[];
  order: number;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  link: string;
  type: 'Journal' | 'Conference' | 'Patent' | 'Book';
}

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  date: string;
  order: number;
}
