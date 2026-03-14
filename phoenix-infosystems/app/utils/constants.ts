import { Service, Job, Testimonial, GalleryImage, Statistic, TeamMember, FAQ } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to transform your business operations.',
    icon: 'Cloud',
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and predictive analytics to drive innovation and efficiency.',
    icon: 'Zap',
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions to protect your digital assets and data.',
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description: 'End-to-end modernization services to accelerate your digital journey.',
    icon: 'Cpu',
  },
  {
    id: 5,
    title: 'DevOps & CI/CD',
    description: 'Streamline development with continuous integration and deployment solutions.',
    icon: 'GitBranch',
  },
  {
    id: 6,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for strategic decision-making.',
    icon: 'BarChart3',
  },
];

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Bangalore, India',
    description: 'Build scalable web applications using modern tech stacks. 5+ years experience required.',
  },
  {
    id: 2,
    title: 'Cloud Architect',
    department: 'Cloud Services',
    type: 'Full-time',
    location: 'Bangalore, India',
    description: 'Design and implement cloud solutions for enterprise clients. AWS/Azure expertise required.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    type: 'Full-time',
    location: 'Bangalore, India',
    description: 'Manage CI/CD pipelines and infrastructure automation. Kubernetes experience preferred.',
  },
  {
    id: 4,
    title: 'Business Analyst',
    department: 'Consulting',
    type: 'Full-time',
    location: 'Bangalore, India',
    description: 'Analyze business requirements and deliver strategic solutions.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'TechVision Ltd',
    role: 'CTO',
    content:
      'Phoenix Infosystems transformed our entire digital infrastructure. Their expertise and dedication are unmatched. Highly recommended!',
    avatar: '👤',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'InnovateCorp India',
    role: 'Director of Operations',
    content:
      'Working with Phoenix has been a game-changer. Their innovative solutions reduced our operational costs by 40%.',
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'DigitalFirst Solutions',
    role: 'Founder & CEO',
    content:
      'The team demonstrated exceptional technical acumen and business understanding. A true partner in our growth.',
    avatar: '👩‍💼',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Team collaboration',
    title: 'Collaborative Workspace',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Office environment',
    title: 'Modern Office',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Team meeting',
    title: 'Team Meeting',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Development work',
    title: 'Development Floor',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Conference room',
    title: 'Conference Suite',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    alt: 'Innovation lab',
    title: 'Innovation Lab',
  },
];

export const STATISTICS: Statistic[] = [
  {
    id: 1,
    label: 'Working Hours',
    value: 13500,
    icon: 'Clock',
  },
  {
    id: 2,
    label: 'Completed Projects',
    value: 720,
    icon: 'CheckCircle',
  },
  {
    id: 3,
    label: 'Happy Clients',
    value: 480,
    icon: 'Smile',
  },
  {
    id: 4,
    label: 'Awards Received',
    value: 120,
    icon: 'Trophy',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Samantha Wilson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Senior Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 3,
    name: 'Priya Kapoor',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
];

export const FAQs: FAQ[] = [
  {
    id: 1,
    question: 'How Much Will It Cost?',
    answer:
      'The cost of our services varies depending on project scope, complexity, and timeline. We provide detailed quotations after understanding your specific requirements. Contact us for a custom quote.',
  },
  {
    id: 2,
    question: 'How Long It Takes To Design?',
    answer:
      'Project timelines depend on scope and requirements. Typically, a website design takes 2-4 weeks, while custom applications may take 2-6 months. We provide timeline estimates during initial consultations.',
  },
  {
    id: 3,
    question: 'How Do I Associate With Phoenix Infosystems?',
    answer:
      'You can reach out to us through our contact form, email, or phone. Our team will discuss your project needs and create a tailored proposal. We work with businesses of all sizes.',
  },
  {
    id: 4,
    question: 'Can You Help My Current Site Look More Professional?',
    answer:
      'Absolutely! We offer website redesign and modernization services. Our team can revamp your existing site with modern design, improved user experience, and enhanced functionality.',
  },
  {
    id: 5,
    question: 'When Do I Pay?',
    answer:
      'We typically work with a 50% upfront deposit and 50% upon completion. For larger projects, we may offer milestone-based payment options. All terms are discussed and agreed upon before project start.',
  },
];

export const COMPANY_INFO = {
  name: 'Phoenix Infosystems Private Limited',
  email: 'contact@phoenixinfosystems.com',
  phone: '+91 (080) 4000-XXXX',
  address: 'Bangalore, India',
  tagline: 'Transforming Businesses Through Technology',
  mission:
    'To deliver innovative technology solutions that empower businesses to achieve digital excellence.',
  vision: 'To be the most trusted technology partner for businesses worldwide.',
  yearFounded: 2010,
};
