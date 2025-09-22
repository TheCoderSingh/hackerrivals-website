import { Wifi, CoffeeCup, Camera } from 'iconoir-react';

export const venueContent = {
  header: {
    title: 'Venue & Location',
    subtitle:
      'BCIT Downtown Campus - A cutting-edge facility designed for innovation and collaboration',
  },
  mainInfo: {
    name: 'BCIT Downtown Campus',
    address: {
      street: '555 Seymour Street',
      city: 'Vancouver, BC V6B 3H6',
    },
    event: {
      date: 'Saturday, October 25th, 2025',
      time: '10:00 AM - 5:00 PM',
      afterParty: 'AWS Building Rooftop (5:00 PM+)',
    },
    labels: {
      date: 'Date:',
      time: 'Time:',
      afterParty: 'After Party:',
    },
    transportation: {
      title: 'Getting There',
      transit: {
        title: 'Public Transit',
        description: 'Granville SkyTrain Station (1 block), multiple bus routes on Seymour St',
      },
      parking: {
        title: 'Parking',
        description: 'Street parking and nearby parkades available',
      },
      accessibility: {
        title: 'Accessibility',
        description: 'Fully accessible facility with elevators and ramps',
      },
    },
  },
  levels: {
    level2: {
      title: 'Level 2 - Main Event Floor',
      features: [
        'Main Stage with Professional AV',
        'Seated Audience Area',
        'Large Screen Displays',
        'Food & Beverage Station',
        'Sponsor Booth Area',
      ],
    },
    level5: {
      title: 'Level 5 - Hackathon Hub',
      features: [
        'Hackathon Workspace',
        'Live Stream from Main Stage',
        'Workshop Rooms',
        'Breakout Spaces',
        'Additional Sponsor Booths',
      ],
    },
  },
  amenities: [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Enterprise-grade WiFi and wired connections for all participants',
      colors: {
        background: 'bg-primary/20',
        text: 'text-primary',
      },
    },
    {
      icon: CoffeeCup,
      title: 'Food & Beverages',
      description: 'Complimentary meals, snacks, and beverages throughout the event',
      colors: {
        background: 'bg-secondary/20',
        text: 'text-secondary',
      },
    },
    {
      icon: Camera,
      title: 'Live Streaming',
      description: 'Professional livestream setup with multi-camera coverage',
      colors: {
        background: 'bg-accent/20',
        text: 'text-accent',
      },
    },
  ],
  registration: {
    title: 'Registration Information',
    info: [
      {
        title: 'Ticketing Platform',
        description: 'Tickets available through Lu.ma and other partner platforms',
      },
      {
        title: 'Ticket Purpose',
        description: 'Crowd control and attendee verification - all proceeds go to charity',
      },
      {
        title: "What's Included",
        description: 'Event access, meals, beverages, and all activities',
      },
      {
        title: 'Event Support',
        description: 'Full crew support: security, catering, technical assistance',
      },
    ],
  },
};
