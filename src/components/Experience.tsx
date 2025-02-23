import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Altera Digital Health',
      location: 'Bangalore, India',
      period: 'July 2024 – Present',
      points: [
        'Automated API and UI testing using C#, Selenium, SpecFlow, NUnit, BDD.',
        'Developed 100+ Gherkin scenarios for validating business logic across multiple platforms.',
        'Optimized regression test suites, reducing test execution time by 40%.',
        'Built an AI-powered medical assistant improving doctor workflows by 30%.'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Cognifyr.CO',
      location: 'Kochi, India',
      period: 'Dec. 2023 – June 2024',
      points: [
        'Developed a scalable blockchain financial application using Solidity, React, Node.js.',
        'Reduced manual workload by 80% by developing an internal automation tool.'
      ]
    },
    {
      title: 'Freelance Software Engineer',
      company: 'Remote',
      location: 'Remote',
      period: '2022 – Present',
      points: [
        'Developed a data analysis tool for NPOL Research Lab (DRDO) for real-time insights.',
        'Built AI-powered calling agents for multiple businesses, reducing manual calling costs by 65%.',
        'Designed and deployed scalable financial applications using Solidity, React, Node.js.',
        'Developed AI-powered chatbot solutions for various industries, improving response efficiency by 80%.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
              <div className="text-purple-600 mb-4">
                {exp.company} • {exp.location}
              </div>
              <div className="text-gray-500 mb-4">{exp.period}</div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
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

export default Experience;