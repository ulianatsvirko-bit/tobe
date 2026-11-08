import Header from '../components/Header';
import Hero from '../components/Hero';
import Pain from '../components/Pain';
import Method from '../components/Method';
import Tracks from '../components/Tracks';
import LessonExample from '../components/LessonExample';
import Season from '../components/Season';
import Founder from '../components/Founder';
import Club from '../components/Club';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pain />
      <Method />
      <Tracks />
      <LessonExample />
      <Season />
      <Founder />
      <Club />
      {/* Отзывы: добавить блок, когда будут собраны реальные отзывы учеников. */}
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
