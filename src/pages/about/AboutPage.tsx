import React, { useState, useEffect, useRef } from 'react';

// --- TYPE DEFINITIONS ---
interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
  onImageClick: (url: string) => void;
}

interface ValueCardData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ValueCardProps extends ValueCardData {
  onClick: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface TimelineItemData {
    id: number;
    year: string;
    title: string;
    short: string;
    details: string;
}

// --- DYNAMIC HEADLINE COMPONENT ---
const DynamicHeadline: React.FC<{ words?: string[] }> = ({ words = ['elcome to Flux'] }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const word = words[index];

    if (!deleting) {
      if (display.length < word.length) {
        timeout = window.setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 120);
      } else {
        timeout = window.setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      if (display.length > 0) {
        timeout = window.setTimeout(() => setDisplay(word.slice(0, display.length - 1)), 50);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words]);

  return (
    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight h-24 md:h-40">
      <span>W</span>
      <span className="text-slate-400">
        {display}
        <span className="inline-block ml-1 w-1 h-16 md:h-20 bg-slate-400 animate-pulse align-middle" />
      </span>
    </h1>
  );
};

// --- SVG ICONS ---
const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-8 0h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-12V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m4 0h-4" />
  </svg>
);

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ValuesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// --- REUSABLE COMPONENTS ---

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-4 -right-4 h-10 w-10 bg-gray-700 rounded-full text-white flex items-center justify-center text-2xl z-10" aria-label="Close modal">&times;</button>
        {children}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100">
    <div className="text-center p-4 overflow-hidden">
      <DynamicHeadline words={['elcome to Flux']} />
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Discover the people and principles that drive our innovation and community forward.
      </p>
    </div>
  </section>
);

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title, description, onImageClick }) => (
  <div className="bg-gray-800 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-slate-500/30 w-full max-w-4xl mx-auto group ring-1 ring-transparent hover:ring-slate-500 transform hover:-translate-y-2">
    <div className="md:flex">
      <div className="md:flex-shrink-0 overflow-hidden">
        <img className="h-56 w-full object-cover md:h-full md:w-56 transform group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer" src={imageUrl} alt={`Profile of ${name}`} onClick={() => onImageClick(imageUrl)} onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/111827/9ca3af?text=Image'; }} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-slate-400 font-semibold">{title}</div>
        <p className="block mt-1 text-2xl leading-tight font-bold text-gray-100">{name}</p>
        <p className="mt-4 text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const ValueCard: React.FC<ValueCardProps> = ({ title, icon, description, onClick }) => (
  <div className="bg-gray-800 p-8 rounded-2xl shadow-lg shadow-black/20 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer ring-1 ring-transparent hover:ring-slate-500" onClick={onClick}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// --- ANIMATED TIMELINE ITEM ---
const TimelineItem: React.FC<{ item: TimelineItemData; isRight: boolean; onStoryClick: () => void; }> = ({ item, isRight, onStoryClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const animationClasses = isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10';

    return (
        <div ref={ref} className={`mb-8 flex justify-between items-center w-full ${isRight ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}>
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-slate-600 shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-sm text-gray-100">{item.year}</h1>
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={onStoryClick}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onStoryClick(); }}
                className={`order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-2 ${animationClasses}`}
            >
                <h3 className="font-bold text-gray-100 text-xl">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-400 mt-2">{item.short}</p>
                <p className="mt-3 text-slate-400 text-sm font-semibold">Read more →</p>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<ValueCardData | null>(null);
  const [selectedStory, setSelectedStory] = useState<{ title: string; details: string } | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Lexend', sans-serif";
  }, []);

  const patronData = {
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto-format&fit=crop',
    name: 'Dr. Evelyn Reed',
    title: 'Patron',
    description: 'Dr. Reed is a visionary leader in the field of quantum computing, with over 30 years of experience in academia and research. Her guidance has been instrumental in shaping the strategic direction of Flux.'
  };

  const vcData = {
    imageUrl: 'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?q=80&w=2070&auto-format&fit=crop',
    name: 'Prof. Samuel Chen',
    title: 'Vice Chancellor',
    description: 'Professor Chen brings a wealth of administrative and academic expertise. He is dedicated to fostering an environment of collaboration, innovation, and academic excellence for all members of our community.'
  };

  const valuesData: ValueCardData[] = [
    { title: 'Our Mission', icon: <MissionIcon />, description: 'To pioneer transformative technologies and cultivate a community of forward-thinkers who are equipped to solve the world\'s most pressing challenges.' },
    { title: 'Our Vision', icon: <VisionIcon />, description: 'To be a global leader in innovation, research, and education, creating a sustainable and equitable future through knowledge and collaboration.' },
    { title: 'Our Community', icon: <CommunityIcon />, description: 'We are a diverse and inclusive collective of students, faculty, and staff, united by a shared passion for learning, discovery, and positive impact.' },
    { title: 'Our Values', icon: <ValuesIcon />, description: 'Integrity, Excellence, Collaboration, and Courage. These principles guide our actions, decisions, and interactions as we strive to achieve our mission.' }
  ];
  
  const timelineItems: TimelineItemData[] = [
    { id: 1, year: '2015', title: 'The Genesis', short: 'Flux was founded with a singular vision.', details: 'Flux was founded with a singular vision: to create a space where theoretical knowledge meets practical application, fostering a new generation of creators and problem-solvers.' },
    { id: 2, year: '2018', title: 'First Breakthrough', short: 'Patented renewable energy improvement.', details: 'Our research in renewable energy culminated in a patented technology that significantly improved solar panel efficiency, marking our first major contribution to the field.' },
    { id: 3, year: '2022', title: 'Global Expansion', short: 'We opened our first international campus.', details: 'We opened our first international campus, establishing a global network of innovators and expanding our reach to new cultures and communities.' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-200" style={{ fontFamily: "'Lexend', sans-serif" }}>
      <header className="bg-black/40 backdrop-blur-sm text-gray-100 p-4 fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto text-center font-bold text-xl">Header</div>
      </header>

      <HeroSection />

      <div className="relative z-10 mt-[100vh]">
        <main>
          <section id="leadership" className="py-20 md:py-32">
            <div className="container mx-auto px-6 space-y-16">
              <ProfileCard {...patronData} onImageClick={setModalImage} />
              <ProfileCard {...vcData} onImageClick={setModalImage} />
            </div>
          </section>

          <section id="about-flux" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-100">What is <span className="text-slate-400">Flux?</span></h2>
                  <p className="text-gray-400 mb-4 text-lg">Flux is more than just an institution; it's an ecosystem of innovation. We are a dynamic hub where brilliant minds converge to push the boundaries of knowledge and technology. Our foundation is built on a commitment to groundbreaking research, collaborative projects, and hands-on learning.</p>
                  <p className="text-gray-400 text-lg">We empower our community to not only anticipate the future but to actively create it. From pioneering sustainable energy solutions to developing next-generation artificial intelligence, Flux is at the forefront of change.</p>
                </div>
                <div>
                   <img src="https://images.unsplash.com/photo-1531297484001-80022131c5a9?q=80&w=2070&auto=format&fit=crop" alt="Abstract technology" className="rounded-2xl shadow-2xl shadow-black/30" />
                </div>
              </div>
            </div>
          </section>
          
          <section id="our-story" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">Our Story</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">From a bold idea to a beacon of innovation, our journey has been one of relentless pursuit and transformative growth.</p>
                  </div>
                  <div className="relative">
                      <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden md:block transform -translate-x-1/2"></div>
                      {timelineItems.map((item, idx) => (
                          <TimelineItem 
                            key={item.id}
                            item={item}
                            isRight={idx % 2 === 0}
                            onStoryClick={() => setSelectedStory({ title: `${item.year} - ${item.title}`, details: item.details })}
                          />
                      ))}
                  </div>
            </div>
          </section>

          <section id="values" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">Our Foundation</h2>
                <p className="mt-4 text-lg text-gray-400">The core principles that define who we are and what we do.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {valuesData.map((value, index) => (
                  <ValueCard key={index} {...value} onClick={() => setSelectedCard(value)} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-400 p-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Flux. All rights reserved.</p>
            <p>Footer Section</p>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <Modal isOpen={!!modalImage} onClose={() => setModalImage(null)}>
        {modalImage && <img src={modalImage} alt="Enlarged profile" className="max-w-[90vw] max-h-[90vh] rounded-lg"/>}
      </Modal>

      <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
        {selectedCard && (
           <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-lg w-[90vw]">
             <div className="mb-6">{selectedCard.icon}</div>
             <h3 className="text-3xl font-bold text-gray-100 mb-4">{selectedCard.title}</h3>
             <p className="text-gray-400 text-lg">{selectedCard.description}</p>
           </div>
         )}
      </Modal>

      <Modal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)}>
        {selectedStory && (
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl max-w-xl w-[90vw] text-center">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">{selectedStory.title}</h3>
            <p className="text-gray-400">{selectedStory.details}</p>
            <div className="mt-6">
              <button onClick={() => setSelectedStory(null)} className="px-4 py-2 bg-slate-600 text-white rounded-md">Close</button>
            </div>
          </div>
        )}
      </Modal>
     </div>
   );
 };

 export default App;