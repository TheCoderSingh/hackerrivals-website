import jaskaran from '../assets/jaskaran.png';
import matt from '../assets/matt.png';
import milad from '../assets/milad.jpg';
import ade from '../assets/ade.jpg';
import rohan from '../assets/rohan.png';
import join from '../assets/join.jpg';
import neha from '../assets/neha.png';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  isJoinCard?: boolean;
  social?: {
    linkedin?: string;
    github?: string;
    x?: string;
    email?: string;
    portfolio?: string;
  };
  href?: string;
}

export const teamContent = {
  header: {
    title: 'Meet the Team',
    subtitle:
      'The cyberpunk warriors behind Hacker Rivals - passionate developers, designers, and organizers bringing this epic hackathon experience to life.',
  },
};

export const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    name: 'Matt Carolan',
    role: 'Founder',
    description:
      'Master of the digital realm, ensuring all systems run smoothly from registration to tournament brackets.',
    image: matt,
    social: {
      linkedin: 'https://www.linkedin.com/in/matthewcarolan/',
      github: 'https://github.com/matthewcarolan',
      x: 'https://x.com/matthewcarolan',
      email: 'matt@hackerrivals.com ',
    },
  },
  {
    id: 'website-marketing',
    name: 'Jaskaran Singh',
    role: 'Website & Marketing',
    description:
      'Building the front-end of the Hacker Rivals website with a focus on user experience and performance.',
    image: jaskaran,
    social: {
      linkedin: 'https://www.linkedin.com/in/thecodersingh/',
      github: 'https://github.com/thecodersingh',
      x: 'https://x.com/thecodersingh',
      email: 'thecodersingh@gmail.com',
    },
  },
  {
    id: 'contestants',
    name: 'Milad Tajvidi',
    role: 'Contestants',
    description:
      'Managing registrations, ensuring a smooth sign-up process, and handling all participant communications.',
    image: milad,
    social: {
      linkedin: 'https://www.linkedin.com/in/miladtajvidi/',
      github: 'https://github.com/miladtajvidi',
      x: 'https://x.com/miladtajvidi',
      email: 'milad.tajvidi@gmail.com',
    },
  },
  {
    id: 'ui-ux',
    name: 'Neharika Sidda',
    role: 'UI/UX Designer',
    description:
      'Crafting intuitive and engaging user interfaces to enhance the overall experience for our events.',
    image: neha,
    social: {
      linkedin: 'https://www.linkedin.com/in/neharikasidda/',
      portfolio: 'https://neharikasidda.com/',
      x: 'https://x.com/neharikasidda',
      email: 'neharika@hackerrivals.com',
    },
  },
  {
    id: 'venue',
    name: 'Ade Ige',
    role: 'Venue',
    description:
      'Building and nurturing our gaming community, connecting players and fostering the competitive spirit.',
    image: ade,
    social: {
      linkedin: 'https://www.linkedin.com/in/adetokunbo-ige/',
      github: 'https://github.com/adetokunboige',
      x: 'https://x.com/adetokunboige',
      email: 'igeadetokunbo@gmail.com',
    },
  },
  {
    id: 'entertainment',
    name: 'Rohan Dani',
    role: 'Entertainment',
    description:
      'Curating engaging activities and entertainment to keep the energy high throughout the event.',
    image: rohan,
    social: {
      linkedin: 'https://www.linkedin.com/in/rohan-dani/',
      github: 'https://github.com/rohandani',
      x: 'https://x.com/rohandani',
      email: 'rohanhdani@gmail.com',
    },
  },
  {
    id: 'join-team',
    name: 'Could be You',
    role: 'Join Our Team',
    description: 'Join our team and help create amazing gaming experiences!',
    image: join,
    isJoinCard: true,
    href: 'https://tally.so/r/mOvb6Y',
  },
];
