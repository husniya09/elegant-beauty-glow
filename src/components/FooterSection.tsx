const FooterSection = () => {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-heading text-lg font-light tracking-wider text-foreground">
          Beautiful Salon
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Beautiful Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
