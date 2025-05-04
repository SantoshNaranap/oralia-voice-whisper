
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Demo = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Oralia, your website assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      let response: Message;
      
      if (input.toLowerCase().includes('pricing')) {
        response = {
          id: messages.length + 2,
          text: "Our pricing starts at $29/month for small websites. We also offer custom enterprise plans for larger sites. Would you like to see a detailed breakdown of our pricing tiers?",
          sender: 'bot'
        };
      } else if (input.toLowerCase().includes('integration') || input.toLowerCase().includes('install')) {
        response = {
          id: messages.length + 2,
          text: "Integrating Oralia is easy! Just add our script to your website's header, and we'll handle the rest. The whole setup takes less than 5 minutes. Would you like me to show you the code snippet?",
          sender: 'bot'
        };
      } else {
        response = {
          id: messages.length + 2,
          text: "I understand you're looking for information. I'm here to help navigate this website and find what you need. Could you tell me more specifically what you're interested in?",
          sender: 'bot'
        };
      }
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setInput("How does Oralia integrate with my website?");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <section id="demo" className="section bg-dark-accent">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Experience Oralia in Action
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Try interacting with our demo below to see how Oralia can help your website visitors.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-dark-card rounded-2xl shadow-lg overflow-hidden border border-gray-800">
        <div className="bg-oralia p-4 flex items-center justify-between">
          <h3 className="text-white font-medium">Oralia Assistant</h3>
          <div className="flex space-x-2">
            <span className="bg-white/20 text-white text-xs py-1 px-2 rounded">Demo Mode</span>
          </div>
        </div>
        
        <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] ${
                message.sender === 'user' ? 'ml-auto bg-oralia/20 text-gray-200' : 'bg-dark-accent text-gray-300'
              } p-4 rounded-xl`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className="bg-dark-accent text-gray-300 p-3 rounded-xl max-w-[50px]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-dark-muted border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-oralia/50"
              placeholder="Type your message..."
            />
            <Button
              onClick={toggleVoice}
              className={`p-2 rounded-full ${
                isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-oralia hover:bg-oralia-dark'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </Button>
            <Button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-oralia hover:bg-oralia-dark disabled:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
