import { useState } from "react";

const services = [
  {
    category: "Hair",
    items: [
      { name: "Precision Cut & Style", price: "85", duration: "60 min" },
      { name: "Color & Highlights", price: "150", duration: "120 min" },
      { name: "Balayage", price: "200", duration: "150 min" },
      { name: "Blow Dry & Styling", price: "55", duration: "45 min" },
      { name: "Deep Conditioning Treatment", price: "65", duration: "45 min" },
    ],
  },
  {
    category: "Nails",
    items: [
      { name: "Classic Manicure", price: "40", duration: "30 min" },
      { name: "Gel Manicure", price: "55", duration: "45 min" },
      { name: "Classic Pedicure", price: "50", duration: "45 min" },
      { name: "Spa Pedicure", price: "70", duration: "60 min" },
      { name: "Nail Art (per nail)", price: "10", duration: "15 min" },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "Natural Everyday Look", price: "75", duration: "45 min" },
      { name: "Bridal Makeup", price: "200", duration: "90 min" },
      { name: "Evening & Event", price: "120", duration: "60 min" },
      { name: "Makeup Lesson", price: "150", duration: "90 min" },
    ],
  },
  {
    category: "Skincare",
    items: [
      { name: "Classic Facial", price: "90", duration: "60 min" },
      { name: "Deep Cleansing Facial", price: "120", duration: "75 min" },
      { name: "Anti-Aging Treatment", price: "160", duration: "90 min" },
      { name: "Hydrating Facial", price: "110", duration: "60 min" },
    ],
  },
  {
    category: "Lashes",
    items: [
      { name: "Classic Lash Extensions", price: "120", duration: "90 min" },
      { name: "Volume Lash Extensions", price: "160", duration: "120 min" },
      { name: "Lash Lift & Tint", price: "75", duration: "60 min" },
      { name: "Lash Fill (2 week)", price: "65", duration: "45 min" },
    ],
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Hair");

  const activeServices = services.find((s) => s.category === activeCategory);

  return (
    <section id="services" className="bg-secondary section-padding">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">What We Offer</p>
      <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
        Our services
      </h2>

      {/* Sticky category navigation */}
      <div className="sticky top-[64px] z-30 -mx-6 mt-12 overflow-x-auto bg-secondary px-6 py-4 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
        <div className="flex gap-8">
          {services.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`whitespace-nowrap font-body text-sm tracking-wide transition-colors ${
                activeCategory === s.category
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>
      </div>

      {/* Price list */}
      <div className="mt-8 max-w-2xl">
        {activeServices?.items.map((item, i) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between border-b border-border py-5"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div>
              <p className="font-heading text-lg font-normal text-foreground md:text-xl">
                {item.name}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground">{item.duration}</p>
            </div>
            <p className="font-heading text-lg text-foreground">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
