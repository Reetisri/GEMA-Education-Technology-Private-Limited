import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, 'Full name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
});

type FormData = z.infer<typeof formSchema>;

export const RegistrationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMessage('');

    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

    try {
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        reset();

        // Playful confetti!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF8A5B', '#FFD166', '#118AB2', '#06D6A0', '#8338EC', '#FF006E']
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Could not connect to the backend server. Make sure the backend is running.');
    }
  };

  return (
    <section id="enroll" className="py-16 px-4 max-w-lg mx-auto scroll-mt-20">
      <div className="relative bg-white border-4 border-brand-dark rounded-3xl p-8 shadow-playful-lg">
        {/* Playful top banner badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-pink text-white font-extrabold text-lg px-6 py-2 rounded-full border-2 border-brand-dark shadow-playful whitespace-nowrap">
          Register Today!
        </div>

        <h3 className="font-playful text-3xl font-extrabold text-brand-dark text-center mt-4 mb-2">
          Secure Your Spot
        </h3>
        <p className="text-center text-sm font-semibold text-brand-dark/60 mb-8">
          Fill out the form below. Our counselors will contact you within 24 hours.
        </p>

        {/* Success State */}
        {status === 'success' && (
          <div className="mb-6 p-6 bg-brand-softGreen border-2 border-brand-green text-brand-dark rounded-2xl flex flex-col items-center text-center animate-bounce-slow">
            <CheckCircle2 className="w-12 h-12 text-brand-green mb-3 animate-pulse" />
            <h4 className="font-playful text-xl font-bold mb-1">Hurray! Registration Received!</h4>
            <p className="text-sm font-medium">
              We have received your details. Check your email for further details, and get ready for a summer of robot building!
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-4 py-2 bg-brand-green text-white font-bold rounded-xl border border-brand-dark shadow-playful hover:shadow-playful-hover hover:translate-x-[1px] hover:translate-y-[1px] text-sm transition-all"
            >
              Submit Another Enquiry
            </button>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-brand-softPink border-2 border-brand-pink text-brand-dark rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-brand-pink shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">Failed to submit registration</h4>
              <p className="text-xs font-semibold text-brand-dark/80 mt-1">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-brand-dark mb-2">
                Parent/Student Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                disabled={status === 'loading'}
                className={`playful-input ${errors.name ? 'border-brand-pink focus:border-brand-pink focus:ring-brand-pink/20' : ''}`}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-brand-pink text-xs font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@example.com"
                disabled={status === 'loading'}
                className={`playful-input ${errors.email ? 'border-brand-pink focus:border-brand-pink focus:ring-brand-pink/20' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-brand-pink text-xs font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-brand-dark mb-2">
                Phone Number (10 digits)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="9876543210"
                disabled={status === 'loading'}
                className={`playful-input ${errors.phone ? 'border-brand-pink focus:border-brand-pink focus:ring-brand-pink/20' : ''}`}
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-brand-pink text-xs font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              id="submit-enquiry"
              type="submit"
              disabled={status === 'loading'}
              className="w-full relative px-6 py-4 bg-brand-green text-white font-extrabold text-lg rounded-2xl border-2 border-brand-dark shadow-playful hover:shadow-playful-hover hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-75 disabled:shadow-playful disabled:transform-none disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Enroll for ₹2,999</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
