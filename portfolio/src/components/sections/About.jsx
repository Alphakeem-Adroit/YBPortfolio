import { ArrowRight } from 'lucide-react';
import SectionText from '../utilities/SectionText';
import profilePic from '../../assets/profilePic.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-white px-6 py-16 font-inter sm:px-8 sm:py-20 md:px-10 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <SectionText
            smallTitle="ABOUT ME"
            title="More than just design. I craft experiences."
            smallTitleColor="text-black"
            titleColor="text-blue"
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          {/* Profile image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[280px] rounded-[2rem] border border-zinc-200 bg-zinc-50 p-3 sm:max-w-[340px] lg:max-w-[400px] lg:p-4">
              <img
                src={profilePic}
                alt="Yusuf Busoyriy, brand designer and design coach"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
          </div>

          {/* Biography and CTA */}
          <div className="flex min-w-0 flex-col items-start gap-7 sm:gap-8">
            <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-600 sm:text-lg lg:gap-6">
              <p>
                I am{' '}
                <span className="font-semibold text-zinc-900">
                  Yusuf Busoyriy
                </span>
                , a Brand Designer, Strategist, Visual Creative and Design
                Coach with over five years of experience in graphic design —
                across branding, marketing design, social media, packaging,
                print, editorial and event design.
              </p>

              <p>
                My work sits at the intersection of aesthetics and intention:
                every project starts with understanding a business before a
                single shape is drawn.
              </p>
            </div>

            <a
              href="https://wa.me/2348101785839"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-600/15 transition-colors duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 sm:w-auto"
            >
              Get in Touch
              <ArrowRight
                size={20}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
              <span className="sr-only">
                on WhatsApp (opens in a new tab)
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;