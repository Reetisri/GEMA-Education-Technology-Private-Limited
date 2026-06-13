import { Hero } from './sections/Hero';
import { Details } from './sections/Details';
import { Outcomes } from './sections/Outcomes';
import { FAQ } from './sections/FAQ';
import { RegistrationForm } from './sections/RegistrationForm';
import { Bot, Mail, Phone } from 'lucide-react';

function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById('enroll');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b-2 border-brand-dark px-4 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-playful text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
            <span className="p-2 bg-brand-orange text-white rounded-xl border border-brand-dark shadow-playful hover:rotate-12 transition-transform">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span>RoboCamp</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-brand-dark/80">
            <a href="#details" className="hover:text-brand-orange transition-colors">Details</a>
            <a href="#outcomes" className="hover:text-brand-pink transition-colors">Syllabus</a>
            <a href="#faq" className="hover:text-brand-blue transition-colors">FAQs</a>
          </nav>

          {/* CTA Nav Button */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-brand-pink text-white font-extrabold text-sm sm:text-base rounded-xl border border-brand-dark shadow-playful hover:shadow-playful-hover hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150"
          >
            Enroll Now!
          </button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onEnrollClick={scrollToForm} />
        
        {/* Details Section */}
        <div id="details" className="scroll-mt-20">
          <Details />
        </div>

        {/* Outcomes Section */}
        <div id="outcomes" className="scroll-mt-20">
          <Outcomes />
        </div>

        {/* FAQ Section */}
        <div id="faq" className="scroll-mt-20">
          <FAQ />
        </div>

        {/* Registration Form Section */}
        <div id="enroll" className="scroll-mt-24">
          <RegistrationForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white border-t-4 border-brand-orange py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 font-playful text-2xl font-extrabold tracking-tight mb-3">
              <span className="p-1.5 bg-brand-orange text-white rounded-lg">
                <Bot className="w-5 h-5" />
              </span>
              <span>RoboCamp</span>
            </div>
            <p className="text-sm text-gray-400 font-semibold max-w-xs leading-relaxed">
              Inspiring the next generation of creators, builders, and thinkers through playful tech education.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-extrabold text-lg text-brand-yellow">Get in Touch</h4>
            <a href="mailto:info@robocamp.com" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium">
              <Mail className="w-4 h-4 text-brand-orange" />
              <span>info@robocamp.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium">
              <Phone className="w-4 h-4 text-brand-green" />
              <span>+91 98765-43210</span>
            </a>
          </div>

          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-400 font-semibold">
            <p>© 2026 RoboCamp. All rights reserved.</p>
            <p>Made with 🤖 and 💖 for kids everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
