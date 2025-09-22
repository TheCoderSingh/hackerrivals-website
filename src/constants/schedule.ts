import {
  CoffeeCup,
  Flash,
  Group,
  Presentation,
  Building,
  Gamepad,
  Trophy,
  Rocket,
} from 'iconoir-react';

export const scheduleItems = [
  {
    time: '10:00 AM',
    title: 'Registration Opens',
    description:
      'Welcome, check-in, and sponsor booth exploration for attendees. Note: Competitors are selected before the event day.',
    icon: Group,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    time: '11:00 AM',
    title: 'Competitor Training',
    description: 'Couchbase training session for competitors to prepare for the hackathon',
    icon: Flash,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    time: '12:30 PM',
    title: 'Round 1: Concept Presentation',
    description: 'eSports hackathon begins! Teams present their innovative concepts',
    icon: Gamepad,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    time: '12:30 PM',
    title: 'All Areas Open',
    description: 'Free food & drinks, workshops, breakout rooms, and panels',
    icon: CoffeeCup,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    time: '2:15 PM',
    title: 'Round 2: MVP Knockout',
    description: 'Intense knockout round - only 2 teams advance to the final!',
    icon: Rocket,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    time: '4:00 PM',
    title: 'Final Round: Main Stage',
    description: 'Polished presentations combining concept, architecture & demo',
    icon: Presentation,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    time: '4:30 PM',
    title: 'Wrap-up & Prize Ceremony',
    description:
      'Winner announcement, $1,000 cash prize sponsored by Couchbase, and charity donation',
    icon: Trophy,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    time: '5:00 PM+',
    title: 'VIP After Party',
    description: 'Exclusive rooftop celebration at AWS building',
    icon: Building,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];
