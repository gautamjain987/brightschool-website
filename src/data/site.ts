// Facts confirmed by Gautam on 11 Nov 2026. Change them here, not in pages.
export const site = {
  name: 'Bright School',
  tagline: 'Live coding and AI classes for ages 6 to 15',
  url: 'https://www.brightschoolonline.com',
  phone: '+971 58 500 7069',
  email: 'gautam.jain987@gmail.com',
  whatsapp: 'https://wa.me/971585007069',
  hours: 'Every day, 10am to 7pm UAE time',
  gaId: 'G-5Q6HHKB74K', // Google Analytics 4; only loads on the live domain
  calLink: 'brightschool/trial',
  calUrl: 'https://cal.com/brightschool/trial',
  classLengthMinutes: 60,
  classesPerModule: 8,
  currency: 'AED',
  pricing: {
    singleClass: 120,
    modulePerChild: [
      { label: '1:1', children: 1, price: 800, discount: 0 },
      { label: 'Group of 2', children: 2, price: 600, discount: 25 },
      { label: 'Group of 3', children: 3, price: 480, discount: 40 },
    ],
  },
  // Gautam, 11 Nov 2026: 500+ children including trial classes.
  facts: [
    { big: 'Since 2020', small: 'Six years of teaching children to code' },
    { big: '500+ children', small: 'Have taken a class with us' },
    { big: '60 minutes', small: 'Live with a teacher, never a recording' },
    { big: '1:1 or small group', small: 'Never more than 3 children per teacher' },
  ],
  // Teachers are added here only once they have agreed to appear on the site.
  team: [
    { name: 'Gautam Jain', role: 'Founder' },
  ],
};
