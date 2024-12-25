import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80"
          alt="Beautiful landscape with water and sunset"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore Paradise on Earth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover breathtaking landscapes and create unforgettable memories
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
