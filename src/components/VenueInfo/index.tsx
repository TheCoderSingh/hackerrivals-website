import { Building, MapPin, Car } from 'iconoir-react';
import { venueContent } from '../../constants/venue';

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
                    <p className="font-semibold text-foreground">
                      {venueContent.mainInfo.address.street}
                    </p>
                    <p className="text-muted-foreground">{venueContent.mainInfo.address.city}</p>
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
                  <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{venueContent.mainInfo.labels.time}</strong>{' '}
                    {venueContent.mainInfo.event.time}
                  </p>
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

        {/* Registration & Tickets */}
        <div className="mt-16 text-center bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-2xl mb-4">
            {venueContent.registration.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm max-w-4xl mx-auto">
            {venueContent.registration.info.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;
