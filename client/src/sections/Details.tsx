import React from 'react';
import { Calendar, Clock, CreditCard, Monitor, UserCheck } from 'lucide-react';

export const Details: React.FC = () => {
  const details = [
    {
      id: 'age',
      label: 'Age Group',
      value: '8–14 Years',
      icon: UserCheck,
      bgColor: 'bg-brand-softPink',
      borderColor: 'border-brand-pink',
      textColor: 'text-brand-pink',
    },
    {
      id: 'duration',
      label: 'Duration',
      value: '4 Weeks',
      icon: Clock,
      bgColor: 'bg-brand-softBlue',
      borderColor: 'border-brand-blue',
      textColor: 'text-brand-blue',
    },
    {
      id: 'mode',
      label: 'Mode',
      value: 'Online (Interactive)',
      icon: Monitor,
      bgColor: 'bg-brand-softGreen',
      borderColor: 'border-brand-green',
      textColor: 'text-brand-green',
    },
    {
      id: 'fee',
      label: 'Special Fee',
      value: '₹2,999',
      icon: CreditCard,
      bgColor: 'bg-brand-softYellow',
      borderColor: 'border-brand-yellow',
      textColor: 'text-brand-orange',
      badge: 'Best Value',
    },
    {
      id: 'date',
      label: 'Start Date',
      value: '15 July 2026',
      icon: Calendar,
      bgColor: 'bg-brand-purple/10',
      borderColor: 'border-brand-purple',
      textColor: 'text-brand-purple',
      badge: 'Filling Fast!',
    },
  ];

  return (
    <section id="details" className="py-16 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-playful text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
          Workshop Highlights 🚀
        </h2>
        <p className="text-lg text-brand-dark/70 font-semibold">
          Everything you need to know about the summer camp in a single glance!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {details.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`relative flex flex-col items-center text-center p-6 rounded-3xl border-2 border-brand-dark shadow-playful hover:translate-y-[-4px] hover:shadow-playful-lg transition-all duration-200 bg-white`}
            >
              {/* Badge if available */}
              {item.badge && (
                <span className={`absolute -top-3 px-3 py-1 text-xs font-bold text-white rounded-full bg-brand-pink border border-brand-dark uppercase tracking-wider`}>
                  {item.badge}
                </span>
              )}

              {/* Icon Container */}
              <div className={`p-4 rounded-2xl border-2 border-brand-dark ${item.bgColor} mb-4`}>
                <IconComponent className={`w-8 h-8 ${item.textColor}`} />
              </div>

              {/* Text */}
              <span className="text-sm font-bold text-brand-dark/50 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-xl font-extrabold text-brand-dark mt-1 font-playful">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
