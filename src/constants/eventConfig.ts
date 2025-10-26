/**
 * Event Configuration
 *
 * EASY TOGGLE: Change the value below to switch between event states
 * - true  = Active event (show countdown, registration, event details)
 * - false = No event (show "coming soon", email signup forms)
 */

// 🎯 CHANGE THIS VALUE TO TOGGLE EVENT STATE 🎯
export const HAS_ACTIVE_EVENT = false;

// ============================================================================
// Event Content Configuration (No need to modify below this line)
// ============================================================================

export const eventConfig = {
  // Event details (used when HAS_ACTIVE_EVENT is true)
  activeEvent: {
    title: {
      main: 'HACKER',
      highlight: 'RIVALS',
    },
    tagline: {
      prefix: "The World's First",
      highlight: 'eSports style Hackathon',
      suffix: 'Shorter, smarter, and designed for',
      emphasis: 'spectators',
    },
    event: {
      date: 'October 25, 2025',
      location: 'BCIT Downtown Campus • 10am-5pm',
      afterParty: '+ VIP After Party @ AWS Building',
      prize: '$1000 Cash Prize',
    },
    countdown: {
      title: 'Next Event Starts In',
      targetDate: '2025-10-25T13:00:00',
      progressText: 'The countdown to innovation begins now',
    },
    registration: {
      isOpen: true,
      title: 'Join the Battle',
      subtitle:
        'Ready to compete? Register your team and prepare for the ultimate hackathon showdown.',
      buttonText: 'Register for AWS Day',
    },
  },

  // No event state (used when HAS_ACTIVE_EVENT is false)
  noEventState: {
    title: {
      main: 'HACKER',
      highlight: 'RIVALS',
    },
    tagline: {
      prefix: "The World's First",
      highlight: 'eSports style Hackathon',
      suffix: 'Stay tuned for our',
      emphasis: 'next event',
    },
    event: {
      date: 'Next Event Coming Soon',
      location: 'Location TBA',
      afterParty: 'Details will be announced soon',
      prize: 'Prize Pool TBA',
    },
    countdown: {
      title: 'Next Event Announcement',
      message: 'We are working on bringing you the next epic hackathon experience',
      progressText: 'Follow us on social media for the latest updates',
    },
    registration: {
      isOpen: false,
      title: 'Next Event Registration',
      subtitle:
        'Registration is currently closed. Check back soon for our next event announcement.',
      buttonText: 'Check Back Soon',
    },
  },
};

// Helper function to get current event content
export const getCurrentEventContent = () => {
  return HAS_ACTIVE_EVENT ? eventConfig.activeEvent : eventConfig.noEventState;
};

// Helper function to check if event is active
export const isEventActive = () => {
  return HAS_ACTIVE_EVENT;
};
