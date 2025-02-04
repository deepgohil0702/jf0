import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ArrowDownIcon, BeakerIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Reusable animation components
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ScaleIn = ({ children }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / totalHeight);
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const Particle = () => (
    <motion.div
      className="absolute bg-white/10 rounded-full w-4 h-4"
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );

  return (
    <div className="min-h-screen bg-[#0f304d] from-slate-900 to-slate-800 text-white">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: scrollProgress * 100 + '%' }}
      />

      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed w-full p-6 flex justify-between items-center z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="font-bold text-2xl">
          AnimatedLand
        </motion.div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="space-y-1 z-50"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-8 h-1 bg-white"
              animate={
                isMenuOpen
                  ? { rotate: i === 0 ? 45 : -45, y: i === 0 ? 8 : -8 }
                  : { rotate: 0, y: 0 }
              }
            />
          ))}
        </button>
      </motion.nav>

      {/* Hero Section with Image */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Welcome to Motion
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300">
                Experience the future of web design with smooth animations and
                captivating interactions.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
              >
                <SparklesIcon className="w-6 h-6" />
                Get Started
              </motion.button>
            </FadeIn>
          </div>

          {/* Animated Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <img
              src="https://res.cloudinary.com/dbhqlneyn/image/upload/v1738700137/An_isometric_illustration_of_a_futuristic_workspace_inside_a_transparent_dome_05-02-2025_at_00-58-17_ufdhkv.jpg" // Replace with your image
              alt="Modern UI Demo"
              className="rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300 border-8 border-white/10"
            />
            
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="md:col-span-2 mt-12 text-center"
          >
            <ArrowDownIcon className="w-12 h-12 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 text-center">Features</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => {
              const [ref, inView] = useInView({ threshold: 0.2 });
              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all"
                >
                  <ScaleIn>
                    <BeakerIcon className="w-12 h-12 text-blue-400 mb-4" />
                  </ScaleIn>
                  <h3 className="text-2xl font-bold mb-4">Feature {item}</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Ready to Join?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}