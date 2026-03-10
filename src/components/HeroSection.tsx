import heroImage from "@/assets/hero-salon.jpg";

interface HeroSectionProps {
  onBookNow: () => void;
}

const HeroSection = ({ onBookNow }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Beautiful Salon interior with warm travertine surfaces and natural light"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 md:px-12 lg:px-24 lg:pb-32">
        <h1 className="heading-display animate-reveal text-5xl text-primary-foreground md:text-7xl lg:text-8xl">
          Beautiful Salon
        </h1>
        <p className="animate-reveal animate-reveal-delay-1 mt-4 max-w-md font-body text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          A sanctuary of refined beauty, where expert artistry meets serene atmosphere.
        </p>
        <button
          onClick={onBookNow}
          className="animate-reveal animate-reveal-delay-2 mt-8 border border-primary-foreground/40 px-8 py-3 font-body text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary-foreground/10"
        >
          Reserve Your Visit
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
