import React from 'react';
import { Activity, Dumbbell, Ruler, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'Cardio',
    description: 'Treadmills, Bikes, Rowers, Ellipticals',
    icon: Activity,
    href: '#cardio',
    image:
      'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Strength',
    description: 'Racks, Smith, Multi Gyms, Plate/Selectorized',
    icon: Dumbbell,
    href: '#strength',
    image:
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Flooring',
    description: 'Rubber, Foam, Turf + Install Guides',
    icon: Ruler,
    href: '#flooring',
    image:
      'https://images.unsplash.com/photo-1518617840859-acd878cd9238?q=80&w=1600&auto=format&fit=crop',
  },
];

const EquipmentGrid = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Equipment Overview</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.title}
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{cat.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EquipmentGrid;
