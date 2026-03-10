import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-5 lg:pr-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Philosophy</p>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            Beauty as ritual, not routine
          </h2>
          <div className="mt-8 space-y-4 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              At Beautiful Salon, we believe beauty services are an act of self-care and personal investment. 
              Our team of expert stylists bring decades of combined experience to every appointment.
            </p>
            <p>
              From precision haircuts to restorative skincare treatments, each service is performed with 
              meticulous attention to detail in an atmosphere designed for calm and renewal.
            </p>
            <p>
              We use only premium, ethically sourced products that honor both your beauty and the environment.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <img
            src={aboutImage}
            alt="Serene treatment room at Beautiful Salon"
            className="h-[400px] w-full object-cover lg:h-[600px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
