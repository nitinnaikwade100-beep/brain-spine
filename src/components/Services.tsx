import { motion } from 'motion/react';
import { Activity, Brain, Stethoscope, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: 'Neuroendovascular Intervention',
    description: 'Minimally invasive techniques for complex vascular conditions of the brain and spine.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    color: 'bg-blue-50 text-blue-700',
    items: [
      'IV Thrombolysis & Mechanical Thrombectomy',
      'Brain Aneurysm Coiling & Flow Diverters',
      'AVM & AV Fistula Embolization',
      'Extracranial Carotid Artery Stenting',
      'Spinal Tumor & AVM Embolization',
      'Intracranial Stenting',
    ],
  },
  {
    title: 'Advanced Brain & Spine Surgery',
    description: 'Comprehensive surgical care utilizing the latest microsurgical techniques.',
    icon: Brain,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOPiKir3JmljMjlStPi6QPRjG0jPc6oqd-qUk2aMd-FoiGdEIRX1G9Yj7E-XE5ziLUYA1fAoIG7Qy7R1TmZb-nZph90Bv6GZdPPbpicOqTVeGZfTHBP=w1280',
    color: 'bg-emerald-50 text-emerald-700',
    items: [
      'Brain Tumor & Pituitary Tumor Surgery',
      'Trigeminal Neuralgia & Headache Management',
      'Epilepsy Surgery & Hydrocephalus Treatment',
      'Slip Disc, Sciatica & Nerve Compression',
      'Cervical & Lumbar Spondylosis',
      'Spinal Tumor Surgery & Deformity Correction',
    ],
  },
  {
    title: 'Emergency Neuro-Trauma Care',
    description: 'Rapid, life-saving interventions for severe neurological emergencies.',
    icon: ShieldAlert,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOTrbCMNnUnp9zyZCtY2sg45D3637B6AWqnfRyNC41m2gd3luFRZTOvbI6l9lAQqeBieyTCTzQjmChasJ09da0mHIGqvVmmhkpFT9Gv1we2tuXWNXDK=w1280',
    color: 'bg-rose-50 text-rose-700',
    items: [
      'Acute Ischemic Stroke Treatment',
      'Head Injury & Traumatic CSF Rhinorrhoea',
      'Spine Fractures & Spinal Dislocation',
      'Brain Hemorrhage Management',
    ],
  },
  {
    title: 'Specialized Surgical Offerings',
    description: 'Cutting-edge procedures tailored for specific, complex conditions.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-50 text-purple-700',
    items: [
      'Endoscopic Pituitary Tumor Surgery',
      'Minimally Invasive Spine Surgery (Endoscopic/Robotic)',
      'Neuro-Critical Care',
      'Neuro-Rehabilitation',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Core Services
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              Comprehensive <span className="text-sky-700 italic">Neurological Care</span>
            </h2>
            <p className="text-lg text-slate-600">
              Offering a full spectrum of advanced treatments, from minimally invasive endovascular procedures to complex open surgeries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-slate-50 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="h-48 -mx-8 -mt-8 mb-8 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-8 inline-flex items-center justify-center p-3 rounded-xl shadow-lg bg-white ${service.color.split(' ')[1]}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      </div>
                      <p className="ml-3 text-sm font-medium text-slate-700">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
