
const DevelopmentPreview = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#09090b] flex items-center justify-center">

            {/* Animated Prism Background */}
            <div className="absolute inset-0 overflow-hidden">

                {/* Prism 1 */}
                <div
                    className="
                        absolute
                        -top-[20%]
                        -left-[10%]
                        w-[65vw]
                        h-[65vw]
                        min-w-[500px]
                        min-h-[500px]
                        rounded-full
                        bg-gradient-to-br
                        from-fuchsia-500
                        via-purple-500
                        to-blue-500
                        opacity-50
                        blur-[90px]
                        animate-prism-one
                    "
                />

                {/* Prism 2 */}
                <div
                    className="
                        absolute
                        -bottom-[25%]
                        -right-[10%]
                        w-[70vw]
                        h-[70vw]
                        min-w-[500px]
                        min-h-[500px]
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-400
                        via-blue-500
                        to-violet-600
                        opacity-45
                        blur-[100px]
                        animate-prism-two
                    "
                />

                {/* Prism 3 */}
                <div
                    className="
                        absolute
                        top-[20%]
                        left-[35%]
                        w-[45vw]
                        h-[45vw]
                        min-w-[400px]
                        min-h-[400px]
                        rounded-full
                        bg-gradient-to-br
                        from-pink-400
                        via-orange-400
                        to-yellow-300
                        opacity-30
                        blur-[110px]
                        animate-prism-three
                    "
                />

                {/* Prism 4 */}
                <div
                    className="
                        absolute
                        -bottom-[10%]
                        left-[5%]
                        w-[40vw]
                        h-[40vw]
                        min-w-[350px]
                        min-h-[350px]
                        rounded-full
                        bg-gradient-to-br
                        from-emerald-400
                        via-cyan-400
                        to-blue-500
                        opacity-30
                        blur-[100px]
                        animate-prism-four
                    "
                />

                {/* Dark glass overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Subtle grain */}
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>


            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

                {/* Small Status Label */}
                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        mb-8
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        backdrop-blur-md
                        text-white/75
                        text-xs
                        sm:text-sm
                        tracking-[0.18em]
                        uppercase
                    "
                >
                    <span className="relative flex h-2 w-2">
                        <span
                            className="
                                absolute
                                inline-flex
                                h-full
                                w-full
                                rounded-full
                                bg-emerald-400
                                opacity-75
                                animate-ping
                            "
                        />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>

                    Development in progress
                </div>


                {/* Main Title */}
                <h1
                    className="
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                        font-semibold
                        tracking-[-0.04em]
                        leading-[0.95]
                        text-white/90
                        drop-shadow-2xl
                    "
                >
                    Yusuf Busoyriy
                    <span className="block text-white/55">
                        Portfolio
                    </span>
                </h1>


                {/* Divider */}
                <div className="w-16 h-px bg-white/30 mx-auto my-8" />


                {/* Description */}
                <p
                    className="
                        max-w-xl
                        mx-auto
                        text-base
                        sm:text-lg
                        md:text-xl
                        leading-relaxed
                        text-white/65
                    "
                >
                    Website development in progress by{" "}
                    <a
                        href="https://wa.me/2349033023139"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-cyan-300
                            transition-colors
                            duration-300
                            hover:text-fuchsia-300
                            underline
                            underline-offset-4
                            decoration-white/20
                            hover:decoration-fuchsia-300/60
                        "
                    >
                        Adroit Tech Lab
                    </a>
                </p>


                {/* Bottom micro-copy */}
                <p
                    className="
                        mt-12
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                    "
                >
                    Crafting something worth the wait
                </p>

            </div>


            {/* Edge vignette */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]
                "
            />

            {/* Bottom border glow */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                "
            />
        </section>
    );
};

export default DevelopmentPreview;