import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Destinations } from '@/components/Destinations';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Contact />
    </main>
  );
}