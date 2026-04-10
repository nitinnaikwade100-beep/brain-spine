import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Dr. Naikwade's hybrid approach to my aneurysm treatment was phenomenal. The minimally invasive procedure meant I was back on my feet in days instead of weeks. Truly a lifesaver.",
    author: "Mithun KN",
    role: "Patient"
  },
  {
    id: 2,
    text: "Finding a surgeon who is both incredibly skilled and deeply compassionate is rare. Dr. Naikwade took the time to explain every detail of my spine surgery. I felt completely safe in his hands.",
    author: "Kiran Patel",
    role: "Patient"
  },
  {
    id: 3,
    text: "After my severe head trauma, the emergency care provided by Dr. Naikwade and his team was nothing short of miraculous. His expertise in neuro-critical care gave me a second chance at life.",
    author: "Onkar Mote",
    role: "Patient"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Patient Stories
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              Trusted by <span className="text-sky-700 italic">Patients</span>
            </h2>
            <p className="text-lg text-slate-600">
              Read about the experiences and successful recoveries of our patients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-sky-100 absolute top-6 right-6" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold text-lg mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://g.page/r/CfjmhVtmEQe9EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Star className="w-5 h-5 mr-2 fill-white" />
            Review us on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
