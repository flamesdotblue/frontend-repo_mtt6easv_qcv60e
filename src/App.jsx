import React from 'react';
import HeroSection from './components/HeroSection';
import AboutTim from './components/AboutTim';
import OfferHighlights from './components/OfferHighlights';
import EquipmentGrid from './components/EquipmentGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
      <HeroSection />
      <AboutTim />
      <OfferHighlights />
      <EquipmentGrid />

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12 text-gray-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-white text-lg font-semibold">GymFitOutDubai</h3>
              <p className="mt-2 text-sm text-gray-400">Premium equipment. Flexible ownership. Designed for performance.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#shop">Shop</a></li>
                <li><a className="hover:text-white" href="#rent">Rentals</a></li>
                <li><a className="hover:text-white" href="#cardio">Cardio</a></li>
                <li><a className="hover:text-white" href="#strength">Strength</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Join the Tribe</h4>
              <p className="mt-2 text-sm text-gray-400">Get 10% off your first order</p>
              <form className="mt-4 flex gap-2">
                <input type="email" required placeholder="Your email" className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:border-emerald-400 focus:outline-none" />
                <button type="submit" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-400">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} GymFitOutDubai. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
