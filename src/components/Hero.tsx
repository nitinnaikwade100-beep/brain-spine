import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  return (
    <section id="home" className="relative min-h-screen h-auto flex items-center pt-32 pb-32 lg:pt-40 lg:pb-24 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="slide1"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-slate-50 flex items-center"
          >
            {/* Background Image/Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical/1920/1080?blur=4')] bg-cover bg-center mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50" />
            </div>

            {/* Floating particles for aesthetic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-2 h-2 bg-sky-400 rounded-full opacity-30"
                   animate={{
                     y: [0, -100, 0],
                     x: [0, Math.random() * 50 - 25, 0],
                     scale: [1, 1.5, 1],
                     opacity: [0.2, 0.5, 0.2]
                   }}
                   transition={{
                     duration: 5 + Math.random() * 5,
                     repeat: Infinity,
                     delay: Math.random() * 2,
                     ease: "easeInOut"
                   }}
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`
                   }}
                 />
               ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-32 sm:mt-40 md:mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="max-w-2xl relative z-20 pt-8 sm:pt-0"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 backdrop-blur-md text-sky-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 shadow-sm border border-sky-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                    Best Neurosurgeon in Mumbai
                  </motion.div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6 font-serif drop-shadow-sm">
                    Bridging <span className="text-sky-600 italic relative inline-block">
                      Precision
                      <motion.span 
                        className="absolute bottom-1 left-0 w-full h-2 bg-sky-200/50 -z-10 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </span> & Innovation
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                    Delivering tailored, patient-specific treatment plans for complex neurological conditions. Combining traditional open microsurgery with minimally invasive endovascular techniques.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-lg shadow-sky-500/20 text-white bg-sky-600 hover:bg-sky-700 hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+919823012307"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-slate-200 text-sm sm:text-base font-medium rounded-full text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                    >
                      <PhoneCall className="mr-2 -ml-1 h-4 w-4 sm:h-5 sm:w-5 text-red-500" aria-hidden="true" />
                      24/7 Emergency Care
                    </a>
                  </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative flex justify-center lg:block mt-4 sm:mt-8 lg:mt-0"
                >
                  <div className="relative w-3/4 sm:w-2/3 lg:w-full max-w-sm lg:max-w-none mx-auto">
                    <motion.img
                      initial={{ y: 0 }}
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      src="https://lh3.googleusercontent.com/pw/AP1GczO9gbL23ihtSpVBF78NCS4EzjcOzyzpQIxFNRyPoKLps2E0C39vUtiNxYpUY0NJcp1KUH8elX0xkr4zTAORjbAgsvN8uj_4eSGfnfNf5oCJBWeIVJWC=w1280"
                      alt="Dr. Nitin Naikwade - Hybrid Neurosurgeon"
                      className="w-full h-auto object-cover mix-blend-multiply filter contrast-105 drop-shadow-2xl"
                      style={{ 
                        maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', 
                        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' 
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6 z-10"
                    >
                      <div className="bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/60 text-center transform transition-transform hover:scale-105">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-1">Dr. Nitin Naikwade</h3>
                        <p className="text-sky-600 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Hybrid (Brain, Spine & Endovascular) Neurosurgeon</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob" />
                  <div className="absolute -bottom-8 -left-8 w-32 sm:w-40 h-32 sm:h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="slide2"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center bg-slate-950"
          >
            {/* Soft Neon Backlighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen" 
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-32 sm:mt-40 md:mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Bold Minimalist Typography */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="max-w-2xl pt-8 sm:pt-0"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 text-blue-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-8 border border-white/10 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                  >
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-400 animate-pulse" />
                    Top Neuro-Interventionist
                  </motion.div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 tracking-tight drop-shadow-lg">
                    Advanced <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400">
                      Neurointervention
                    </span> <br className="hidden sm:block" />
                    & Trauma Care
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-xl font-light">
                    When seconds count, expertise matters. Delivering life-saving endovascular treatments and rapid response trauma care with state-of-the-art precision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                      href="#contact"
                      className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 border border-blue-500/50"
                    >
                      Book an Appointment
                      <ArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>

                {/* Right: Floating 3D Abstract Graphic with Glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="flex justify-center relative mt-8 lg:mt-0"
                >
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotateX: [0, 3, 0], rotateY: [0, 3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-3/4 sm:w-2/3 lg:w-full max-w-sm lg:max-w-lg aspect-square mx-auto"
                  >
                    {/* Glassmorphism Container */}
                    <div className="absolute inset-0 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500" />
                      
                      {/* 3D Abstract Image */}
                      <img 
                        src="https://lh3.googleusercontent.com/pw/AP1GczPPN5LZ2WVwoyFkxj16CR7vAPMpGmH0ss1bKfhsXPds6bi-ybO0UM_qi6TDvFR3wbSWHm4HUoPDL9kPfnIg-ruJYSqVOD5NT7ojKb7mOmp-vz8euod8=w1280" 
                        alt="Advanced Neurointervention"
                        className="w-[120%] h-[120%] object-cover opacity-90 mix-blend-screen transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Inner Glass Elements */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-lg" 
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 w-20 sm:w-32 h-20 sm:h-32 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-lg" 
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 z-30">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="flex space-x-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
          <button 
            onClick={() => setCurrentSlide(0)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-sky-400 w-6 sm:w-8' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label="Go to slide 1"
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-blue-400 w-6 sm:w-8' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label="Go to slide 2"
          />
        </div>
        <button 
          onClick={nextSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
