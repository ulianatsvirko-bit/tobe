import Header from '../components/Header';
import Hero from '../components/Hero';
import Method from '../components/Method';
import Principles from '../components/Principles';
import LessonExample from '../components/LessonExample';
import Tracks from '../components/Tracks';
import Founder from '../components/Founder';
import Results from '../components/Results';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Method />
      <Principles />
      <LessonExample />
      <Tracks />
      <Founder />
      <Results />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
