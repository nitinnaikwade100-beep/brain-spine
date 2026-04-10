import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Accreditations from '../components/Accreditations';
import SectionTransition from '../components/SectionTransition';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Dr. Nitin Naikwade | Best Neurosurgeon in Mumbai</title>
        <meta name="description" content="Expert Consultant Neurosurgeon & Neuro-Interventionist in Mumbai. Specializing in brain, spine, and endovascular neurosurgery." />
        <link rel="canonical" href="https://drnitinnaikwade.netlify.app/" />
      </Helmet>
      <Hero />
      <SectionTransition>
        <About />
      </SectionTransition>
      <SectionTransition>
        <Services />
      </SectionTransition>
      <SectionTransition>
        <Skills />
      </SectionTransition>
      <SectionTransition>
        <Gallery />
      </SectionTransition>
      <SectionTransition>
        <Blogs />
      </SectionTransition>
      <SectionTransition>
        <Testimonials />
      </SectionTransition>
      <SectionTransition>
        <FAQ />
      </SectionTransition>
      <SectionTransition>
        <Accreditations />
      </SectionTransition>
    </main>
  );
}
