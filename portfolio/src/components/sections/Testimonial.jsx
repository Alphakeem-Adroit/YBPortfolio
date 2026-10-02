import SectionText from '../utilities/SectionText';

import testimonial1 from '../../assets/testimonial/testimonial1.jpg';
import testimonial2 from '../../assets/testimonial/testimonial2.jpg';
import testimonial3 from '../../assets/testimonial/testimonial3.jpg';
import testimonial4 from '../../assets/testimonial/testimonial4.jpg';

const testimonials = [
  { image: testimonial1, alt: 'Client testimonial 1' },
  { image: testimonial2, alt: 'Client testimonial 2' },
  { image: testimonial3, alt: 'Client testimonial 3' },
  { image: testimonial4, alt: 'Client testimonial 4' },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="scroll-mt-28 bg-white px-6 py-16 font-inter sm:px-8 sm:py-20 md:px-10 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <SectionText
            smallTitle="TESTIMONIALS"
            title="What Clients Say"
            smallTitleColor="text-black"
            titleColor="text-blue"
            align="left"
          />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.image}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none sm:rounded-3xl sm:p-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-xl sm:rounded-2xl"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;