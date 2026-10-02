import HeroSection from './sections/HeroSection';
import Work from './sections/Work';
import MoreWork from './sections/MoreWork';
import About from './sections/About';
import Process from './sections/Process';
import Testimonial from './sections/Testimonial';

const Portfolio = () => {
  return (
    <main>
        <HeroSection />
        <Work />
        <MoreWork />
        <About />
        <Process />
        <Testimonial />
    </main>
  )
}

export default Portfolio