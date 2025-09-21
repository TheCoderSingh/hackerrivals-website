import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-25T13:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">
          Event Starts In
        </h3>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="card-gaming text-center hover:scale-105 transition-all duration-300 animate-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-sm"></div>

              {/* Content */}
              <div className="relative">
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-glow mb-2">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base font-body font-semibold text-muted-foreground uppercase tracking-wider">
                  {unit.label}
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border-2 border-primary opacity-50 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-8">
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-primary animate-pulse"></div>
        </div>
        <p className="text-center font-body text-sm text-muted-foreground mt-2">
          The countdown to innovation begins now
        </p>
      </div>
    </div>
  );
};

export default Countdown;
