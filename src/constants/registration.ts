import { getCurrentEventContent } from './eventConfig';

const currentEvent = getCurrentEventContent();

export const registrationContent = {
  header: {
    title: currentEvent.registration.title,
    subtitle: currentEvent.registration.subtitle,
  },
  options: {
    attendee: {
      title: 'Attendee Experience',
      description:
        'Purchase a ticket to attend Cloud Summit and enjoy the conference experience. Watch the hackathon competition, network with professionals, and learn from industry experts.',
      button: 'Buy Attendee Ticket',
      link: 'https://cloudsummit.ca',
      note: 'Visit www.cloudsummit.ca to learn more about the conference that Hacker Rivals is part of.',
    },
    competitor: {
      title: 'Competitor Application',
      description:
        'Apply to compete in the hackathon for a chance to win the $1000 cash prize. Accepted competitors receive a free one-time ticket code for the event.',
      button: 'Apply to Compete',
      link: '#form',
      note: 'We will notify accepted competitors and send them instructions along with a free one-time ticket code for the event.',
    },
  },
  cloudSummit: {
    title: 'Ready to register?',
    description:
      "Secure your spot by purchasing a Cloud Summit ticket on Luma. After your ticket is confirmed, we'll send you an email to finalize your Hacker Rivals registration.",
    steps: [
      'Purchase a Cloud Summit ticket on Luma.',
      'Check your inbox for the Hacker Rivals confirmation email.',
      'Follow the confirmation email to complete your team registration.',
    ],
    button: currentEvent.registration.buttonText,
    contact: 'Need help? Contact us',
    contactEmail: 'hello@hackerrivals.example',
    note: 'Note: This event is part of Cloud Summit. Your Hacker Rivals registration will be confirmed after completing the Cloud Summit ticket purchase on Luma.',
  },
  form: {
    title: 'Apply to Compete',
    subtitle:
      'Submit your application below to be considered as a competitor. Selected teams will receive a free ticket code and compete for the $1000 cash prize.',
    tallyFormId: 'nr7dgp',
    tallyFormUrl: 'https://tally.so/r/nr7dgp',
    sections: {
      team: {
        title: 'Team Information',
        fields: {
          teamName: {
            label: 'Team Name *',
            placeholder: 'Enter your team name',
          },
          teamSize: {
            label: 'Team Size *',
            options: [
              { value: '', label: 'Select team size' },
              { value: '1', label: '1 Member (Solo)' },
              { value: '2', label: '2 Members' },
              { value: '3', label: '3 Members' },
              { value: '4', label: '4 Members' },
            ],
          },
        },
      },
      leader: {
        title: 'Team Leader Information',
        fields: {
          name: {
            label: 'Full Name *',
            placeholder: 'Enter your full name',
          },
          email: {
            label: 'Email Address *',
            placeholder: 'Enter your email',
          },
          phone: {
            label: 'Phone Number',
            placeholder: 'Enter your phone number',
          },
          experience: {
            label: 'Experience Level *',
            options: [
              { value: '', label: 'Select experience level' },
              { value: 'beginner', label: 'Beginner (0-1 years)' },
              { value: 'intermediate', label: 'Intermediate (2-4 years)' },
              { value: 'advanced', label: 'Advanced (5+ years)' },
            ],
          },
        },
      },
      technical: {
        title: 'Technical Preferences',
        fields: {
          technologies: {
            label: 'Preferred Technologies',
            placeholder: 'e.g., React, Python, AWS, etc.',
          },
          category: {
            label: 'Project Category Interest',
            options: [
              { value: '', label: 'Select category' },
              { value: 'ai-ml', label: 'AI/Machine Learning' },
              { value: 'web-app', label: 'Web Applications' },
              { value: 'mobile', label: 'Mobile Development' },
              { value: 'blockchain', label: 'Blockchain/Web3' },
              { value: 'iot', label: 'IoT/Hardware' },
              { value: 'other', label: 'Other' },
            ],
          },
        },
      },
      motivation: {
        label: 'What motivates you to participate? (Optional)',
        placeholder: 'Tell us what excites you about this hackathon...',
      },
    },
    terms: {
      text: 'I agree to the Terms and Conditions, Privacy Policy, and Competition Rules. I understand that this is an application to compete and selection is not guaranteed.',
      links: {
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
        rules: 'Competition Rules',
      },
    },
    submit: {
      button: 'Submit Application',
      confirmationText: "You'll receive a confirmation email within 24 hours",
    },
  },
};
