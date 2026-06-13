import React from 'react';
import { Award, Bot, BrainCircuit, Code, Sparkles, CheckCircle2 } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const outcomes = [
    {
      title: 'Build Real AI Models',
      desc: 'Train computer vision and machine learning models to identify objects, colors, and hand gestures.',
      icon: BrainCircuit,
      color: 'bg-brand-softPink text-brand-pink',
    },
    {
      title: 'Code Smart Robots',
      desc: 'Learn visual block-based coding to program robotic movement, sensors, and obstacle avoidance.',
      icon: Bot,
      color: 'bg-brand-softBlue text-brand-blue',
    },
    {
      title: 'Master Coding Logics',
      desc: 'Understand variables, loops, conditional pathways, and algorithms through gamified exercises.',
      icon: Code,
      color: 'bg-brand-softYellow text-brand-orange',
    },
    {
      title: 'Voice & Gesture Controls',
      desc: 'Create projects that react to voice commands and follow facial movements in real-time.',
      icon: Sparkles,
      color: 'bg-brand-softGreen text-brand-green',
    },
    {
      title: 'Showcase & Certification',
      desc: 'Design and showcase your own unique capstone project and receive a prestigious Summer Camp Certificate.',
      icon: Award,
      color: 'bg-brand-purple/10 text-brand-purple',
    },
  ];

  return (
    <section className="py-16 px-4 bg-brand-softBlue/20 border-y-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-playful text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            What Your Child Will Learn 🎓
          </h2>
          <p className="text-lg text-brand-dark/70 font-semibold">
            An action-packed syllabus tailored for young innovators to fall in love with tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column: List with Checkmarks */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
            <div className="p-6 bg-white border-2 border-brand-dark rounded-3xl shadow-playful">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                <span className="text-3xl">🚀</span> Core Curriculum
              </h3>
              
              <ul className="space-y-4">
                {outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark leading-snug">{outcome.title}</h4>
                      <p className="text-sm text-brand-dark/70 font-medium">{outcome.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Visual cards showcase */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="p-6 bg-brand-yellow rounded-3xl border-2 border-brand-dark shadow-playful relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full translate-x-4 -translate-y-4" />
              <h4 className="text-xl font-extrabold text-brand-dark mb-2">Hands-on Sandbox</h4>
              <p className="text-sm text-brand-dark/95 font-semibold leading-relaxed">
                We believe in learning by doing. No boring slides! Kids build their projects directly in their browsers, code block by code block.
              </p>
            </div>
            
            <div className="p-6 bg-brand-pink text-white rounded-3xl border-2 border-brand-dark shadow-playful transform -rotate-2 hover:rotate-0 transition-transform">
              <h4 className="text-xl font-extrabold mb-2">No Coding Experience?</h4>
              <p className="text-sm font-semibold leading-relaxed text-pink-50">
                Perfect! Our course starts from absolute scratch and gradually introduces complex concepts in a fully gamified, fun way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
