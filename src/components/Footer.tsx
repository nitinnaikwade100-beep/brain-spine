import { Mail, Phone, MapPin, Linkedin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Vibrant background for glossiform effect */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-500/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Glossiform Glass Container */}
      <div className="relative z-10 bg-white/5 backdrop-blur-[80px] border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] py-16">
        {/* Glossy highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-2xl font-bold text-white font-serif mb-2">Book an Appointment</h3>
              <p className="text-slate-300 mb-6 text-sm">Fill out the form below and our team will get back to you shortly.</p>
              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md" required />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md" required />
                </div>
                <div>
                  <textarea placeholder="How can we help you?" rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none backdrop-blur-md" required></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 transition-all duration-300">
                  Book an Appointment
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right: Info & Links */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
              
              {/* Brand Info & Socials */}
              <div>
                <h3 className="text-2xl font-bold text-white font-serif mb-4 drop-shadow-md">Dr. Nitin Naikwade</h3>
                <p className="text-sky-300 font-medium text-sm uppercase tracking-wider mb-6 drop-shadow-sm">
                  Hybrid (Brain, Spine & Endovascular) Neurosurgeon
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Providing world-class, patient-centric neurological care through a unique blend of traditional microsurgery and advanced endovascular techniques.
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.linkedin.com/in/dr-nitin-naikwade-a6503798" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a href="https://instagram.com/dr_nitin7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Instagram">
                    <Instagram className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a href="https://facebook.com/nitin.naikwade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Facebook">
                    <Facebook className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a href="https://wa.me/919823012307" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="WhatsApp">
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a href="https://x.com/NaikwadeNitin" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="X (Twitter)">
                    <XIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider drop-shadow-md">Contact Details</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-sky-500/50 transition-colors">
                        <Phone className="w-5 h-5 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Emergency / Appointments</p>
                        <a href="tel:+919823012307" className="inline-block text-white hover:text-sky-300 transition-all text-xl font-bold tracking-wide">
                          +91 9823012307
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-sky-500/50 transition-colors">
                        <Mail className="w-5 h-5 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Email</p>
                        <a href="mailto:nitinnaikwade100@gmail.com" className="inline-block text-white hover:text-sky-300 transition-all text-base font-semibold break-all">
                          nitinnaikwade100@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-sky-500/50 transition-colors">
                        <MapPin className="w-5 h-5 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Location</p>
                        <p className="text-white text-base font-medium">
                          Mumbai, Maharashtra, India
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider drop-shadow-md">Quick Links</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {['Home', 'About', 'Services', 'Expertise', 'Gallery', 'Blogs', 'Testimonials'].map((link) => (
                      <li key={link}>
                        <a href={`/#${link.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors flex items-center group">
                          <span className="w-2 h-2 rounded-full bg-white/20 border border-white/30 group-hover:bg-sky-400 group-hover:border-sky-300 mr-3 transition-all" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="border-t border-white/10 pt-8 mt-8 relative">
            <p className="text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto text-center mb-4">
              Disclaimer: The information provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. In case of a medical emergency, please visit the nearest hospital immediately.
            </p>
            <p className="text-sm text-slate-300 text-center font-medium">
              &copy; 2026 Dr. Nitin Naikwade. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
