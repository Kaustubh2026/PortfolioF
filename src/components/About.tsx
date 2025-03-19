import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0c0c24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            I'm a passionate software engineer.
            I love creating elegant solutions to complex problems and building
            user-friendly applications that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code size={32} />}
            title="Development"
            skills={['HTML', 'Material UI', 'JS', 'Next.js']}
          />
          <SkillCard
            icon={<Server size={32} />}
            title="Data Science"
            skills={['ML', 'Python', 'Gen AI', 'LLM', 'NLP']}
          />
          <SkillCard
            icon={<Globe size={32} />}
            title="Other Skills"
            skills={['Team Management', 'Docker', 'Sports', 'Poet']}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  title,
  skills
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -30 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.3 }
    }}
    className="tech-card p-8"
  >
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-cyan-300">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <motion.li
          key={skill}
          className="text-gray-300"
          whileHover={{ x: 5, color: '#00ffff' }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default About;