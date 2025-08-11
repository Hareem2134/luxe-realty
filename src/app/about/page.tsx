// src/app/about/page.tsx
// This is a Server Component. DO NOT add 'use client' here.

import { Metadata } from 'next';
// Import the new client components from src/components
import AnimatedStorySection from '@/components/AnimatedStorySection';
import AnimatedValuesSection from '@/components/AnimatedValuesSection';
import { faMedal, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';


export const metadata: Metadata = {
  title: "About LUXE Realty",
  description: "Learn about LUXE Realty's vision, story, and core values.",
};

export default function About() {
  const valuesData = [
    { icon: faMedal, title: 'Excellence', description: 'We pursue perfection in every detail, delivering beyond expectations' },
    { icon: faHandshake, title: 'Integrity', description: 'Honesty and transparency guide every client relationship and transaction' },
    { icon: faLightbulb, title: 'Innovation', description: 'We continuously evolve through technology and creative problem-solving' },
  ];

  return (
    <>
      <div className="relative pt-16 pb-20 overflow-hidden bg-indigo-900 bg-opacity-75">
        <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">About LUXE Realty</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto font-body">
            Redefining luxury real estate through innovation, integrity, and exceptional service
          </p>
        </div>
      </div>

      {/* Our Story section (Client Component) */}
      <AnimatedStorySection />

      {/* Our Values section (Client Component) */}
      <AnimatedValuesSection values={valuesData} />
    </>
  );
}