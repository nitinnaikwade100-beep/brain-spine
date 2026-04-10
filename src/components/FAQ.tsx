import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a Hybrid Neurosurgeon?",
    answer: "A hybrid neurosurgeon is uniquely trained in both traditional open microsurgery and minimally invasive endovascular techniques. This dual expertise allows Dr. Naikwade to offer the most effective, least invasive treatment tailored specifically to your condition, often combining both approaches for optimal results."
  },
  {
    question: "How long is the recovery time for minimally invasive spine surgery?",
    answer: "Recovery times vary depending on the specific procedure and individual patient factors. However, minimally invasive techniques generally result in significantly shorter hospital stays (often outpatient or 1-2 days) and a faster return to normal activities compared to traditional open surgery."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring any relevant medical records, previous imaging (MRI, CT scans, X-rays) on a CD or USB drive, a list of your current medications, and your insurance information. Having these ready helps Dr. Naikwade provide a comprehensive evaluation during your visit."
  },
  {
    question: "Do I need a referral to schedule an appointment?",
    answer: "While some insurance plans require a referral from a primary care physician, we also accept direct appointments. We recommend checking with your insurance provider regarding their specific requirements for specialist consultations."
  },
  {
    question: "Why choose Dr. Nitin Naikwade for my neurological care?",
    answer: "Dr. Naikwade offers a rare combination of expertise in both open and endovascular neurosurgery. His patient-centric approach ensures that you receive a personalized treatment plan utilizing the latest, least invasive technologies available. With a commitment to compassionate care and clinical excellence, he strives to achieve the best possible outcomes for every patient."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
            Frequently Asked <span className="text-sky-700 italic">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our procedures, consultations, and approach to care.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-slate-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
