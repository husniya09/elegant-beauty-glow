import { useState } from "react";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import gallerySkincare from "@/assets/gallery-skincare.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import heroSalon from "@/assets/hero-salon.jpg";
import aboutSalon from "@/assets/about-salon.jpg";

const images = [
  { src: galleryHair, alt: "Professional styling tools on linen", height: "h-[350px]" },
  { src: galleryNails, alt: "Elegant nude manicure on natural stone", height: "h-[450px]" },
  { src: gallerySkincare, alt: "Luxury skincare products on travertine shelf", height: "h-[400px]" },
  { src: galleryMakeup, alt: "Rose gold makeup brushes and compacts", height: "h-[350px]" },
  { src: heroSalon, alt: "Beautiful Salon interior", height: "h-[400px]" },
  { src: aboutSalon, alt: "Treatment room atmosphere", height: "h-[450px]" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p>
      <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
        Our work
      </h2>

      {/* Horizontal filmstrip gallery */}
      <div className="mt-12 -mx-6 md:-mx-12 lg:-mx-24">
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 md:px-12 lg:px-24 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`flex-shrink-0 snap-start overflow-hidden ${img.height} w-[280px] md:w-[360px] transition-opacity hover:opacity-90`}
              style={{ marginTop: i % 2 === 0 ? "0" : "40px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90"
          onClick={() => setLightbox(null)}
          style={{ animation: "fade-backdrop 0.3s ease forwards" }}
        >
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 font-body text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
