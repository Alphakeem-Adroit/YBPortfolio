import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionText from '../utilities/SectionText';

// AM Global Branding Assets
import amglobal1 from '../../assets/am-global/amglobal1.jpg';
import amglobal2 from '../../assets/am-global/amglobal2.jpeg';
import amglobal3 from '../../assets/am-global/amglobal3.jpeg';
import amglobal4 from '../../assets/am-global/amglobal4.jpeg';
import amglobal5 from '../../assets/am-global/amglobal5.jpeg';
import amglobal6 from '../../assets/am-global/amglobal6.jpeg';
import amglobal7 from '../../assets/am-global/amglobal7.jpeg';
import amglobal8 from '../../assets/am-global/amglobal8.jpeg';
import amglobal9 from '../../assets/am-global/amglobal9.jpeg';
import amglobal10 from '../../assets/am-global/amglobal10.jpeg';
import amglobal11 from '../../assets/am-global/amglobal11.jpeg';
import amglobal12 from '../../assets/am-global/amglobal12.jpeg';
import amglobal13 from '../../assets/am-global/amglobal13.jpeg';
import amglobal14 from '../../assets/am-global/amglobal14.jpeg';
import amglobal15 from '../../assets/am-global/amglobal15.jpeg';
import amglobal16 from '../../assets/am-global/amglobal16.jpeg';
import amglobal17 from '../../assets/am-global/amglobal17.jpeg';
import amglobal18 from '../../assets/am-global/amglobal18.jpeg';
import amglobal19 from '../../assets/am-global/amglobal19.jpeg';
import amglobal20 from '../../assets/am-global/amglobal20.jpeg';
import amglobal21 from '../../assets/am-global/amglobal21.jpeg';
import amglobal22 from '../../assets/am-global/amglobal22.jpg';
import amglobal23 from '../../assets/am-global/amglobal23.jpg';
import amglobal24 from '../../assets/am-global/amglobal24.jpg';
import amglobal25 from '../../assets/am-global/amglobal25.jpg';

// Bashman Branding Assets
import bashman1 from '../../assets/bashman/bashman1.jpeg';
import bashman2 from '../../assets/bashman/bashman2.jpeg';
import bashman3 from '../../assets/bashman/bashman3.jpeg';
import bashman4 from '../../assets/bashman/bashman4.jpeg';
import bashman5 from '../../assets/bashman/bashman5.jpeg';
import bashman6 from '../../assets/bashman/bashman6.jpeg';
import bashman7 from '../../assets/bashman/bashman7.jpeg';
import bashman8 from '../../assets/bashman/bashman8.jpeg';
import bashman9 from '../../assets/bashman/bashman9.jpeg';
import bashman10 from '../../assets/bashman/bashman10.jpeg';
import bashman11 from '../../assets/bashman/bashman11.jpeg';
import bashman12 from '../../assets/bashman/bashman12.jpeg';
import bashman13 from '../../assets/bashman/bashman13.jpeg';
import bashman14 from '../../assets/bashman/bashman14.jpeg';
import bashman15 from '../../assets/bashman/bashman15.jpeg';
import bashman16 from '../../assets/bashman/bashman16.jpeg';
import bashman17 from '../../assets/bashman/bashman17.jpeg';
import bashman18 from '../../assets/bashman/bashman18.jpeg';
import bashman19 from '../../assets/bashman/bashman19.jpeg';
import bashman20 from '../../assets/bashman/bashman20.jpeg';
import bashman21 from '../../assets/bashman/bashman21.jpeg';
import bashman22 from '../../assets/bashman/bashman22.jpeg';
import bashman23 from '../../assets/bashman/bashman23.jpeg';
import bashman24 from '../../assets/bashman/bashman24.jpeg';
import bashman25 from '../../assets/bashman/bashman25.jpeg';

// Neemjay Branding Assets
import neemjay1 from '../../assets/neemjay/neemjay1.png';
import neemjay2 from '../../assets/neemjay/neemjay2.png';
import neemjay3 from '../../assets/neemjay/neemjay3.png';
import neemjay4 from '../../assets/neemjay/neemjay4.png';
import neemjay5 from '../../assets/neemjay/neemjay5.jpeg';
import neemjay6 from '../../assets/neemjay/neemjay6.jpeg';
import neemjay7 from '../../assets/neemjay/neemjay7.jpeg';
import neemjay8 from '../../assets/neemjay/neemjay8.jpeg';
import neemjay9 from '../../assets/neemjay/neemjay9.jpeg';
import neemjay11 from '../../assets/neemjay/neemjay11.jpeg';
import neemjay12 from '../../assets/neemjay/neemjay12.jpeg';
import neemjay13 from '../../assets/neemjay/neemjay13.jpeg';
import neemjay14 from '../../assets/neemjay/neemjay14.jpeg';
import neemjay15 from '../../assets/neemjay/neemjay15.jpeg';
import neemjay16 from '../../assets/neemjay/neemjay16.jpeg';
import neemjay17 from '../../assets/neemjay/neemjay17.jpeg';
import neemjay18 from '../../assets/neemjay/neemjay18.jpeg';
import neemjay19 from '../../assets/neemjay/neemjay19.jpeg';
import neemjay20 from '../../assets/neemjay/neemjay20.jpeg';
import neemjay21 from '../../assets/neemjay/neemjay21.jpeg';
import neemjay22 from '../../assets/neemjay/neemjay22.jpeg';
import neemjay23 from '../../assets/neemjay/neemjay23.jpeg';

// Criterion Branding Assets
import criterion1 from '../../assets/criterion/criterion1.jpeg';
import criterion2 from '../../assets/criterion/criterion2.jpeg';
import criterion3 from '../../assets/criterion/criterion3.jpeg';
import criterion4 from '../../assets/criterion/criterion4.jpeg';
import criterion5 from '../../assets/criterion/criterion5.jpeg';
import criterion6 from '../../assets/criterion/criterion6.jpeg';
import criterion7 from '../../assets/criterion/criterion7.jpeg';
import criterion8 from '../../assets/criterion/criterion8.jpeg';
import criterion9 from '../../assets/criterion/criterion9.jpeg';
import criterion10 from '../../assets/criterion/criterion10.jpeg';
import criterion11 from '../../assets/criterion/criterion11.jpeg';
import criterion12 from '../../assets/criterion/criterion12.jpeg';
import criterion13 from '../../assets/criterion/criterion13.jpeg';
import criterion14 from '../../assets/criterion/criterion14.jpeg';
import criterion15 from '../../assets/criterion/criterion15.jpg';
import criterion16 from '../../assets/criterion/criterion16.jpg';
import criterion17 from '../../assets/criterion/criterion17.jpg';
import criterion18 from '../../assets/criterion/criterion18.jpg';
import criterion19 from '../../assets/criterion/criterion19.jpg';
import criterion20 from '../../assets/criterion/criterion20.jpg';
import criterion21 from '../../assets/criterion/criterion21.jpg';
import criterion22 from '../../assets/criterion/criterion22.jpg';
import criterion23 from '../../assets/criterion/criterion23.jpg';
import criterion24 from '../../assets/criterion/criterion24.jpg';
import criterion25 from '../../assets/criterion/criterion25.jpg';

const amGlobalImages = [
  amglobal1,
  amglobal2,
  amglobal3,
  amglobal4,
  amglobal5,
  amglobal6,
  amglobal7,
  amglobal8,
  amglobal9,
  amglobal10,
  amglobal11,
  amglobal12,
  amglobal13,
  amglobal14,
  amglobal15,
  amglobal16,
  amglobal17,
  amglobal18,
  amglobal19,
  amglobal20,
  amglobal21,
  amglobal22,
  amglobal23,
  amglobal24,
  amglobal25,
];

const bashmanImages = [
  bashman1,
  bashman2,
  bashman3,
  bashman4,
  bashman5,
  bashman6,
  bashman7,
  bashman8,
  bashman9,
  bashman10,
  bashman11,
  bashman12,
  bashman13,
  bashman14,
  bashman15,
  bashman16,
  bashman17,
  bashman18,
  bashman19,
  bashman20,
  bashman21,
  bashman22,
  bashman23,
  bashman24,
  bashman25,
];

const neemjayImages = [
  neemjay1,
  neemjay2,
  neemjay3,
  neemjay4,
  neemjay5,
  neemjay6,
  neemjay7,
  neemjay8,
  neemjay9,
  neemjay11,
  neemjay12,
  neemjay13,
  neemjay14,
  neemjay15,
  neemjay16,
  neemjay17,
  neemjay18,
  neemjay19,
  neemjay20,
  neemjay21,
  neemjay22,
  neemjay23,
];

const criterionImages = [
  criterion1,
  criterion2,
  criterion3,
  criterion4,
  criterion5,
  criterion6,
  criterion7,
  criterion8,
  criterion9,
  criterion10,
  criterion11,
  criterion12,
  criterion13,
  criterion14,
  criterion15,
  criterion16,
  criterion17,
  criterion18,
  criterion19,
  criterion20,
  criterion21,
  criterion22,
  criterion23,
  criterion24,
  criterion25,
];

// The AM Global brand's details.
const amGlobalProjectDetails = [
  {
    title: 'The Challenge',
    description:
      'The AM Global Ltd needed a visual identity that could carry the weight of an international business without losing warmth or approachability.',
  },
  {
    title: 'The Approach',
    description:
      "Research began with the brand's audience and ambitions, mapping how the identity needed to read across markets, formats and touchpoints before any visual direction was chosen.",
  },
  {
    title: 'The Solution',
    description:
      'The resulting identity balances structure and confidence — a mark and system built to hold up across everything from letterhead to large-scale signage.',
  },
];

// Bashman brand's details.
const bashmanProjectDetails = [
  {
    title: 'The Challenge',
    description:
      'A natural medicine brand needed to feel credible and calming at once — trustworthy without slipping into generic wellness clichés.',
  },
  {
    title: 'The Approach',
    description:
      "The direction leaned on restraint: a quieter palette, considered typography and imagery that lets the product and its ingredients speak for themselves.",
  },
  {
    title: 'The Solution',
    description:
      'The final identity gives Bashman a distinct shelf presence while keeping every touchpoint legible, honest and easy to trust.',
  },
];

// Neemjay brand's details.
const neemjayProjectDetails = [
  {
    title: 'The Challenge',
    description:
      'Neemjay Collections needed an identity as considered as the products it represents — something with genuine retail presence.',
  },
  {
    title: 'The Approach',
    description:
      "The system was built around texture and material cues, translating the tactile quality of the collection into a visual language.",
  },
  {
    title: 'The Solution',
    description:
      'The identity now anchors packaging, social presence and in-store material with a consistent, elevated point of view.',
  },
];

// Criterion brand's details.
const criterionProjectDetails = [
  {
    title: 'The Challenge',
    description:
      'Criterion Holistic Wellness needed to differentiate in a crowded wellness market while staying grounded and credible.',
  },
  {
    title: 'The Approach',
    description:
      "The identity was shaped around clarity — a disciplined type system and a mark designed to work at both clinical and consumer-facing scale.",
  },
  {
    title: 'The Solution',
    description:
      'The result is an identity that reads as considered and professional across everything from clinical materials to social content.',
  },
];

const projects = [
  {
    id: 'am-global',
    name: 'The AM Global',
    category: 'Brand Identity',
    images: amGlobalImages,
    details: amGlobalProjectDetails,
  },
  {
    id: 'bashman',
    name: 'Bashman Natural Medicine',
    category: 'Brand Identity',
    images: bashmanImages,
    details: bashmanProjectDetails,
  },
  {
    id: 'neemjay',
    name: 'Neemjay Collections',
    category: 'Brand Identity',
    images: neemjayImages,
    details: neemjayProjectDetails,
  },
  {
    id: 'criterion',
    name: 'Criterion Holistic Wellness',
    category: 'Brand Identity',
    images: criterionImages,
    details: criterionProjectDetails,
  },
];

const ProjectCarousel = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const previousSlide = () => {
    setActiveIndex((current) => (
      current === 0 ? images.length - 1 : current - 1
    ));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (
      current === images.length - 1 ? 0 : current + 1
    ));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previousSlide();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} project images`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:rounded-3xl"
    >
      {/* Sliding images */}
      <motion.div
        animate={{ x: `-${activeIndex * 100}%` }}
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          ease: 'easeInOut',
        }}
        className="flex"
      >
        {images.map((image, index) => (
          <div
            key={`${name}-${index}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
            aria-hidden={index !== activeIndex}
            className="aspect-[4/3] w-full shrink-0 sm:aspect-[16/10]"
          >
            <img
              src={image}
              alt={`${name} brand identity — image ${index + 1}`}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* Overlay navigation */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousSlide}
            aria-label={`Previous image for ${name}`}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/75 text-zinc-900 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:left-4 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label={`Next image for ${name}`}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/75 text-zinc-900 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:right-4 sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Image counter */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-xl sm:bottom-4"
      >
        <span className="sr-only">Image </span>
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Work = () => {
  const [openProject, setOpenProject] = useState('am-global');

  const toggleProject = (projectId) => {
    setOpenProject((current) => (
      current === projectId ? null : projectId
    ));
  };

  return (
    <section
      id="work"
      className="scroll-mt-28 bg-white px-6 py-16 font-inter sm:px-8 sm:py-20 md:px-10 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <SectionText
            smallTitle="SELECTED WORK"
            title="Brand identities built to hold their ground."
            description="A selection of branding and visual design projects created to help businesses communicate, connect and stand out."
            smallTitleColor="text-yellow"
            titleColor="text-blue"
            descriptionColor="text-zinc-600"
            align="center"
          />
        </div>

        {/* Project accordion */}
        <div className="border-t border-zinc-200">
          {projects.map((project) => {
            const isOpen = openProject === project.id;
            const triggerId = `${project.id}-trigger`;
            const panelId = `${project.id}-panel`;

            return (
              <article
                key={project.id}
                className="border-b border-zinc-200"
              >
                {/* Clickable project heading */}
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center justify-between gap-4 rounded-xl px-2 py-6 text-left transition-colors duration-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:px-4 sm:py-7 lg:py-8"
                  >
                    <span className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      <span
                        className={`text-xl font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-2xl lg:text-3xl ${
                          isOpen
                            ? 'text-blue-600'
                            : 'text-zinc-900 group-hover:text-blue-600'
                        }`}
                      >
                        {project.name}
                      </span>

                      <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:text-sm">
                        {project.category}
                      </span>
                    </span>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-12 sm:w-12 ${
                        isOpen
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-zinc-200 bg-white text-zinc-900 group-hover:border-blue-200 group-hover:bg-blue-50'
                      }`}
                    >
                      <ChevronDown
                        size={22}
                        aria-hidden="true"
                        className={`transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {/* Animated accordion panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid grid-cols-1 items-start gap-8 px-2 pb-8 pt-2 sm:gap-10 sm:px-4 sm:pb-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12 lg:pb-12 lg:pt-4">
                      {/* Image carousel */}
                      <ProjectCarousel
                        images={project.images}
                        name={project.name}
                      />

                      {/* Project details */}
                      <div className="flex min-w-0 flex-col gap-7 lg:gap-8">
                        {project.details.map((detail) => (
                          <div key={detail.title}>
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
                              {detail.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                              {detail.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;