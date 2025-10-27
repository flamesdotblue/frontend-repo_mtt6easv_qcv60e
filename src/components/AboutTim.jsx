import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

const AboutTim = () => {
  return (
    <section className="relative w-full bg-white py-16 text-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet Tim — The Muscle Behind the Mission</h2>
          <p className="mt-4 text-gray-600">
            Tim built GymFitOutDubai to elevate training spaces across the region with uncompromising quality and service. From home gyms to full commercial fit-outs, his mission is to make elite equipment accessible—whether you want to own it or rent it.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-emerald-500" />
              <span>Trusted by athletes, executives, and boutique studios across the UAE</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-emerald-500" />
              <span>Personalized consulting to design your perfect training environment</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-emerald-500" />
              <span>White-glove delivery, installation, and ongoing support</span>
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent" />
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
              <User className="h-24 w-24 text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTim;
