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
