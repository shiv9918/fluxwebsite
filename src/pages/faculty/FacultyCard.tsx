import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Twitter, ExternalLink, ChevronRight } from 'lucide-react';
import type  { Faculty } from '@/types';

interface FacultyCardProps {
  faculty: Faculty;
  index: number;
}

/**
 * Individual faculty card component with flip animation
 * Features 3D effects, hover interactions, and detailed information reveal
 */
const FacultyCard: React.FC<FacultyCardProps> = React.memo(({ faculty, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      'Computer Science': 'from-blue-400 to-blue-600',
      'Mathematics': 'from-green-400 to-green-600',
      'Physics': 'from-purple-400 to-purple-600',
      'Biology': 'from-emerald-400 to-emerald-600',
      'Chemistry': 'from-orange-400 to-orange-600',
      'Psychology': 'from-pink-400 to-pink-600'
    };
    return colors[department] || 'from-gray-400 to-gray-600';
  };

  const socialIcons = [
    ...(faculty.socialLinks.linkedin ? [{ icon: Linkedin, href: faculty.socialLinks.linkedin, label: 'LinkedIn' }] : []),
    ...(faculty.socialLinks.twitter ? [{ icon: Twitter, href: faculty.socialLinks.twitter, label: 'Twitter' }] : []),
    ...(faculty.socialLinks.researchGate ? [{ icon: ExternalLink, href: faculty.socialLinks.researchGate, label: 'ResearchGate' }] : [])
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-80 preserve-3d cursor-pointer"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            {/* Department Color Bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${getDepartmentColor(faculty.department)}`} />
            
            {/* Faculty Image */}
            <div className="relative p-6 text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg ring-2 ring-white/50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {faculty.name}
              </h3>
              
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                {faculty.position}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {faculty.department}
              </p>

              {/* Quick Contact */}
              <div className="flex justify-center gap-3 mb-4">
                <motion.a
                  href={`mailto:${faculty.email}`}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href={`tel:${faculty.phone}`}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </motion.a>
              </div>

              {/* Specialties Preview */}
              <div className="flex flex-wrap justify-center gap-1">
                {faculty.specialties.slice(0, 2).map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {specialty}
                  </span>
                ))}
                {faculty.specialties.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                    +{faculty.specialties.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Flip Indicator */}
            <motion.div
              className="absolute bottom-4 right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full p-6 flex flex-col">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {faculty.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {faculty.position}
              </p>
            </div>

            {/* Bio */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {faculty.bio}
              </p>

              {/* All Specialties */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1">
                  {faculty.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-center gap-3">
                <motion.a
                  href={`mailto:${faculty.email}`}
                  className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </motion.a>
                <motion.a
                  href={`tel:${faculty.phone}`}
                  className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </motion.a>
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

FacultyCard.displayName = 'FacultyCard';

export default FacultyCard;