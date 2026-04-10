import { motion } from 'motion/react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogsData';

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Patient Education
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              Medical <span className="text-sky-700 italic">Insights & Articles</span>
            </h2>
            <p className="text-lg text-slate-600">
              Explore our latest articles on advanced neurological treatments, patient care, and recovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${blog.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sky-600 mb-3">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-wider">Article</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif mb-3 group-hover:text-sky-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {blog.meta}
                  </p>
                  <div className="flex items-center text-sky-700 font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                    Read Full Article <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
