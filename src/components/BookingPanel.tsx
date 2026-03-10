import { useState } from "react";

const services = [
  "Precision Cut & Style",
  "Color & Highlights",
  "Balayage",
  "Classic Manicure",
  "Gel Manicure",
  "Classic Pedicure",
  "Bridal Makeup",
  "Classic Facial",
  "Classic Lash Extensions",
  "Lash Lift & Tint",
];

interface BookingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPanel = ({ isOpen, onClose }: BookingPanelProps) => {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const handleSubmit = () => {
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setPhone("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fade-backdrop 0.3s ease forwards" }}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col overflow-y-auto bg-background animate-slide-in-right md:w-[60%] lg:w-[50%]">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12">
          <h3 className="font-heading text-2xl font-light text-foreground">Book an Appointment</h3>
          <button onClick={onClose} className="font-body text-sm text-muted-foreground hover:text-foreground">
            Close
          </button>
        </div>

        <div className="flex-1 px-6 py-8 md:px-12">
          {step === 0 && (
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Step 1</p>
              <h4 className="heading-display mt-2 text-2xl text-foreground">Select a service</h4>
              <div className="mt-6 space-y-2">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedService(s); setStep(1); }}
                    className={`block w-full border px-4 py-3 text-left font-body text-sm transition-colors ${
                      selectedService === s
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Step 2</p>
              <h4 className="heading-display mt-2 text-2xl text-foreground">Choose date & time</h4>
              <div className="mt-6">
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="mt-6">
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Time</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`border px-4 py-3 font-body text-sm transition-colors ${
                        selectedTime === t
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => selectedDate && selectedTime && setStep(2)}
                disabled={!selectedDate || !selectedTime}
                className="mt-8 w-full bg-primary py-3 font-body text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Step 3</p>
              <h4 className="heading-display mt-2 text-2xl text-foreground">Your details</h4>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 border border-border p-4">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Summary</p>
                <p className="mt-2 font-heading text-lg text-foreground">{selectedService}</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">{selectedDate} at {selectedTime}</p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!name || !phone}
                className="mt-6 w-full bg-primary py-3 font-body text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Confirm Booking
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h4 className="heading-display text-3xl text-foreground">Thank you, {name}</h4>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
                Your appointment for {selectedService} on {selectedDate} at {selectedTime} has been reserved. 
                We'll send a confirmation to your phone shortly.
              </p>
              <button
                onClick={reset}
                className="mt-8 border border-border px-8 py-3 font-body text-sm text-foreground transition-colors hover:border-primary"
              >
                Close
              </button>
            </div>
          )}

          {/* Back button for steps 1 & 2 */}
          {(step === 1 || step === 2) && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 font-body text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPanel;
