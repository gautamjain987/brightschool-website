// Package prices per currency, for one child taking 1:1 classes.
// Group discounts (25% for 2 children, 40% for 3) apply on top, per child.
// Agreed with Gautam on 17 Nov 2026. Bigger packages save more: 16 classes about 9-10%, 48 classes about 17-18%.
export const currencies = {
  AED: { label: 'AED', prices: { 8: 880, 16: 1600, 48: 4320 } },
  SGD: { label: 'SGD', prices: { 8: 360, 16: 650, 48: 1800 } },
  MYR: { label: 'MYR', prices: { 8: 880, 16: 1600, 48: 4320 } },
  SAR: { label: 'SAR', prices: { 8: 880, 16: 1600, 48: 4320 } },
  USD: { label: 'USD', prices: { 8: 240, 16: 430, 48: 1200 } },
} as const;
export type Currency = keyof typeof currencies;
export const defaultCurrency: Currency = 'AED';
export const groupDiscounts = [{ children: 2, percent: 25 }, { children: 3, percent: 40 }];

// Which currency to show, from the visitor's device time zone. Anything else gets USD.
export const timezoneCurrency: Record<string, Currency> = {
  'Asia/Dubai': 'AED',
  'Asia/Singapore': 'SGD',
  'Asia/Kuala_Lumpur': 'MYR',
  'Asia/Kuching': 'MYR',
  'Asia/Riyadh': 'SAR',
};

export const packages = [
  { classes: 8, title: '8 classes', sub: 'One module', points: ['A project at the end of the module', 'A good way to start after the trial'] },
  { classes: 16, title: '16 classes', sub: 'Two modules, usually 2 to 4 months', popular: true, points: ['A certificate after the second module', 'Two finished projects to show'] },
  { classes: 48, title: '48 classes', sub: 'The full course, six modules', points: ['Every certificate in the course', 'The lowest price per class'] },
];
