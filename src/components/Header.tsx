
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-oralia rounded-full flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
          <span className="font-bold text-xl">Oralia</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-oralia transition-colors">Features</a>
          <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-oralia transition-colors">Try It</a>
          <a href="#integrate" className="text-sm font-medium text-gray-600 hover:text-oralia transition-colors">Integration</a>
          <Button className="bg-oralia hover:bg-oralia-dark text-white">Get Started</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block py-2 text-sm font-medium text-gray-600 hover:text-oralia" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#demo" className="block py-2 text-sm font-medium text-gray-600 hover:text-oralia" onClick={() => setIsMenuOpen(false)}>Try It</a>
            <a href="#integrate" className="block py-2 text-sm font-medium text-gray-600 hover:text-oralia" onClick={() => setIsMenuOpen(false)}>Integration</a>
            <Button className="w-full bg-oralia hover:bg-oralia-dark text-white">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
