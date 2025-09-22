import { Menu, XmarkSquareSolid } from 'iconoir-react';
import { navItems, navbarContent } from '../../constants/navbar';
import { isEventActive } from '../../constants/eventConfig';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const eventActive = isEventActive();

  // Filter nav items based on event state
  const filteredNavItems = navItems.filter((item) => {
    if (!eventActive && (item.name === 'Schedule' || item.name === 'Venue')) {
      return false;
    }
    return true;
  });

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div>
            <a className="font-heading animate-glow-pulse text-glow text-lg font-bold" href="#home">
              {navbarContent.logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 uppercase">
            {filteredNavItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-all duration-300 transform hover:scale-105 relative group font-nav text-sm text-foreground hover:text-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              className="btn-neon font-body text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 animate-pulse h-10 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md hover:cursor-pointer"
              onClick={() => {
                const el = document.getElementById('register');
                if (el) el.scrollIntoView();
              }}
            >
              {navbarContent.registerButton}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XmarkSquareSolid /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {filteredNavItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-nav font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-2 rounded hover:bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="btn-neon font-body text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 animate-pulse h-10 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full mt-4 animate-bounce-in delay-500"
                onClick={() => {
                  const el = document.getElementById('register');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setIsOpen(false);
                }}
              >
                {navbarContent.registerButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
