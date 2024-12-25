import Image from "next/image";
import { getDestinationBySlug } from "@/utils/destinations";
import { notFound } from "next/navigation";

export default function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-teal-50">
      <div className="relative h-[60vh]">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <h1 className="absolute bottom-8 left-8 text-5xl font-bold text-white">
          {destination.title}
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 mb-8">
            {destination.fullDescription}
          </p>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Highlights
            </h2>
            <ul className="space-y-3">
              {destination.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-teal-500 rounded-full" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
