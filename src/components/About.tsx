import { motion } from 'motion/react';
import { Award, BookOpen, HeartPulse } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full object-cover h-[600px]"
                src="https://lh3.googleusercontent.com/pw/AP1GczMdPn8aWObdm3s65NWtJfplR3pm6qxjN9_NRRONGPS3g-PD2xtedHpkSD0Nevy-8CFYvOMHtbSbrgG991eMHAqioawCOye4DLFqpl9Opt3MHMtlVv7Q=w1280"
                alt="Dr. Nitin Naikwade in surgery"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-6 rounded-2xl shadow-xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <Award className="w-10 h-10 text-sky-200" />
                <div>
                  <p className="text-2xl font-bold font-serif">Youngest</p>
                  <p className="text-sm font-medium text-sky-100 uppercase tracking-wider">Hybrid Neurosurgeon in India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-6">
              About Dr. Nitin Naikwade
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-6 leading-tight">
              Pioneering the Future of <span className="text-sky-700 italic">Neurological Care in Mumbai</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Dr. Nitin Naikwade is distinguished as the youngest hybrid neurosurgeon in India, bringing a revolutionary dual-trained approach to complex neurological care. He completed his prestigious MCh in Neurosurgery from the renowned Lokmanya Tilak Municipal Medical College (LTMMC) in Sion, Mumbai.
              </p>
              <p>
                Driven by a relentless pursuit of excellence, he is currently advancing his expertise as a Fellow in Neuroendovascular Intervention (SNVI) under the esteemed mentorship of Dr. Nitin Dange.
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <HeartPulse className="w-6 h-6 text-sky-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Treatment Philosophy</h3>
                </div>
                <p className="text-slate-700 leading-relaxed italic">
                  "My philosophy centers on the seamless integration of traditional open microsurgery with cutting-edge, minimally invasive endovascular techniques. This hybrid approach ensures that every patient receives the safest, most effective, and highly individualized intervention tailored to their unique neurological condition."
                </p>
              </div>
            </div>

            {/* Credentials List */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                </div>
                <p className="ml-3 text-base text-slate-700">
                  <strong className="text-slate-900">MCh Neurosurgery</strong> - LTMMC, Sion, Mumbai
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-sky-600" />
                </div>
                <p className="ml-3 text-base text-slate-700">
                  <strong className="text-slate-900">Fellow in Neuroendovascular Intervention (SNVI)</strong>
                </p>
              </li>
            </ul>

            {/* LinkedIn Badge */}
            <div className="mt-10">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="dr-nitin-naikwade-a6503798" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/dr-nitin-naikwade-a6503798?trk=profile-badge">Dr.Nitin Naikwade</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
