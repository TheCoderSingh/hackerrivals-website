import { Building, MapPin, Car, Calendar, NavArrowUp } from 'iconoir-react';
import { venueContent } from '../../constants/venue';

const VenueInfo = () => {
  // Helper function to open address in default maps app
  const openInMaps = () => {
    const address = `${venueContent.mainInfo.address.street}, ${venueContent.mainInfo.address.city}`;
    const encodedAddress = encodeURIComponent(address);

    // Try to detect the device and open appropriate maps app
    const userAgent = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      // iOS - try Apple Maps first, fallback to Google Maps
      window.open(`maps://?q=${encodedAddress}`, '_blank');
    } else if (/Android/.test(userAgent)) {
      // Android - open Google Maps
      window.open(`geo:0,0?q=${encodedAddress}`, '_blank');
    } else {
      // Desktop - open Google Maps in browser
      window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
    }
  };

  // Helper function to add event to calendar
  const addToCalendar = () => {
    const startDate = '20251025T100000'; // October 25, 2025, 10:00 AM
    const endDate = '20251025T170000'; // October 25, 2025, 5:00 PM
    const title = encodeURIComponent('Hacker Rivals Competition');
    const location = encodeURIComponent(
      `${venueContent.mainInfo.address.street}, ${venueContent.mainInfo.address.city}`,
    );
    const details = encodeURIComponent("Join us for the world's first eSports style hackathon!");

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&details=${details}`;

    window.open(googleCalendarUrl, '_blank');
  };
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-card via-card/50 to-background"
      id="venue"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-glow mb-6">
            {venueContent.header.title}
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {venueContent.header.subtitle}
          </p>
        </div>

        {/* Main Venue Info */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 flex items-center">
                <Building className="w-8 h-8 text-primary mr-3" />
                {venueContent.mainInfo.name}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <button
                      onClick={openInMaps}
                      className="text-left group cursor-pointer hover:text-primary transition-all duration-300 p-1 -m-1 rounded hover:bg-primary/5"
                      aria-label="Open address in maps"
                      title="Click to open in maps"
                    >
                      <p className="font-semibold text-foreground group-hover:text-primary flex items-center">
                        {venueContent.mainInfo.address.street}
                        <NavArrowUp className="w-4 h-4 ml-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </p>
                      <p className="text-muted-foreground group-hover:text-primary/80">
                        {venueContent.mainInfo.address.city}
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{venueContent.mainInfo.labels.date}</strong>{' '}
                    {venueContent.mainInfo.event.date}
                  </p>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <button
                    onClick={addToCalendar}
                    className="text-left group cursor-pointer hover:text-primary transition-all duration-300 p-1 -m-1 rounded hover:bg-primary/5"
                    aria-label="Add event to calendar"
                    title="Click to add to calendar"
                  >
                    <span className="text-muted-foreground group-hover:text-primary/80">
                      <strong className="text-foreground group-hover:text-primary">
                        {venueContent.mainInfo.labels.time}
                      </strong>{' '}
                      {venueContent.mainInfo.event.time}
                      <NavArrowUp className="w-4 h-4 ml-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline" />
                    </span>
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      {venueContent.mainInfo.labels.afterParty}
                    </strong>{' '}
                    {venueContent.mainInfo.event.afterParty}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                {venueContent.mainInfo.transportation.title}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {venueContent.mainInfo.transportation.transit.title}
                    </p>
                    <p className="text-muted-foreground">
                      {venueContent.mainInfo.transportation.transit.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {venueContent.mainInfo.transportation.parking.title}
                    </p>
                    <p className="text-muted-foreground">
                      {venueContent.mainInfo.transportation.parking.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {venueContent.mainInfo.transportation.accessibility.title}
                    </p>
                    <p className="text-muted-foreground">
                      {venueContent.mainInfo.transportation.accessibility.description}
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
              {venueContent.levels.level2.title}
            </h3>
            <div className="space-y-3">
              {venueContent.levels.level2.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level 5 */}
          <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
            <h3 className="font-heading font-bold text-xl mb-4 text-secondary">
              {venueContent.levels.level5.title}
            </h3>
            <div className="space-y-3">
              {venueContent.levels.level5.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Features & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venueContent.amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 ${amenity.colors.background} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className={`w-8 h-8 ${amenity.colors.text}`} />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{amenity.title}</h4>
                <p className="text-muted-foreground text-sm">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;
