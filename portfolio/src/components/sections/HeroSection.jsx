import { motion } from 'motion/react';
import Navbar from '../utilities/Navbar';
import hero3d from '../../assets/hero3d.svg';

import img1 from '../../assets/slide/slide1.jpeg';
import img2 from '../../assets/slide/slide2.jpeg';
import img3 from '../../assets/slide/slide3.jpg';
import img4 from '../../assets/slide/slide4.jpeg';
import img5 from '../../assets/slide/slide5.jpeg';

const columnImages = [
  [img1, img2, img3, img4, img5, img1, img2],
  [img3, img4, img1, img2, img5, img3, img4],
  [img2, img5, img4, img1, img3, img2, img5],
  [img4, img1, img3, img5, img2, img4, img1]
];

const HeroSection = () => {
  return (
    <header id="home" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-between">
      
      {/* ================= BACKGROUND: ENDLESS SCROLLING IMAGE COLUMNS ================= */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pointer-events-none opacity-40 z-0">
        {columnImages.map((col, colIndex) => (
          <div key={colIndex} className="relative overflow-hidden h-full flex flex-col">
            <motion.div
              className="flex flex-col gap-4 py-4"
              animate={{ y: colIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{
                duration: 25 + colIndex * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Doubling the array to ensure seamless infinite looping */}
              {[...col, ...col].map((imgSrc, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-full h-48 sm:h-64 rounded-2xl border border-white/20 overflow-hidden bg-zinc-900 shadow-lg shrink-0"
                >
                  <img
                    src={typeof imgSrc === 'function' ? imgSrc() : imgSrc}
                    alt={`Portfolio sample ${imgIndex}`}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* ================= GRADIENT OVERLAYS ================= */}
      {/* 1. Black Gradient (Biggest at Top Left) */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 h-full bg-linear-to-br from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* 2. Yellow & Blue Accents covering the rest stylishly */}
      <div className="absolute inset-0 bg-linear-to-tr from-yellow/15 via-transparent to-blue/20 mix-blend-screen z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 bg-linear-to-tl from-blue/25 via-transparent to-transparent z-10 pointer-events-none" />

      {/* ================= NAVBAR COMPONENT ================= */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* ================= MAIN HERO CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 my-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5 flex flex-col items-start text-left gap-6 lg:gap-8"
        >
          {/* Headline with Custom Spans */}
          <h1 className="font-inter font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight drop-shadow-md">
            <span className="text-yellow">Designs</span> that help brands <span className="text-blue">stand out.</span>
          </h1>

          {/* Description */}
          <p className="font-inter font-normal text-zinc-200 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow">
            Your brand deserves more than good-looking visuals. It deserves design that communicates clearly, creates the right impression, and connects with the people you want to reach.
          </p>

          {/* Subtext */}
          <p className="font-inter text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            I combine strategy, creativity and intentional design to help businesses present themselves with confidence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#work"
              className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider rounded-full shadow-xl hover:bg-zinc-200 transition-all text-center transform hover:scale-105"
            >
              EXPLORE MY WORK
            </a>
            <a
              href="https://wa.me/2348101785839"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue text-black font-bold text-sm tracking-wider rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all text-center transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Graphic Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-2/5 flex items-center justify-center"
        >
          <div className="relative w-full max-w-65 sm:max-w-[320px] md:max-w-90 lg:max-w-95 overflow-hidden group">
            <img
              src={hero3d}
              alt="3D Liquid"
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </header>
  );
};

export default HeroSection;