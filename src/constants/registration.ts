export const registrationContent = {
  header: {
    title: 'Join the Battle',
    subtitle:
      'Ready to compete? Register your team and prepare for the ultimate hackathon showdown.',
  },
  awsDay: {
    title: 'Ready to register?',
    description:
      "Secure your spot by purchasing an AWS Day ticket on Luma. After your ticket is confirmed, we'll send you an email to finalize your Hacker Rivals registration.",
    steps: [
      'Purchase an AWS Day ticket on Luma.',
      'Check your inbox for the Hacker Rivals confirmation email.',
      'Follow the confirmation email to complete your team registration.',
    ],
    button: 'Register for AWS Day',
    contact: 'Need help? Contact us',
    contactEmail: 'hello@hackerrivals.example',
    note: 'Note: This event is part of AWS Day. Your Hacker Rivals registration will be confirmed after completing the AWS Day ticket purchase on Luma.',
  },
  form: {
    title: 'Complete Your Registration',
    subtitle: 'Fill out the form below to secure your spot in the ultimate hackathon showdown.',
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
      text: 'I agree to the Terms and Conditions and Privacy Policy. I understand that this is a competitive event and all submissions will be evaluated fairly.',
      links: {
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
      },
    },
    submit: {
      button: 'Complete Registration',
      confirmationText: "You'll receive a confirmation email within 24 hours",
    },
  },
};
