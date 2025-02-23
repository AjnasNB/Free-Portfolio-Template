import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Phone, Brain } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'CallYourBuddy',
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      tech: ['Node.js', 'React.js', 'MongoDB', 'Serverless'],
      description: [
        'Developed an AI-powered voice companion with real-time emotional support.',
        'Implemented a serverless backend with AWS Lambda, handling 50K+ user queries monthly.',
        'Optimized MongoDB queries, reducing response latency by 30%.'
      ]
    },
    {
      title: 'SantaCallingAI',
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      tech: ['Node.js', 'React.js', 'MongoDB', 'AWS', 'Twilio', 'Stripe', 'Azure'],
      description: [
        'Developed an AI conversational system supporting 100K+ live interactions.',
        'Optimized API response times to under 500ms using load balancing and caching.'
      ]
    },
    {
      title: 'AlteraNexus',
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      tech: ['Electron.js', 'React.js', 'Python', 'FastAPI', 'LLaMA 3.2'],
      description: [
        'Built an AI workflow control assistant for medical personnel.',
        'Ranked top 3 in the company\'s internal hackathon.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                {project.icon}
                <h3 className="text-2xl font-semibold ml-3">{project.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;