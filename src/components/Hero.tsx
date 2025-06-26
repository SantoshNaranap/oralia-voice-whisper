
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const wavesRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { text: "How can I help you today?", isBot: true, id: 1 }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const controls = useAnimation();

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setCurrentInput("I need help finding the pricing page");
      setTimeout(() => {
        handleSendMessage("I need help finding the pricing page");
      }, 1500);
    }
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { text: message, isBot: false, id: Date.now() }]);
    setCurrentInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'd be happy to help you find the pricing information! You can access our pricing page by clicking on the 'Pricing' tab in the navigation menu at the top of the page, or I can take you there directly if you'd like.", 
        isBot: true, 
        id: Date.now() 
      }]);
    }, 1200);
  };

  // Smooth entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        ease: [0.25, 0.46, 0.45, 0.94],
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden relative bg-gradient-to-b from-dark to-dark-accent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Oxford Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">OX</span>
              </div>
              <span className="text-sm text-gray-300">Born from University of Oxford startup incubator</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white"
              variants={itemVariants}
            >
              The AI platform that makes your website <span className="gradient-text">intelligent</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8"
              variants={itemVariants}
            >
              Oralia is an AI-powered platform that transforms how users interact with your website. From intelligent navigation to voice conversations, we combine cutting-edge AI technology with empathetic user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-oralia hover:bg-oralia-dark text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-oralia/20">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-transparent text-oralia hover:text-oralia-light border border-oralia hover:border-oralia-light px-8 py-6 text-lg transition-all duration-300">
                  View Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div 
              className="w-full aspect-square max-w-md mx-auto relative"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-oralia/20 to-oralia-dark/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-dark-card rounded-3xl shadow-2xl overflow-hidden border border-gray-800 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-red-400 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-4 h-48 overflow-hidden">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className={`p-4 rounded-xl max-w-[85%] ${
                        message.isBot 
                          ? 'bg-dark-accent' 
                          : 'bg-oralia/20 ml-auto'
                      }`}
                    >
                      <p className="text-sm text-gray-300">{message.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentInput)}
                      placeholder="Type your message..."
                      className="w-full bg-dark-accent border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-oralia transition-colors duration-200"
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleVoiceToggle}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isListening 
                        ? 'bg-oralia text-white' 
                        : 'bg-dark-accent text-gray-400 hover:text-oralia'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isListening ? (
                      <div ref={wavesRef} className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div 
                            key={i}
                            className="w-0.5 bg-white rounded-full h-4"
                            animate={{
                              scaleY: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Smoother background animations */}
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 bg-oralia/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-oralia/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;
