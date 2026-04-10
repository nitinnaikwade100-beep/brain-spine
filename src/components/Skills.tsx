import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Microscope, Activity, Crosshair } from 'lucide-react';

const skills = [
  'Brain and Spine Surgery',
  'Endovascular Neurosurgery',
  'Diagnostic Interpretation',
  'Neurological Assessments',
  'Treatment Planning',
  'Emergency Response',
  'Patient Communication',
];

const specializedExpertise = [
  {
    title: 'Microsurgery',
    icon: Microscope,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOjsrj5KGf3O_ZgVM_3hP0XIqnHLrQLO5a0eHpeNFtMOrenGeX9088QFGPmlhGKGui0FFidXH88mw5yXzTUSWl6aBc0UqoZswuMqBuGjlPVjjDOC_e3=w1280',
    description: 'Utilizing state-of-the-art operating microscopes and precision instruments, Dr. Naikwade performs intricate procedures on the brain and spinal cord. This approach minimizes damage to surrounding healthy tissue, ensuring safer tumor resections, vascular repairs, and nerve decompressions with enhanced visual clarity.',
    bullets: [
      'Complex brain tumor resection',
      'Microvascular decompression',
      'Aneurysm clipping'
    ]
  },
  {
    title: 'Neuroendovascular',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    description: 'As a dual-trained hybrid neurosurgeon, Dr. Naikwade excels in diagnosing and treating vascular diseases of the central nervous system from inside the blood vessels. Using advanced catheter-based technology and real-time imaging, he navigates the vascular system to treat life-threatening conditions without open surgery.',
    bullets: [
      'Diagnostic Cerebral Angiography (DSA)',
      'Mechanical thrombectomy for acute stroke',
      'Endovascular coiling and flow diversion'
    ]
  },
  {
    title: 'Minimally Invasive',
    icon: Crosshair,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Dedicated to faster recovery and reduced postoperative pain, Dr. Naikwade employs endoscopic and tubular retractor systems for both cranial and spinal surgeries. These advanced techniques require only small incisions, leading to less blood loss, shorter hospital stays, and quicker return to normal daily activities.',
    bullets: [
      'Endoscopic pituitary surgery',
      'Minimally invasive spine fusion',
      'Endoscopic third ventriculostomy (ETV)'
    ]
  }
];

export default function Skills() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="expertise" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-24">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-6">
              Clinical Expertise
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-6 leading-tight">
              Mastery in <span className="text-sky-700 italic">Complex Interventions</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Naikwade's extensive training and experience encompass a broad range of highly specialized skills, ensuring comprehensive care from diagnosis through recovery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 flex-shrink-0" />
                  <span className="font-medium text-slate-800">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                className="w-full h-auto object-cover aspect-[4/5]"
                src="https://lh3.googleusercontent.com/pw/AP1GczO9gbL23ihtSpVBF78NCS4EzjcOzyzpQIxFNRyPoKLps2E0C39vUtiNxYpUY0NJcp1KUH8elX0xkr4zTAORjbAgsvN8uj_4eSGfnfNf5oCJBWeIVJWC=w1280"
                alt="Dr. Nitin Naikwade - Clinical Expertise"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          </motion.div>

        </div>

        {/* Interactive Diagram Subsection */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="text-3xl font-bold text-slate-900 font-serif mb-4">
              The Hybrid <span className="text-sky-700 italic">Neurosurgeon Triad</span>
            </h3>
            <p className="text-lg text-slate-600">
              Click on each area to explore how these three distinct disciplines interconnect to provide comprehensive, minimally invasive care.
            </p>
          </motion.div>

          <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Diagram */}
            <div className="lg:col-span-5 relative max-w-sm mx-auto w-full aspect-square mb-12 lg:mb-0">
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line x1="50%" y1="16%" x2="16%" y2="84%" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
                <line x1="50%" y1="16%" x2="84%" y2="84%" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
                <line x1="16%" y1="84%" x2="84%" y2="84%" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
                
                {/* Active Lines */}
                <line x1="50%" y1="16%" x2="16%" y2="84%" stroke={activeNode === 0 || activeNode === 1 ? "#0ea5e9" : "transparent"} strokeWidth="6" strokeLinecap="round" className="transition-all duration-500" />
                <line x1="50%" y1="16%" x2="84%" y2="84%" stroke={activeNode === 0 || activeNode === 2 ? "#0ea5e9" : "transparent"} strokeWidth="6" strokeLinecap="round" className="transition-all duration-500" />
                <line x1="16%" y1="84%" x2="84%" y2="84%" stroke={activeNode === 1 || activeNode === 2 ? "#0ea5e9" : "transparent"} strokeWidth="6" strokeLinecap="round" className="transition-all duration-500" />
              </svg>

              {/* Nodes */}
              {specializedExpertise.map((item, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2", // Top
                  "bottom-0 left-0", // Bottom Left
                  "bottom-0 right-0" // Bottom Right
                ];
                const isActive = activeNode === index;
                
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveNode(index)}
                    className={`absolute ${positions[index]} flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-lg border-4 transition-all duration-300 z-10 ${
                      isActive ? 'border-sky-500 scale-110 shadow-sky-200' : 'border-slate-100 hover:border-sky-300 hover:scale-105'
                    }`}
                  >
                    <item.icon className={`w-8 h-8 mb-2 transition-colors duration-300 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                    <span className={`text-xs sm:text-sm font-bold text-center px-2 leading-tight ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
              
              {/* Center Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10 bg-white/80 backdrop-blur-sm rounded-full p-1">
                <div className="bg-sky-50 text-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-sky-200 shadow-sm">
                  Hybrid Care
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-7 h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 w-full"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-sky-600 shadow-sm border border-slate-100 mb-6">
                    {(() => {
                      const Icon = specializedExpertise[activeNode].icon;
                      return <Icon className="w-8 h-8" />;
                    })()}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mb-4">
                    {specializedExpertise[activeNode].title}
                  </h4>
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-md h-48 sm:h-64">
                    <img 
                      src={specializedExpertise[activeNode].image} 
                      alt={specializedExpertise[activeNode].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg">
                    {specializedExpertise[activeNode].description}
                  </p>
                  <div className="border-t border-slate-200 pt-6">
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Procedures</h5>
                    <ul className="space-y-3">
                      {specializedExpertise[activeNode].bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-2 h-2 rounded-full bg-sky-500" />
                          </div>
                          <p className="ml-3 text-sm sm:text-base font-medium text-slate-700">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
