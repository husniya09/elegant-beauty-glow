const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary section-padding">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in Touch</p>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            Visit us
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Address</p>
              <p className="mt-1 font-heading text-lg text-foreground">
                123 Elegance Avenue, Suite 200<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
              <a href="tel:+15551234567" className="mt-1 block font-heading text-lg text-foreground transition-colors hover:text-primary">
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <a href="mailto:hello@beautifulsalon.com" className="mt-1 block font-heading text-lg text-foreground transition-colors hover:text-primary">
                hello@beautifulsalon.com
              </a>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
              <p className="mt-1 font-heading text-lg text-foreground">
                Mon – Fri: 9:00 AM – 7:00 PM<br />
                Sat: 10:00 AM – 6:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div>
            <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Follow Us</p>
            <div className="mt-4 flex gap-6">
              {["Instagram", "Facebook", "Pinterest"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Send a Message</p>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full resize-none border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-8 py-3 font-body text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
