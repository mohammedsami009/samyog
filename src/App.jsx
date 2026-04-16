import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useTransform } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sports from './components/Sports';
import Chakravyuha from './components/Chakravyuha';
import Conference from './components/Conference';
import Kalakriti from './components/Kalakriti';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

// A modern, floating narrative text component instead of old chapters
const NarrativeNode = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="flex justify-center items-center py-24 px-5 relative z-10"
  >
    <h3 className="text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[var(--saffron)] to-gray-400 font-light tracking-[0.2em] uppercase max-w-2xl">
      {text}
    </h3>
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Modern Scrolling Storyline Glow */}
      <div className="fixed top-0 bottom-0 left-4 md:left-12 w-[1px] bg-white/5 z-40 hidden md:block" />
      <motion.div 
        className="fixed top-0 bottom-0 left-4 md:left-12 w-[2px] bg-gradient-to-b from-[var(--saffron)] via-[var(--neon-blue)] to-[var(--gold)] z-50 origin-top hidden md:block"
        style={{ height: heightTransform }}
      />
      <motion.div 
        className="fixed top-0 bottom-0 left-4 md:left-12 w-[10px] bg-[var(--saffron)] blur-md z-40 hidden md:block opacity-30 origin-top"
        style={{ height: heightTransform }}
      />

      <Navbar />
      <main className="relative z-0 overflow-hidden">
        <Hero />
        <About />

        
        <Sports />

        
        <Chakravyuha />

        
        <Conference />

        
        <Kalakriti />

        <Timeline />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App;
