import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Linkedin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../data/blogsData';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{blog.title} | Dr. Nitin Naikwade</title>
        <meta name="description" content={blog.meta} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.meta} />
        <meta property="og:image" content={blog.image} />
        <link rel="canonical" href={`https://drnitinnaikwade.netlify.app/blog/${blog.id}`} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#blogs" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Articles
        </Link>
        
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="relative h-64 sm:h-96 w-full">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/20 text-sky-100 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-4 border border-sky-400/30">
                Article
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
          
          <div className="p-8 sm:p-12">
            {blog.content}
            
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-600 font-medium">Found this article helpful?</p>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] transition-colors font-bold shadow-md hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2 fill-current" />
                Share on LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
