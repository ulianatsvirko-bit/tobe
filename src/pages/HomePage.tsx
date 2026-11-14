import Header from '../components/Header';
import Intro from '../components/Intro';
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
      <Intro />
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
