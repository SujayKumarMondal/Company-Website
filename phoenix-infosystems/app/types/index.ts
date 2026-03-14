export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Job {
  id: number;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface Statistic {
  id: number;
  label: string;
  value: string | number;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
