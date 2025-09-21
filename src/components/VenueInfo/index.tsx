import { Building, MapPin, Wifi, CoffeeCup, Car, Camera } from 'iconoir-react';

const VenueInfo = () => {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-card via-card/50 to-background"
      id="venue"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-glow mb-6">
            Venue & <span className="text-primary animate-pulse">Location</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            BCIT Downtown Campus - A cutting-edge facility designed for innovation and collaboration
          </p>
        </div>

        {/* Main Venue Info */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 flex items-center">
                <Building className="w-8 h-8 text-primary mr-3" />
                BCIT Downtown Campus
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">555 Seymour Street</p>
                    <p className="text-muted-foreground">Vancouver, BC V6B 3H6</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Date:</strong> Saturday, October 25th, 2025
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Time:</strong> 10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">After Party:</strong> AWS Building Rooftop
                    (5:00 PM+)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl mb-4">Getting There</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Public Transit</p>
                    <p className="text-muted-foreground">
                      Granville SkyTrain Station (1 block), multiple bus routes on Seymour St
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Parking</p>
                    <p className="text-muted-foreground">
                      Street parking and nearby parkades available
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Accessibility</p>
                    <p className="text-muted-foreground">
                      Fully accessible facility with elevators and ramps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Level Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Level 2 */}
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
            <h3 className="font-heading font-bold text-xl mb-4 text-primary">
              Level 2 - Main Event Floor
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Main Stage with Professional AV</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Seated Audience Area</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Large Screen Displays</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Food & Beverage Station</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Sponsor Booth Area</span>
              </div>
            </div>
          </div>

          {/* Level 5 */}
          <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
            <h3 className="font-heading font-bold text-xl mb-4 text-secondary">
              Level 5 - Hackathon Hub
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Hackathon Workspace</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Live Stream from Main Stage</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Workshop Rooms</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Breakout Spaces</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span className="text-muted-foreground">Additional Sponsor Booths</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Features & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">High-Speed Internet</h4>
            <p className="text-muted-foreground text-sm">
              Enterprise-grade WiFi and wired connections for all participants
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CoffeeCup className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">Food & Beverages</h4>
            <p className="text-muted-foreground text-sm">
              Complimentary meals, snacks, and beverages throughout the event
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">Live Streaming</h4>
            <p className="text-muted-foreground text-sm">
              Professional livestream setup with multi-camera coverage
            </p>
          </div>
        </div>

        {/* Registration & Tickets */}
        <div className="mt-16 text-center bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-2xl mb-4">Registration Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Ticketing Platform</h4>
              <p className="text-muted-foreground">
                Tickets available through Lu.ma and other partner platforms
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Ticket Purpose</h4>
              <p className="text-muted-foreground">
                Crowd control and attendee verification - all proceeds go to charity
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">What's Included</h4>
              <p className="text-muted-foreground">
                Event access, meals, beverages, and all activities
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Event Support</h4>
              <p className="text-muted-foreground">
                Full crew support: security, catering, technical assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;
