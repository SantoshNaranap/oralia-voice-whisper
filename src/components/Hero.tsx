
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const wavesRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden relative bg-gradient-to-b from-dark to-dark-accent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Oxford Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">OX</span>
              </div>
              <span className="text-sm text-gray-300">Born from University of Oxford startup incubator</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Give your website a <span className="gradient-text">voice</span> with Oralia
            </h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              An AI assistant that helps users navigate your website through natural conversation and voice interaction, combining technical excellence with empathetic responses.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button className="bg-oralia hover:bg-oralia-dark text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-oralia/20">
                Get Started
              </Button>
              <Button className="bg-transparent text-oralia hover:text-oralia-light border border-oralia hover:border-oralia-light px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full aspect-square max-w-md mx-auto relative animate-float">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-oralia/20 to-oralia-dark/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <div className="relative bg-dark-card rounded-3xl shadow-xl overflow-hidden border border-gray-800 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="bg-dark-accent p-4 rounded-xl max-w-[80%]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="text-sm text-gray-300">How can I help you today?</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-oralia/20 p-4 rounded-xl ml-auto max-w-[80%]"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    <p className="text-sm text-gray-300">I need help finding the pricing page</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-dark-accent p-4 rounded-xl max-w-[80%]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    <p className="text-sm text-gray-300">I'd be happy to help you find the pricing information! You can access our pricing page by clicking on the "Pricing" tab in the navigation menu at the top of the page, or I can take you there directly if you'd like.</p>
                  </motion.div>
                </div>
                
                <div className="mt-6 flex items-center gap-2 justify-center">
                  <div ref={wavesRef} className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className={`w-1 bg-oralia rounded-full h-6 origin-bottom animate-wave-${i}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 bg-oralia/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-oralia/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
