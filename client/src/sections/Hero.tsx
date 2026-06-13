import React from 'react';
import { Bot, Cpu, Sparkles } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Decorative Floating Blobs */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-brand-yellow/30 rounded-full blur-xl animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl animate-pulse" />
      
      {/* Hero Left Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-dark bg-brand-yellow font-semibold text-brand-dark text-sm mb-6 shadow-playful transform -rotate-1 hover:rotate-0 transition-transform">
          <Sparkles className="w-4 h-4 text-brand-pink animate-spin" />
          <span>Summer Camp 2026</span>
        </div>
        
        <h1 className="font-playful text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight tracking-tight mb-6">
          Build & Code <br />
          <span className="text-brand-pink relative inline-block">
            Your First Robot!
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-brand-dark/80 font-medium max-w-xl mb-8 leading-relaxed">
          Unleash your child's creativity! Join our super fun, hands-on <strong className="text-brand-blue font-bold">AI & Robotics Summer Workshop</strong>. Designed for curious minds to learn coding, build AI models, and bring machines to life.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button
            onClick={onEnrollClick}
            className="group relative px-8 py-4 bg-brand-orange text-white font-extrabold text-xl rounded-2xl border-2 border-brand-dark shadow-playful hover:shadow-playful-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 flex items-center gap-2"
          >
            <span>Enroll Now!</span>
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
          
          <a
            href="#details"
            className="px-6 py-4 bg-white text-brand-dark font-bold text-lg rounded-2xl border-2 border-brand-dark hover:bg-brand-softBlue transition-colors"
          >
            Explore Details
          </a>
        </div>
      </div>

      {/* Hero Right Visuals */}
      <div className="flex-1 relative w-full max-w-md lg:max-w-lg flex justify-center items-center">
        {/* Playful Frame */}
        <div className="relative bg-brand-blue/10 border-4 border-dashed border-brand-blue rounded-3xl p-6 w-full aspect-square max-w-[400px] flex items-center justify-center">
          
          {/* Main animated robot graphic */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-brand-green rounded-full border-4 border-brand-dark shadow-playful flex items-center justify-center animate-bounce-slow relative">
            <Bot className="w-24 h-24 md:w-32 md:h-32 text-white" />
            
            {/* Gear badge */}
            <div className="absolute -top-4 -right-4 bg-brand-pink text-white p-3 rounded-2xl border-2 border-brand-dark shadow-playful animate-spin" style={{ animationDuration: '6s' }}>
              <Cpu className="w-6 h-6" />
            </div>
            
            {/* Floating details badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-dark font-extrabold text-sm px-4 py-2 rounded-2xl border-2 border-brand-dark shadow-playful transform -rotate-6">
              🤖 100% Kid Friendly
            </div>
          </div>
          
          {/* Accent icons */}
          <div className="absolute top-12 right-12 w-8 h-8 text-brand-orange animate-pulse">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-8 w-6 h-6 text-brand-purple animate-bounce" style={{ animationDelay: '0.5s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
