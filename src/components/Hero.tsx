import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Center } from '@react-three/drei';

function Scene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Center>
          <Text
            fontSize={0.5}
            letterSpacing={0.1}
            textAlign="center"
          >
            Ajnas N B
            <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.5} />
          </Text>
        </Center>
      </Float>
      <OrbitControls enableZoom={false} />
    </Suspense>
  );
}

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black/40 to-black/60"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animation: `floating ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `-${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden cyber-border relative group"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://i.ibb.co/5hZ0pQwd/aji.jpg" 
              alt="Ajnas N B"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* 3D Name */}
          <div className="h-32 mb-6">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Scene />
            </Canvas>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-indigo-200 mb-12 glass-dark p-4 rounded-xl inline-block"
          >
            Full Stack Engineer & AI Enthusiast
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass-dark p-8 rounded-xl card-hover cyber-border group"
          >
            <Code2 className="w-16 h-16 text-indigo-400 mb-6 mx-auto floating group-hover:text-indigo-300 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300 group-hover:text-indigo-200">Full Stack Development</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Building scalable applications with modern technologies</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="glass-dark p-8 rounded-xl card-hover cyber-border group"
          >
            <Brain className="w-16 h-16 text-cyan-400 mb-6 mx-auto floating group-hover:text-cyan-300 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300 group-hover:text-cyan-200">AI/ML Solutions</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Creating intelligent systems and automation tools</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass-dark p-8 rounded-xl card-hover cyber-border group"
          >
            <Rocket className="w-16 h-16 text-indigo-400 mb-6 mx-auto floating group-hover:text-indigo-300 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300 group-hover:text-indigo-200">Blockchain Development</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Developing secure and scalable blockchain applications</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;