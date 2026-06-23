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
  batchStatus: 'closed' as 'pre-launch' | 'open' | 'closed',

  // Reveal the "How I Train: A Real Week" section on thank-you when Sunil confirms his week.
  howITrainTableReady: false,

  // Replace with GHL webhook URL when ready.
  formEndpoint: '',
} as const;

// Single-source CTA map. Flip SITE.batchStatus above to change every label, href, and message sitewide.
export const ctaStates = {
  'pre-launch': {
    primaryLabel: 'Join the Waitlist',
    primaryHref:  '/why-youre-stuck?source=waitlist',
    subLine:      'Founding Batch opens July 20. First 30 only.',
    whatsappMsg:  'Brother, I want to join the waitlist for Batch 1.',
  },
  'open': {
    primaryLabel: 'Join Batch 1',
    primaryHref:  '#enroll',
    subLine:      'Founding price holds until 30 fill or July 18.',
    whatsappMsg:  'Brother, I want to join the Founding Batch.',
  },
  'closed': {
    primaryLabel: 'Join Waitlist for Batch 2',
    primaryHref:  '/why-youre-stuck?source=waitlist-b2',
    subLine:      'Batch 1 is full. Next Batch opens later.',
    whatsappMsg:  'Brother, Batch 1 is full. Put me on the Batch 2 waitlist.',
  },
} as const;

// Convenience: current state's fields. Import this in every call site.
export const currentCTA = ctaStates[SITE.batchStatus];

export function waLink(prefill?: string): string {
  const text = encodeURIComponent(prefill ?? SITE.waPrefill);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
