import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShoppingCart, Handshake } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays for contrast and readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-emerald-400" />
            <span className="text-white/90">Where Champions Shop, Where Dreams Lift Off</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            GymFitOutDubai
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            A high-performance destination for premium fitness equipment. Buy or rent world-class cardio, strength, and flooring solutions crafted for homes, boutiques, and commercial gyms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </a>
            <a
              href="#rent"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <Handshake className="h-5 w-5" />
              Rent Your Dream Gym
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
