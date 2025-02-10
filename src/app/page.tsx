import { HeroCarousel } from '@/components/HeroCarousel';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
