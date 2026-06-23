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

export function waLink(prefill?: string): string {
  const text = encodeURIComponent(prefill ?? SITE.waPrefill);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
