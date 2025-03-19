import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const elements = containerRef.current.getElementsByClassName('parallax-card');
      Array.from(elements).forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0');
        const moveX = (x - 0.5) * (depth * 0.5);
        const moveY = (y - 0.5) * (depth * 0.5);
        (el as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${moveY}deg) rotateY(${-moveX}deg)`;
      });

      // Move cricket ball
      if (ballRef.current) {
        const ballX = (x - 0.5) * 100;
        const ballY = (y - 0.5) * 100;
        ballRef.current.style.transform = `translate3d(${ballX}px, ${ballY}px, 0) rotate(${ballX * 2}deg)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#121212] relative overflow-hidden perspective-container">
      {/* Cricket Ball */}
      <div 
        ref={ballRef}
        className="cricket-ball absolute top-20 right-20 w-16 h-16 z-10"
      />

      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              backgroundColor: '#e53e3e',
              boxShadow: '0 0 10px #e53e3e',
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative perspective-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="mb-12 parallax-card"
            data-depth="20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-48 h-48 mx-auto overflow-hidden rounded-full profile-image">
              <img
                src="KM.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="inline-block mb-8 parallax-card"
            data-depth="30"
          >
            <div className="grid grid-cols-3 gap-4 mb-8 perspective-container">
              <FloatingIcon icon={<Code2 size={32} />} delay={0} depth={10} />
              <FloatingIcon icon={<Terminal size={32} />} delay={0.2} depth={20} />
              <FloatingIcon icon={<Cpu size={32} />} delay={0.4} depth={30} />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 parallax-card"
            data-depth="10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text block transform-gpu">Kaustubh</span>
            <span className="gradient-text block transform-gpu">Muley</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto parallax-card glass-card p-6"
            data-depth="15" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Programmer Loves CP.
          </motion.p>

          <motion.div
            className="inline-block parallax-card"
            data-depth="25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-gray-600 
                       text-white px-8 py-4 rounded-full hover:from-red-700 hover:to-gray-700 
                       transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              Explore Projects
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingIcon = ({ icon, delay, depth }: { icon: React.ReactNode, delay: number, depth: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="floating p-4 tech-card text-red-500 parallax-card glass-card"
    data-depth={depth}
    style={{
      transformStyle: 'preserve-3d',
      perspective: '1000px'
    }}
  >
    {icon}
  </motion.div>
);

export default Hero;