import { getCurrentEventContent } from './eventConfig';

const getEventInfoItems = () => {
  const eventContent = getCurrentEventContent();
  return [
    eventContent.event.date,
    'In-Person Event',
    eventContent.event.prize,
    '1-5 Team Members',
    'All Skill Levels',
  ];
};

export const footerContent = {
  brand: {
    name: 'HACKERRIVALS',
    description:
      'The ultimate eSports hackathon experience, designed for spectators and built for innovation.',
  },
  quickLinks: {
    title: 'Quick Links',
  },
  eventInfo: {
    title: 'Event Details',
    get items() {
      return getEventInfoItems();
    },
  },
  contact: {
    title: 'Contact',
    items: [
      'info@hackerrivals.com',
      'Discord: /hackerrivals',
      'Twitter: @hackerrivals',
      'GitHub: /hackerrivals',
    ],
  },
  bottom: {
    copyright: '© 2025 HackerRivals. All rights reserved.',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Competition Rules', href: '#rules', isModal: true, modalType: 'rules' },
      { name: 'Code of Conduct', href: '#conduct', isModal: true, modalType: 'conduct' },
    ],
  },
  creator: {
    website: {
      text: 'Website created by',
      name: 'Jaskaran Singh',
      url: 'https://thecodersingh.com/',
    },
    design: {
      text: 'UI/UX Design by',
      name: 'Neharika Sidda',
      url: 'https://neharikasidda.com/',
    },
  },
  social: {
    email: 'info@hackerrivals.com',
    links: [
      { name: 'GitHub', href: '#', ariaLabel: 'GitHub' },
      { name: 'Twitter', href: '#', ariaLabel: 'Twitter' },
      { name: 'Discord', href: '#', ariaLabel: 'Discord' },
      { name: 'Email', href: 'mailto:info@hackerrivals.com', ariaLabel: 'Email' },
    ],
  },
};
