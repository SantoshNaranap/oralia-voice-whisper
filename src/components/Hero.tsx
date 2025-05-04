
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const wavesRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden relative bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Give your website a <span className="gradient-text">voice</span> with Oralia
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              An AI assistant that helps users navigate your website through natural conversation and voice interaction, combining technical excellence with empathetic responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-oralia hover:bg-oralia-dark text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button className="bg-transparent text-oralia hover:text-oralia-dark border border-oralia hover:border-oralia-dark px-8 py-6 text-lg">
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-full aspect-square max-w-md mx-auto relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-oralia/20 to-oralia-dark/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-xl max-w-[80%] animate-pulse-slow">
                    <p className="text-sm text-gray-600">How can I help you today?</p>
                  </div>
                  
                  <div className="bg-oralia/10 p-4 rounded-xl ml-auto max-w-[80%]">
                    <p className="text-sm text-gray-800">I need help finding the pricing page</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-xl max-w-[80%]">
                    <p className="text-sm text-gray-600">I'd be happy to help you find the pricing information! You can access our pricing page by clicking on the "Pricing" tab in the navigation menu at the top of the page, or I can take you there directly if you'd like.</p>
                  </div>
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
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-oralia/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-oralia-light/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
