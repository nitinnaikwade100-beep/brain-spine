import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    id: 1,
    url: "https://lh3.googleusercontent.com/pw/AP1GczO9gbL23ihtSpVBF78NCS4EzjcOzyzpQIxFNRyPoKLps2E0C39vUtiNxYpUY0NJcp1KUH8elX0xkr4zTAORjbAgsvN8uj_4eSGfnfNf5oCJBWeIVJWC=w1280",
    alt: "Dr. Nitin Naikwade - Hybrid Neurosurgeon"
  },
  {
    id: 2,
    url: "https://lh3.googleusercontent.com/pw/AP1GczMdPn8aWObdm3s65NWtJfplR3pm6qxjN9_NRRONGPS3g-PD2xtedHpkSD0Nevy-8CFYvOMHtbSbrgG991eMHAqioawCOye4DLFqpl9Opt3MHMtlVv7Q=w1280",
    alt: "Dr. Nitin Naikwade in surgery"
  },
  {
    id: 3,
    url: "https://lh3.googleusercontent.com/pw/AP1GczMEAZLO8xnJnEsJKHOvZAD7bVBmZnIymVIIwzEIoAEZRpmOfSLABB7sRL7FM-0OztOibrjjjwjms0K2CpmMBScYK2UrGNxDWMIK7Hxk6BhKb50mdQ4-=w1280",
    alt: "Dr. Nitin Naikwade in consultation"
  },
  {
    id: 4,
    url: "https://lh3.googleusercontent.com/pw/AP1GczPEmlL7Xgqt4pYDvBZkF2N707bVCkyRqGdFnmk_ZBztiW7nFg3lMxs2lBwISOEmp62ujOD5Hb-uUxrjQoJn5Qj0zM8hw51C517Hq3VKHWIi0vboyu3v=w1280",
    alt: "Dr. Nitin Naikwade performing surgery"
  },
  {
    id: 5,
    url: "https://lh3.googleusercontent.com/pw/AP1GczOJNQOA_LnX3Lf1lITQY6-pRX2wzbwZFf4Y2gMUOIG19uxwvCafZiWF9SqwVD7vvI_82oTh2FbT7NYurfASgjR382XSgEMAWWYH7BuqVFcexo8-QrhZ=w1280",
    alt: "Dr. Nitin Naikwade with team"
  },
  {
    id: 6,
    url: "https://lh3.googleusercontent.com/pw/AP1GczOEP-EkotSI4Iz7nkn1X1p7z5DZf0vehF9BxHXJO1LIUkcAqf9Qtc5-_jC4lpdPAvJYlDevTA1CFhBuI89Nn6XQTZhsGB1Lvt7cLAXeVD-JXF4n0kve=w1280",
    alt: "Dr. Nitin Naikwade professional portrait"
  },
  {
    id: 7,
    url: "https://lh3.googleusercontent.com/pw/AP1GczOL67k3u2ITpbw19Iy3PtRcVFg8x32o0X-K3-ov0V4ZpbNoENaoTezdWfohdu1EvVC1MytfddMfTHSnOmA_eg4YlLN800utMudphgKRjG-1cYZ3kNPg=w1280",
    alt: "Advanced surgical equipment"
  },
  {
    id: 8,
    url: "https://lh3.googleusercontent.com/pw/AP1GczOOCmjy6wsxLuL2rO7AC7FeENVBWIeYNZF4UKx-BkSyFRb5eytu9gXiDI1xMMMk3XWX1YEqr0ayyoliRwEQmaDEzUk16fq_hGHaiOCUSYvOLXaMk3nC=w1280",
    alt: "Medical consultation"
  },
  {
    id: 9,
    url: "https://lh3.googleusercontent.com/pw/AP1GczOIz6_qEW9uJuuP2-GS04Eb7wa1AuCg7CvV1a2xGNrPFLueq11lh1ND4YLkSNjgS48Dbqe_rlk6Lc-1Md3JQjAmpzmNlfS20ZH2OBoV6YCSjl_BsFn4=w1280",
    alt: "Neurosurgery procedure"
  },
  {
    id: 10,
    url: "https://lh3.googleusercontent.com/pw/AP1GczMUJEW0Cfi5DU-yAqicKCFl2bJz5e0DHxJ9w3xEkT2OLdRLNFyjZ3ZBJ0SpXvhQwjXViZfAOQBWD8HJVrTgLeXnuO_Xr8DG-ndkmj8p00kgF4lD8Dgn=w1280",
    alt: "Dr. Nitin Naikwade at work"
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Gallery() {
  const [page, setPage] = useState([0, 0]);
  const [imageIndex, direction] = page;

  const paginate = (newDirection: number) => {
    let nextIndex = imageIndex + newDirection;
    if (nextIndex < 0) nextIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              Gallery
            </div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              A Glimpse into <span className="text-sky-700 italic">Our Practice</span>
            </h2>
            <p className="text-lg text-slate-600">
              Explore moments from our clinic, surgical procedures, and patient interactions.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square sm:aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={imageIndex}
              src={images[imageIndex].url}
              alt={images[imageIndex].alt}
              loading="lazy"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full object-cover object-top sm:object-[center_20%] cursor-grab active:cursor-grabbing"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center pointer-events-none">
            <motion.p 
              key={`text-${imageIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-medium text-lg sm:text-xl drop-shadow-md"
            >
              {images[imageIndex].alt}
            </motion.p>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const newDirection = idx > imageIndex ? 1 : -1;
                setPage([idx, newDirection]);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === imageIndex ? 'bg-sky-600 w-8' : 'bg-slate-300 hover:bg-sky-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
