import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"
          alt="Safari landscape"
          className="object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Africa's Heart</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the untamed beauty of African safaris through our curated adventures
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}