import { Flash, Eye, Gamepad, Trophy } from 'iconoir-react';

export const eSportsContent = {
  header: {
    title: {
      main: "World's First",
      highlight: 'eSports Hackathon',
    },
    description: {
      main: 'Fueling Rivalry, Forging Innovation - built for spectators and designed for maximum engagement',
      dynamic: {
        prefix: 'Fueling ',
        middle: '|',
        suffix: '- built for spectators and designed for maximum engagement',
      },
    },
    highlights: {
      rivalry: 'Rivalry',
      innovation: 'Forging Innovation',
      engagement: 'maximum engagement',
    },
  },
  features: [
    {
      icon: Flash,
      title: 'eSports Energy',
      description:
        'High-octane competitive atmosphere with live audience, professional MC, and real-time excitement.',
      colors: {
        background: 'from-primary/20 to-primary/5',
        border: 'border-primary/30',
        text: 'text-primary',
        gradient: 'from-primary to-transparent',
      },
    },
    {
      icon: Eye,
      title: 'Spectator Friendly',
      description:
        'Designed for audience engagement with live voting, massive screens, and interactive experiences.',
      colors: {
        background: 'from-secondary/20 to-secondary/5',
        border: 'border-secondary/30',
        text: 'text-secondary',
        gradient: 'from-secondary to-transparent',
      },
    },
    {
      icon: Gamepad,
      title: 'Lightning Fast',
      description: 'Maximum 3 hours of intense competition across three electrifying rounds.',
      colors: {
        background: 'from-accent/20 to-accent/5',
        border: 'border-accent/30',
        text: 'text-accent',
        gradient: 'from-accent to-transparent',
      },
    },
  ],
  timeline: {
    title: 'Competition Timeline',
    rounds: [
      {
        number: 1,
        title: 'Concept Presentation',
        time: '12:30 PM - Level 5 Stage',
        description: 'Teams pitch their innovative concepts to judges and live audience.',
        colors: {
          background: 'from-primary to-primary/80',
          text: 'text-primary',
        },
      },
      {
        number: 2,
        title: 'MVP Knockout',
        time: '2:15 PM - Level 5 Stage',
        description: 'Intense elimination round - only 2 teams advance to the final!',
        colors: {
          background: 'from-secondary to-secondary/80',
          text: 'text-secondary',
        },
      },
      {
        number: 3,
        title: 'Championship Final',
        time: '4:00 PM - Main Stage (Level 2)',
        description: 'The ultimate showdown with polished presentations and live demos!',
        colors: {
          background: 'from-accent to-accent/80',
          text: 'text-accent',
        },
        icon: Trophy,
      },
    ],
  },
};
