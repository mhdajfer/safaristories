import Image from 'next/image';

const destinations = [
  {
    title: 'Serengeti Plains',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&q=80',
    description: 'Witness the great migration across endless savannah',
  },
  {
    title: 'Masai Mara',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80',
    description: 'Experience authentic African culture and wildlife',
  },
  {
    title: 'Okavango Delta',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80',
    description: 'Explore waterways in pristine wilderness',
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.title} className="group relative overflow-hidden rounded-lg shadow-lg h-80">
              <Image
                src={destination.image}
                alt={destination.title}
                className="transition-transform duration-300 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
                <p className="text-white/90">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}