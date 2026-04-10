import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Expertise', href: '/#expertise' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blogs', href: '/#blogs' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile, visible on md+ */}
      <div className={`hidden md:block bg-slate-900 text-slate-300 py-2 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center space-x-6">
            <a href="mailto:nitinnaikwade100@gmail.com" className="flex items-center hover:text-sky-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2" />
              nitinnaikwade100@gmail.com
            </a>
            <a href="tel:+919823012307" className="flex items-center hover:text-sky-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2" />
              +91 9823012307
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Follow Us:</span>
            <a href="https://www.linkedin.com/in/dr-nitin-naikwade-a6503798" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/dr_nitin7" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://facebook.com/nitin.naikwade" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/919823012307" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/NaikwadeNitin" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="X (Twitter)">
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex flex-col">
            <a href="/#home" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 shadow-md border-2 border-sky-600">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczM0jBPJ139d62sHvRTVF0Reda7xZie1ceh4R4gO0fzzv-eEUdFtRI4VQGGacg3d4S8ze1WLHXsGKOzkux7_K_AeJjoh_UzBT5kFxlzsrNEqQA2oYVko=w400" 
                  alt="Dr. Nitin Naikwade Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                  Dr. Nitin Naikwade
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-sky-700 uppercase tracking-wider mt-1">
                  Hybrid Neurosurgeon
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919823012307"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency: +91 9823012307
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="tel:+919823012307"
                className="flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 9823012307
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
}
