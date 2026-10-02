import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  useAnimationFrame,
  useReducedMotion,
} from 'motion/react';
import {
  MessagesSquare,
  PenTool,
  Megaphone,
  Fingerprint,
  Smartphone,
  GraduationCap,
  CalendarDays,
  BookOpen,
  Printer,
  Package,
  Pause,
  Play,
} from 'lucide-react';

import SectionText from '../utilities/SectionText';

import understand_brand from '../../assets/process/understand_brand.jpg';
import understand_audience from '../../assets/process/understand_audience.jpg';
import understand_goal from '../../assets/process/understand_goal.jpg';
import define_problem from '../../assets/process/define_problem.jpg';
import create_solution from '../../assets/process/create_solution.jpg';

const processSteps = [
  {
    title: 'Understand the brand',
    image: understand_brand,
  },
  {
    title: 'Understand the audience',
    image: understand_audience,
  },
  {
    title: 'Understand the goal',
    image: understand_goal,
  },
  {
    title: 'Define the problem',
    image: define_problem,
  },
  {
    title: 'Create solution',
    image: create_solution,
  },
];

const services = [
  {
    title: 'Brand consultation',
    description:
      'I help businesses identify visual challenges and make better decisions about their brand presentation.',
    icon: MessagesSquare,
  },
  {
    title: 'Logo design',
    description:
      'I design purposeful logos that represent the character and direction of a brand.',
    icon: PenTool,
  },
  {
    title: 'Marketing design',
    description:
      'I create promotional visuals that communicate products, services, offers and campaigns effectively.',
    icon: Megaphone,
  },
  {
    title: 'Brand identity',
    description:
      'I create cohesive visual identities that give businesses a professional, recognizable and memorable presence.',
    icon: Fingerprint,
  },
  {
    title: 'Social media design',
    description:
      'I create consistent and engaging visuals that help brands communicate professionally across social platforms.',
    icon: Smartphone,
  },
  {
    title: 'Design coaching',
    description:
      'I guide aspiring designers who want to improve their skills, understand design more deeply and approach the profession with discipline.',
    icon: GraduationCap,
  },
  {
    title: 'Event design',
    description:
      'I create visual materials for weddings, celebrations, corporate events, religious events and other occasions.',
    icon: CalendarDays,
  },
  {
    title: 'Content & editorial design',
    description:
      'I design ebooks, books and other content materials with a strong focus on structure, readability and visual presentation.',
    icon: BookOpen,
  },
  {
    title: 'Print design',
    description:
      'I design professional materials such as business cards, promotional materials and other brand communication pieces.',
    icon: Printer,
  },
  {
    title: 'Packaging design',
    description:
      'I create packaging that combines strong visual presentation with clear brand communication.',
    icon: Package,
  },
];

const ProcessCard = ({
  step,
  index,
  progress,
  activeIndex,
}) => {
  // Each card moves forward through the stack as scrolling progresses.
  const position = useTransform(
    progress,
    (value) => value * (processSteps.length - 1)
  );

  const y = useTransform(position, (value) => {
    const distance = index - value;

    return distance < 0
      ? distance * 320
      : Math.min(distance, 3) * 16;
  });

  const scale = useTransform(position, (value) => {
    const distance = index - value;

    return distance < 0
      ? 1
      : 1 - Math.min(distance, 3) * 0.045;
  });

  const opacity = useTransform(position, (value) => {
    const distance = index - value;

    if (distance < 0) return Math.max(0, 1 + distance);
    if (distance > 2) return Math.max(0, 3 - distance);

    return 1 - distance * 0.15;
  });

  return (
    <motion.article
      aria-hidden={index !== activeIndex}
      style={{
        y,
        scale,
        opacity,
        zIndex: processSteps.length - index,
      }}
      className="absolute inset-x-0 top-0 origin-top overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-2xl shadow-black/40 sm:rounded-3xl"
    >
      <div className="relative h-32 overflow-hidden sm:h-44 lg:h-64">
        <img
          src={step.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-xl sm:left-5 sm:top-5">
          STEP {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="text-base font-semibold text-white sm:text-xl">
          {step.title}
        </h3>

        <span className="shrink-0 text-xs font-medium text-yellow-400 sm:text-sm">
          {String(index + 1).padStart(2, '0')}
          <span className="text-zinc-500"> / 05</span>
        </span>
      </div>
    </motion.article>
  );
};

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-7 lg:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
        <Icon size={24} aria-hidden="true" />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
        {service.description}
      </p>
    </article>
  );
};

const ServiceTrack = ({
  items,
  direction = 'up',
  paused,
  reduceMotion,
}) => {
  const groupRef = useRef(null);
  const travelRef = useRef(0);
  const y = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (paused || reduceMotion) return;

    const height = groupRef.current?.offsetHeight;
    if (!height) return;

    // Consistent speed regardless of the number of cards.
    travelRef.current =
      (travelRef.current + Math.min(delta, 64) * 0.025) % height;

    y.set(
      direction === 'up'
        ? -travelRef.current
        : travelRef.current - height
    );
  });

  return (
    <div
      className={`min-w-0 ${
        reduceMotion
          ? ''
          : 'h-[480px] overflow-hidden sm:h-[580px] lg:h-[680px]'
      }`}
    >
      <motion.div style={{ y: reduceMotion ? 0 : y }}>
        <div ref={groupRef} className="flex flex-col gap-5 pb-5">
          {items.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Identical second group makes the loop seamless. */}
        {!reduceMotion && (
          <div
            aria-hidden="true"
            className="flex flex-col gap-5 pb-5"
          >
            {items.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Process = () => {
  const processRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [servicesPaused, setServicesPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActiveIndex(
      Math.min(
        processSteps.length - 1,
        Math.round(value * (processSteps.length - 1))
      )
    );
  });

  return (
    <section
      id="services"
      className="relative isolate scroll-mt-28 bg-black font-inter"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-zinc-950" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/5 via-transparent to-blue-500/10" />
      </div>

      {/* ================= PROCESS ================= */}
      <div
        ref={processRef}
        className={reduceMotion ? '' : 'relative h-[450svh]'}
      >
        <div
          className={`px-6 sm:px-8 md:px-10 lg:px-8 ${
            reduceMotion
              ? 'py-16 sm:py-20 lg:py-28'
              : 'sticky top-0 flex h-svh items-center pb-8 pt-28 sm:pb-12 lg:pb-16'
          }`}
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionText
                smallTitle="MY PROCESS"
                title="I don't just design, I think."
                description="Good design should do more than look beautiful — it should capture attention, communicate clearly, create interest and encourage action."
                smallTitleColor="text-blue-400"
                titleColor="text-white"
                descriptionColor="text-zinc-400"
                align="left"
              />

              {!reduceMotion && (
                <div className="mt-5 flex items-center gap-4 lg:mt-8">
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-2"
                  >
                    {processSteps.map((step, index) => (
                      <span
                        key={step.title}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? 'w-8 bg-yellow-400'
                            : 'w-3 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-zinc-500 sm:text-sm">
                    Scroll to explore
                  </span>
                </div>
              )}
            </div>

            {reduceMotion ? (
              // Show all steps without scroll animation when reduced
              // motion is preferred.
              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-900"
                  >
                    <img
                      src={step.image}
                      alt=""
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />

                    <h3 className="p-5 text-base font-semibold text-white">
                      <span className="mr-2 text-yellow-400">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {step.title}
                    </h3>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mx-auto w-full max-w-lg">
                <div className="relative h-[240px] sm:h-[310px] lg:h-[400px]">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={step.title}
                      step={step}
                      index={index}
                      progress={scrollYProgress}
                      activeIndex={activeIndex}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="px-6 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8 md:px-10 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <SectionText
              smallTitle="SERVICES"
              title="Visual solutions for businesses that mean it."
              description="I provide visual design solutions that help businesses communicate professionally and build stronger brands."
              smallTitleColor="text-blue-400"
              titleColor="text-yellow-400"
              descriptionColor="text-zinc-400"
              align="center"
            />

            {!reduceMotion && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setServicesPaused((current) => !current)}
                  aria-pressed={servicesPaused}
                  aria-label="Pause service animations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  {servicesPaused ? (
                    <Play size={16} aria-hidden="true" />
                  ) : (
                    <Pause size={16} aria-hidden="true" />
                  )}

                  {servicesPaused ? 'Resume motion' : 'Pause motion'}
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Mobile: one vertical track with all services */}
            <div className="sm:hidden">
              <ServiceTrack
                items={services}
                paused={servicesPaused}
                reduceMotion={reduceMotion}
              />
            </div>

            {/* Tablet and desktop: two opposing vertical tracks */}
            <div className="hidden grid-cols-2 gap-5 sm:grid lg:gap-6">
              <ServiceTrack
                items={services.filter((_, index) => index % 2 === 0)}
                direction="up"
                paused={servicesPaused}
                reduceMotion={reduceMotion}
              />

              <ServiceTrack
                items={services.filter((_, index) => index % 2 !== 0)}
                direction="down"
                paused={servicesPaused}
                reduceMotion={reduceMotion}
              />
            </div>

            {!reduceMotion && (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent sm:h-16" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-transparent to-transparent sm:h-16" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;