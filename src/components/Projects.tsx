import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One : EventHub',
    description: 'A full-stack web application built with React, vite , supabase for event booking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Vite', 'Supabase', 'TypeScript','Javascript'],
    github: 'https://github.com/Kaustubh2026/EventHub',
    demo: 'https://fantastic-bavarois-d51936.netlify.app/'
  },
  {
    title: 'Project Two : Krishisanjivani',
    description: 'KrishiSanjivani is a web platform using AI for commodity price forecasting',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML', 'CSS & JS', 'MYSQL', 'Material UI' , ' ML' , 'ARIMA'],
    github: 'https://github.com/Kaustubh2026/KrishiSanjivani',
    // demo: 'https://demo.com'
  },
  // {
  //   title: 'Project Three',
  //   description: 'A real-time collaboration tool for remote teams.',
  //   image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
  //   tags: ['Vue.js', 'Firebase', 'WebRTC', 'Sass'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a1f] perspective-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.transform = `
        perspective(1000px)
        rotateY(${x * 20}deg)
        rotateX(${-y * 20}deg)
        translateZ(20px)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0)
      `;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="tech-card group transform-gpu"
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease'
      }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform-gpu"
          style={{ transform: 'translateZ(20px)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6 bg-gradient-to-b from-transparent to-[rgba(0,255,255,0.1)] transform-gpu"
           style={{ transform: 'translateZ(40px)' }}>
        <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-[rgba(0,255,255,0.1)] text-cyan-300 border border-cyan-500/20 transform-gpu"
              style={{ transform: 'translateZ(60px)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors transform-gpu"
            style={{ transform: 'translateZ(80px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors transform-gpu"
            style={{ transform: 'translateZ(80px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;