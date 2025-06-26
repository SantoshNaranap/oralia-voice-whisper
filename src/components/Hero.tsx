
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mic, MicOff, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Hero = () => {
  const wavesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you navigate this website, answer questions about Oralia, or just have a conversation. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "Our AI platform offers flexible pricing starting from $29/month for small websites. We have custom enterprise solutions for larger organizations. The pricing varies based on usage, features, and support level you need.";
    }
    
    if (lowerMessage.includes('integration') || lowerMessage.includes('install') || lowerMessage.includes('setup')) {
      return "Integrating Oralia is incredibly simple! Just add our JavaScript snippet to your website's header, and our AI will automatically start learning about your content. The entire setup process takes less than 5 minutes.";
    }
    
    if (lowerMessage.includes('voice') || lowerMessage.includes('speak') || lowerMessage.includes('talk')) {
      return "Yes! Voice interaction is one of our key AI features. Users can speak naturally with your website, and our AI responds with human-like conversation. It supports multiple languages and understands context, making browsing accessible for everyone.";
    }
    
    if (lowerMessage.includes('features') || lowerMessage.includes('capabilities') || lowerMessage.includes('what can')) {
      return "Our AI platform includes: intelligent navigation that guides users to what they need, voice conversations for natural interaction, empathetic responses that understand user emotions, smart analytics for insights, and seamless integration.";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! It's great to meet you. I'm here to help you understand how Oralia can transform your website into an intelligent, conversational platform. What aspect of our AI platform interests you most?";
    }
    
    return "That's an interesting question! Our AI platform is designed to understand and respond to a wide variety of inquiries. I can help you learn more about Oralia's features, integration process, pricing, or how we make websites more accessible. What would you like to explore?";
  };

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsAIThinking(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(messageText),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsAIThinking(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      setTimeout(() => {
        const voiceMessages = [
          "Tell me about your AI platform features",
          "How does voice interaction work?",
          "What makes Oralia different?",
          "Can you help with website navigation?"
        ];
        const randomMessage = voiceMessages[Math.floor(Math.random() * voiceMessages.length)];
        setInput(randomMessage);
        setIsListening(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden relative bg-gradient-to-b from-dark to-dark-accent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 max-w-2xl"
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
              The AI platform that makes your website <span className="gradient-text">conversational</span>
            </h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Oralia transforms websites into intelligent, conversational platforms. Users can talk to your website like a human - asking questions, getting help, and navigating naturally through voice and text.
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
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full max-w-lg mx-auto relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-oralia/20 to-oralia-dark/20 rounded-3xl blur-3xl"
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
              
              {/* Live Conversational Demo */}
              <div className="relative bg-dark-card rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
                {/* Header */}
                <div className="bg-oralia p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">O</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Oralia AI</h3>
                      <p className="text-white/80 text-xs">Try conversing with your website</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Live</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-dark-card to-dark-muted">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-oralia text-white'
                            : 'bg-dark-accent text-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isAIThinking && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="bg-dark-accent text-gray-200 p-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-oralia rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-oralia rounded-full animate-pulse delay-75"></div>
                          <div className="w-2 h-2 bg-oralia rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-800 bg-dark-card">
                  <div className="flex items-center space-x-2">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Oralia..."
                      className="flex-1 bg-dark-muted border border-gray-700 text-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-oralia/50 max-h-20"
                      rows={1}
                    />
                    <Button
                      onClick={handleVoiceToggle}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isListening 
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                          : 'bg-oralia/20 hover:bg-oralia/40 text-oralia'
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4" />}
                    </Button>
                    <Button
                      onClick={() => handleSendMessage(input)}
                      disabled={!input.trim()}
                      className="bg-oralia hover:bg-oralia-dark disabled:bg-gray-700 p-2 rounded-full"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </Button>
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
