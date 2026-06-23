export const SITE = {
  brand: 'The RepTitan',
  coach: 'Sunil Khadka',
  domain: 'thereptitan.com',
  whatsapp: '9779869362060',
  waPrefill: 'Brother, I want to join the bootcamp.',
  instagram: 'https://instagram.com/the_reptitan',
  personalSite: 'https://sunil-khadka.com.np',

  bootcamp: {
    name: 'The 60-Day Pull-Up Bootcamp',
    durationDays: 60,
    foundingPrice: 2999,
    standardPrice: 5999,
    batchCap: 30,
    launchDate: '2026-07-20',
    batchStartDate: 'July 20',
    foundingEndDate: '2026-07-18',
    dayOfTest: 58,
    dayOfGroupCall: 60,
  },

  // Flip this one value to change the entire page state.
  // Values: "pre-launch" | "open" | "closed"
  batchStatus: 'pre-launch' as 'pre-launch' | 'open' | 'closed',

  // Reveal the "How I Train: A Real Week" section on thank-you when Sunil confirms his week.
  howITrainTableReady: false,

  // Replace with GHL webhook URL when ready.
  formEndpoint: '',
} as const;

// Centralized 3-state CTA map. Hero, Pricing, and the final CTA all read from this.
// Keep copy/href/reassurance consistent across the page by editing here only.
export const CTA_STATES = {
  'pre-launch': {
    copy:        'Join the Waitlist',
    href:        '/why-youre-stuck?source=waitlist',
    reassurance: 'Founding Batch opens July 20. First 30 only.',
  },
  'open': {
    copy:        'Join Batch 1',
    href:        '#enroll',
    reassurance: 'Batch 1 is open. First 30 founding spots.',
  },
  'closed': {
    copy:        'Join Waitlist for Batch 2',
    href:        '/why-youre-stuck?source=waitlist-b2',
    reassurance: 'Batch 1 is full. Join the waitlist for Batch 2.',
  },
} as const;

export function waLink(prefill?: string): string {
  const text = encodeURIComponent(prefill ?? SITE.waPrefill);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
