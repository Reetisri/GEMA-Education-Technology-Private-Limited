import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  bgColor: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Who is this workshop for?',
      answer: 'This workshop is designed for kids aged 8 to 14 years who are curious about how technology, AI, and robots work. No matter if they are absolute beginners or have played with Scratch coding before, they will find the curriculum engaging and creative!',
      bgColor: 'bg-brand-softPink',
    },
    {
      question: 'Is prior coding experience needed?',
      answer: 'Not at all! We start with graphical, block-based coding (drag-and-drop) which is extremely visual and easy to grasp. This allows kids to understand logic, loops, and conditions without worrying about complex syntax errors.',
      bgColor: 'bg-brand-softBlue',
    },
    {
      question: 'What will my child need to participate?',
      answer: 'Your child will need a laptop or desktop computer (Windows, Mac, or Chromebook) with a working webcam, microphrone, and a stable internet connection. All coding tools and AI engines run directly inside the browser, so there is no complex software installation required!',
      bgColor: 'bg-brand-softGreen',
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-playful text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
          Frequently Asked Questions ❓
        </h2>
        <p className="text-lg text-brand-dark/70 font-semibold">
          Got doubts? We have got playful answers!
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-2 border-brand-dark rounded-3xl overflow-hidden bg-white shadow-playful hover:shadow-playful-hover transition-all duration-150"
            >
              {/* FAQ Header */}
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg sm:text-xl text-brand-dark focus:outline-none transition-colors ${
                  isOpen ? faq.bgColor : 'hover:bg-brand-cream'
                }`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-dark shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* FAQ Answer with dynamic heights */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-64 border-t-2 border-brand-dark' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-base font-medium text-brand-dark/80 bg-brand-cream/35 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
