import React, { useState } from 'react';
import { DollarSign, Repeat } from 'lucide-react';

const offers = {
  buy: [
    {
      title: 'Elite Treadmill Pro',
      badge: 'Best Seller',
      price: 'AED 7,999',
      img: 'https://images.unsplash.com/photo-1596357395104-5e7e4a0cb1f7?q=80&w=1600&auto=format&fit=crop',
      features: ['Commercial motor', 'Shock absorption', 'Touch console'],
    },
    {
      title: 'Adjustable Dumbbell Set',
      badge: 'New',
      price: 'AED 1,299',
      img: 'https://images.unsplash.com/photo-1541533848492-7d53b6462876?q=80&w=1600&auto=format&fit=crop',
      features: ['2–24 kg range', 'Space saving', 'Ergonomic grip'],
    },
    {
      title: 'Premium Rubber Flooring',
      badge: 'Pro Choice',
      price: 'AED 99/m²',
      img: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476a?q=80&w=1600&auto=format&fit=crop',
      features: ['Noise dampening', 'Anti-slip', 'Easy clean'],
    },
  ],
  rent: [
    {
      title: 'VIP Home Gym Pack',
      badge: 'Bundle',
      price: 'AED 899/mo',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      features: ['Treadmill + Bike', 'Dumbbells + Bench', 'White-glove install'],
    },
    {
      title: 'Recovery & Wellness Set',
      badge: 'Wellness',
      price: 'AED 399/mo',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
      features: ['Percussion gun', 'Compression boots', 'Yoga kit'],
    },
    {
      title: 'Commercial Cardio Trio',
      badge: 'Pro',
      price: 'AED 2,999/mo',
      img: 'https://images.unsplash.com/photo-1571732070499-36db0e25f0b2?q=80&w=1600&auto=format&fit=crop',
      features: ['Treadmill', 'Rower', 'Bike'],
    },
  ],
};

const OfferCard = ({ item }) => (
  <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
        {item.badge}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
      <p className="mt-1 text-emerald-600 font-semibold">{item.price}</p>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        {item.features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
          Add to Quote
        </button>
        <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
          Compare
        </button>
      </div>
    </div>
  </div>
);

const OfferHighlights = () => {
  const [mode, setMode] = useState('buy');

  return (
    <section id="shop" className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Sale and Rent Highlights
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Explore featured deals and curated bundles. Toggle between buying outright or flexible rental plans.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1">
            <button
              onClick={() => setMode('buy')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === 'buy' ? 'bg-emerald-500 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <DollarSign className="h-4 w-4" /> Buy
            </button>
            <button
              id="rent"
              onClick={() => setMode('rent')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === 'rent' ? 'bg-emerald-500 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Repeat className="h-4 w-4" /> Rent
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers[mode].map((item, idx) => (
            <OfferCard key={`${mode}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferHighlights;
