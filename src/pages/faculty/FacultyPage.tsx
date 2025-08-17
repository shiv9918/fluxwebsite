import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Faculty } from '@/types';
import { hodData, facultyData } from './facultyData';
import HODHero from './HODHero';
import FacultyCard from './FacultyCard';
import StatsCounter from './StatsCounter';
import LoadingSkeleton from './LoadingSkeleton';

const FacultyPage: React.FC = () => {
  const [filteredFaculty] = useState<Faculty[]>(facultyData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: 'easeIn'
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className="min-h-screen transition-colors duration-500"
    >
      <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
        {/* Animated Faculty Heading */}
        <div className="relative overflow-hidden py-12 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900/30 dark:to-gray-800/30 rounded-2xl shadow-inner">
          <div
            className="absolute inset-0 opacity-10 dark:opacity-5"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0h-7.17L36.54 24.77 48.817 54h7.17L43.798 24.77 54.627 0zM23.86 0h-7.17L5.776 24.77 18.05 54h7.17L17.03 24.77 23.86 0z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
            }}
          />
          <motion.div
            className="relative z-10 text-center"
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-center mb-2">
              {['F', 'A', 'C', 'U', 'L', 'T', 'Y'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="block"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="inline-block text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                    {letter}
                  </span>
                </motion.span>
              ))}
            </div>

            <motion.div
              className="relative h-1.5 w-32 mx-auto mt-6 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: '8rem',
                transition: { delay: 0.5, duration: 1, ease: 'easeOut' }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '-100%' }}
                animate={{
                  x: '100%',
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }
                }}
              />
            </motion.div>

            <motion.p
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.8, ease: 'easeOut' }
              }}
            >
              Meet our distinguished faculty members who are experts in their respective fields
            </motion.p>
          </motion.div>
        </div>

        {/* HOD Hero */}
        <HODHero hod={hodData} />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Faculty Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredFaculty.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    layout
                  >
                    <AnimatePresence>
                      {filteredFaculty.map((faculty, index) => (
                        <FacultyCard
                          key={faculty.id}
                          faculty={faculty}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default FacultyPage;
