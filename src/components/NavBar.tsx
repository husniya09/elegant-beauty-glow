import { useState } from "react";

interface NavBarProps {
  onBookNow: () => void;
}

const NavBar = ({ onBookNow }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <button onClick={() => scrollTo("hero")} className="font-heading text-2xl font-light tracking-wider text-foreground">
          Beautiful Salon
        </button>

        {/* Desktop nav - always visible per anti-pattern rule */}
        <div className="hidden items-center gap-8 md:flex">
          {["About", "Services", "Gallery", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </button>
          ))}
          <button
            onClick={onBookNow}
            className="bg-primary px-6 py-2.5 font-body text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {["About", "Services", "Gallery", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-body text-sm text-muted-foreground"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => { onBookNow(); setMobileOpen(false); }}
            className="bg-primary px-6 py-2.5 font-body text-sm text-primary-foreground"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
