import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import brandLogo from '../../assets/brand_logo.png';

const linkGroups = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
    ],
  },
  {
    title: 'Other Links',
    links: [
      { label: 'Services', href: '#services' },
      {
        label: 'Start a Project',
        href: 'https://wa.me/2348101785839',
        external: true,
      },
      {
        label: 'Contact Me',
        href: 'https://wa.me/2348101785839',
        external: true,
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/yusufbusoyriy?igsi=MTFmczV1NXJta2doOA%3D%3D',
        external: true,
      },
      {
        label: 'Facebook',
        href: 'https://web.facebook.com/profile.php?id=100087736180182',
        external: true,
      },
      {
        label: 'TikTok',
        href: 'https://vm.tiktok.com/ZS9BDUv1MnMwu-H6Yh8/',
        external: true,
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'WhatsApp',
        href: 'https://wa.me/2348101785839',
        external: true,
      },
      {
        label: 'Email',
        href: 'mailto:yusufbusari55@gmail.com',
      },
    ],
  },
];

const Footer = () => {
  const reduceMotion = useReducedMotion();

  const revealProps = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      ease: 'easeOut',
    },
  };

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-black px-6 pb-8 pt-16 font-inter text-white sm:px-8 sm:pb-10 sm:pt-20 md:px-10 lg:px-8 lg:pt-24"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-linear-to-br from-black via-black/90 to-zinc-950" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[100px] sm:h-112.5 sm:w-112.5" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] sm:h-137.5 sm:w-137.5" />

        <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/5 via-transparent to-blue-500/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* Project invitation */}
        <motion.div
          {...revealProps}
          className="flex max-w-4xl flex-col items-start gap-6 text-left lg:gap-8"
        >
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-yellow-400">Ready</span> to make your
            brand{' '}
            <span className="text-blue-400">stand out?</span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl">
            Let's create something purposeful, professional and memorable
            for your business.
          </p>

          <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-8 py-4 text-center text-sm font-semibold tracking-wide text-black shadow-lg backdrop-blur-xl transition-colors duration-300 hover:bg-white/60 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              EXPLORE MY WORK
            </a>

            <a
              href="https://wa.me/2348101785839"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-blue-400/30 bg-blue-600 px-8 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-600/20 transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              START A PROJECT

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
        </motion.div>

        <hr className="my-12 border-white/10 sm:my-14 lg:my-16" />

        {/* Brand and footer navigation */}
        <motion.div
          {...revealProps}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12"
        >
          <div>
            <a
              href="#home"
              aria-label="Yusuf Busoyriy — Home"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <img
                src={brandLogo}
                alt=""
                loading="lazy"
                className="h-12 w-auto sm:h-14"
              />

              <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Yusuf Busoyriy
              </span>
            </a>

            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-400">
              <li>Brand Designer</li>
              <li>Brand Strategist</li>
              <li>Visual Creative</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-6">
            {linkGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={`Footer ${group.title.toLowerCase()}`}
                className="min-w-0"
              >
                <h3 className="mb-4 text-sm font-semibold text-yellow-400">
                  {group.title}
                </h3>

                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={
                          link.external
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="group inline-flex min-h-11 items-center gap-1.5 rounded-md py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                      >
                        {link.label}

                        {link.external && (
                          <>
                            <ArrowUpRight
                              size={14}
                              aria-hidden="true"
                              className="shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-blue-400"
                            />

                            <span className="sr-only">
                              {' '}(opens in a new tab)
                            </span>
                          </>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </motion.div>

        <hr className="mb-6 mt-10 border-white/10 sm:mt-12 lg:mt-14" />

        {/* Copyright and development credit */}
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-zinc-500 sm:text-sm lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <p>
            &copy; {new Date().getFullYear()} Yusuf Busoyriy Graphix.
            All rights reserved.
          </p>

          <p>
            Designed and Developed by{' '}
            <a
              href="https://wa.me/2349033023139"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-medium text-yellow-400 transition-colors duration-300 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Adroit Tech Lab
              <span className="sr-only">
                {' '}(opens in a new tab)
              </span>
            </a>
            , 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;