import React, { useState, useEffect } from 'react';
import { Heart, Camera, Clock, Music2, MessageCircle, Sparkles, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'hero', label: 'Início', icon: Heart },
    { id: 'timeline', label: 'História', icon: Clock },
    { id: 'gallery', label: 'Fotos', icon: Camera },
    { id: 'letter', label: 'Carta', icon: MessageCircle },
    { id: 'counter', label: 'Juntos', icon: Sparkles },
    { id: 'playlist', label: 'Música', icon: Music2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fecha menu mobile quando redimensiona
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md shadow-sm' 
          : 'backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              onClick={() => handleMenuItemClick('hero')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 backdrop-blur-sm rounded-full p-1 border border-white/10 shadow-lg shadow-black/5">
                {navItems.slice(1).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 text-white shadow-md backdrop-blur-sm border border-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden lg:inline">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão Menu Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-xl text-white hover:text-white/80 hover:bg-white/20 transition-all duration-300"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="backdrop-blur-lg border-t border-white/10 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 text-white border-2 border-white/30 shadow-md backdrop-blur-sm'
                          : 'bg-white/10 text-white/90 hover:bg-white/20 hover:text-white border-2 border-transparent backdrop-blur-sm'
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-[1px] z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;