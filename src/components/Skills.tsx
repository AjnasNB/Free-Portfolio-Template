import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript']
    },
    {
      title: 'Frameworks/Libraries',
      skills: ['ReactJS', 'Node.js', 'Express', 'NextJS', 'TensorFlow', 'Electron.js', 'React Native', 'PWA', 'GameMaker']
    },
    {
      title: 'Blockchain',
      skills: ['Solidity', 'IPFS', 'Chainlink VRF', 'Account Abstraction']
    },
    {
      title: 'AI/ML',
      skills: ['OpenAI API', 'LLaMA', 'AWS Bedrock', 'Computer Vision']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQLite']
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'GitHub', 'CI/CD', 'Pandas', 'NumPy']
    }
  ];

  return (
    <section className="py-20 bg-purple-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;