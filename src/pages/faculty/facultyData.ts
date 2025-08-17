import type { Faculty, HOD, Department } from '@/types';

/**
 * Mock data for faculty directory
 * In production, this would come from an API
 */

export const hodData: HOD = {
  id: 'hod-1',
  name: 'Prof. Rakesh Kumar',
  position: 'Head of Department',
  department: 'Computer Science',
  image: '',
  email: 'sarah.williams@university.edu',
  phone: '+1 (555) 123-4567',
  specialties: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
  bio: 'Prof. Rakesh Kumar leads our department with over 15 years of experience in AI research and education. ',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
    researchGate: 'https://researchgate.net/profile/'
  },
  isHOD: true,
  message: 'Welcome to our Computer Science department! We are committed to excellence in education and cutting-edge research.'
};

export const facultyData: Faculty[] = [
  {
    id: 'faculty-1',
    name: 'Prof. Rakesh Kumar',
    position: 'Associate Professor',
    department: 'Computer Science',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'michael.chen@university.edu',
    phone: '+1 (555) 234-5678',
    specialties: ['Cybersecurity', 'Network Security', 'Blockchain'],
    bio: 'Expert in cybersecurity with focus on blockchain technologies and network security protocols.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      researchGate: 'https://researchgate.net/profile/michael-chen'
    }
  },
  {
    id: 'faculty-2',
    name: 'Dr. Emily Rodriguez',
    position: 'Assistant Professor',
    department: 'Mathematics',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'emily.rodriguez@university.edu',
    phone: '+1 (555) 345-6789',
    specialties: ['Applied Mathematics', 'Statistics', 'Data Analysis'],
    bio: 'Specializes in applied mathematics and statistical modeling for real-world applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez'
    }
  },
  {
    id: 'faculty-3',
    name: 'Dr. James Thompson',
    position: 'Professor',
    department: 'Physics',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'james.thompson@university.edu',
    phone: '+1 (555) 456-7890',
    specialties: ['Quantum Physics', 'Theoretical Physics', 'Research'],
    bio: 'Leading researcher in quantum physics with numerous publications in prestigious journals.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jamesthompson',
      researchGate: 'https://researchgate.net/profile/james-thompson'
    }
  },
  {
    id: 'faculty-4',
    name: 'Dr. Lisa Anderson',
    position: 'Associate Professor',
    department: 'Biology',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'lisa.anderson@university.edu',
    phone: '+1 (555) 567-8901',
    specialties: ['Molecular Biology', 'Genetics', 'Biotechnology'],
    bio: 'Expert in molecular biology and genetics with focus on biotechnology applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lisaanderson',
      twitter: 'https://twitter.com/lisaanderson'
    }
  },
  {
    id: 'faculty-5',
    name: 'Dr. David Park',
    position: 'Assistant Professor',
    department: 'Chemistry',
    image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'david.park@university.edu',
    phone: '+1 (555) 678-9012',
    specialties: ['Organic Chemistry', 'Catalysis', 'Green Chemistry'],
    bio: 'Focuses on sustainable chemistry and catalysis for environmental applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidpark',
      researchGate: 'https://researchgate.net/profile/david-park'
    }
  },
  {
    id: 'faculty-6',
    name: 'Dr. Maria Garcia',
    position: 'Professor',
    department: 'Psychology',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'maria.garcia@university.edu',
    phone: '+1 (555) 789-0123',
    specialties: ['Cognitive Psychology', 'Behavioral Science', 'Research Methods'],
    bio: 'Leading expert in cognitive psychology with extensive research in behavioral sciences.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mariagarcia',
      twitter: 'https://twitter.com/mariagarcia'
    }
  }
];

export const departments: Department[] = [
  { id: 'cs', name: 'Computer Science', color: 'blue', facultyCount: 2 },
  { id: 'math', name: 'Mathematics', color: 'green', facultyCount: 1 },
  { id: 'physics', name: 'Physics', color: 'purple', facultyCount: 1 },
  { id: 'biology', name: 'Biology', color: 'emerald', facultyCount: 1 },
  { id: 'chemistry', name: 'Chemistry', color: 'orange', facultyCount: 1 },
  { id: 'psychology', name: 'Psychology', color: 'pink', facultyCount: 1 }
];