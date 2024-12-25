import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/utils/destinations';

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-teal-900">Popular Destinations</h2>
        <p className="text-center text-teal-600 mb-12 max-w-2xl mx-auto">
          Explore our handpicked destinations that promise unforgettable experiences
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link 
              href={`/destinations/${destination.slug}`}
              key={destination.slug} 
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/5] block"
            >
              <Image
                src={destination.image}
                alt={destination.title}
                className="transition-transform duration-300 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
                <p className="text-white/90">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}