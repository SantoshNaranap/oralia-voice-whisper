
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, MessageCircle, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ConversationalAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you navigate this website, answer questions about Oralia, or just have a conversation. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "Our AI platform offers flexible pricing starting from $29/month for small websites. We have custom enterprise solutions for larger organizations. The pricing varies based on usage, features, and support level you need. Would you like me to show you our detailed pricing page?";
    }
    
    if (lowerMessage.includes('integration') || lowerMessage.includes('install') || lowerMessage.includes('setup')) {
      return "Integrating Oralia is incredibly simple! Just add our JavaScript snippet to your website's header, and our AI will automatically start learning about your content. The entire setup process takes less than 5 minutes. Would you like me to walk you through the integration steps?";
    }
    
    if (lowerMessage.includes('voice') || lowerMessage.includes('speak') || lowerMessage.includes('talk')) {
      return "Yes! Voice interaction is one of our key AI features. Users can speak naturally with your website, and our AI responds with human-like conversation. It supports multiple languages and understands context, making browsing accessible for everyone. Try speaking to me now!";
    }
    
    if (lowerMessage.includes('features') || lowerMessage.includes('capabilities') || lowerMessage.includes('what can')) {
      return "Our AI platform includes: intelligent navigation that guides users to what they need, voice conversations for natural interaction, empathetic responses that understand user emotions, smart analytics for insights, and seamless integration. We're focused on making websites accessible for elderly, disabled, and non-English speaking users.";
    }
    
    if (lowerMessage.includes('accessibility') || lowerMessage.includes('disabled') || lowerMessage.includes('elderly')) {
      return "Accessibility is at the heart of what we do! Our AI helps elderly users navigate websites easily, assists people with disabilities through voice interaction and simplified navigation, and supports non-English speakers with multilingual capabilities. We believe the web should be accessible to everyone.";
    }
    
    if (lowerMessage.includes('demo') || lowerMessage.includes('try') || lowerMessage.includes('test')) {
      return "You're already experiencing our demo right here! This conversation shows how users can naturally interact with websites using our AI. You can also scroll down to our interactive demo section to see more examples of how Oralia works on different types of websites.";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! It's great to meet you. I'm here to help you understand how Oralia can transform your website into an intelligent, conversational platform. What aspect of our AI platform interests you most?";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! I can assist you with understanding our AI platform, explaining features, discussing pricing, walking through integration, or answering any questions about how Oralia can benefit your website. What specific area would you like help with?";
    }
    
    return "That's an interesting question! Our AI platform is designed to understand and respond to a wide variety of inquiries. I can help you learn more about Oralia's features, integration process, pricing, or how we make websites more accessible. Is there something specific about our AI platform you'd like to explore?";
  };

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsAIThinking(true);

    // Simulate AI thinking time
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
      // Simulate voice recognition
      setTimeout(() => {
        const voiceMessages = [
          "Tell me about your AI platform features",
          "How does voice interaction work?",
          "What makes Oralia different from other chatbots?",
          "Can you help elderly users navigate websites?"
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
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-oralia hover:bg-oralia-dark text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-oralia rounded-full animate-ping opacity-20"></div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              className="relative bg-dark-card border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Header */}
              <div className="bg-oralia p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">O</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Oralia AI</h3>
                    <p className="text-white/80 text-xs">Your intelligent website assistant</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/20 text-white p-2 h-auto"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-oralia text-white'
                          : 'bg-dark-accent text-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
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
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message or click the mic to speak..."
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConversationalAI;
