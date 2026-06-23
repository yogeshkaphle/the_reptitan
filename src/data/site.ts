export const SITE = {
  brand: 'The RepTitan',
  coach: 'Sunil Khadka',
  domain: 'thereptitan.com',
  whatsapp: '9779869362060',
  waPrefill: 'Brother, I want to join the bootcamp.',
  instagram: 'https://instagram.com/the_reptitan',
  personalSite: 'https://sunil-khadka.com.np',

  // Permanent program constants — not batch-specific.
  bootcamp: {
    name: 'The 60-Day Pull-Up Bootcamp',
    durationDays: 60,
    dayOfTest: 58,
    dayOfGroupCall: 60,
  },

  // Reveal the "How I Train: A Real Week" section on thank-you when Sunil confirms his week.
  howITrainTableReady: false,

  // Replace with GHL webhook URL when ready.
  formEndpoint: '',
} as const;

// ===================================================================
// FIRST WEEK SAMPLE — set ready: true and fill day content when Sunil
// confirms his Week 1 plan. Until then the whole section stays hidden.
// ===================================================================
export const firstWeek = {
  // Flip to true when all 7 days have real content below.
  ready: false,

  days: [
    { day: 1, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 2, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 3, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 4, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 5, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 6, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
    { day: 7, focus: '[pending]', detail: '[DEV: add from Sunil Week 1]' },
  ],
} as const;

// ===================================================================
// BATCH CONTROL — edit this block to run each batch cycle.
// After editing, commit + push (or edit in GitHub web UI). Site
// updates automatically in ~1 minute via Vercel. Nothing else to do.
// ===================================================================
export const BATCH = {
  // STATUS: the master switch. Allowed values ONLY:
  //   'pre-launch' = taking waitlist signups, batch not open yet
  //   'open'       = enrollment live, people can pay and join
  //   'closed'     = batch full or running, waitlist for next batch
  status: 'pre-launch' as 'pre-launch' | 'open' | 'closed',

  number: 1,                        // which batch (1, 2, 3...). Shows as "Batch 1".
  startDate: '2026-07-20',          // Day 1. Format: YYYY-MM-DD. Used everywhere a date shows.
  foundingDeadline: '2026-07-18',   // founding price ends. Format: YYYY-MM-DD.

  foundingPrice: 2999,              // NPR. Founding/early price.
  standardPrice: 5999,              // NPR. Price after founding ends.
  cap: 30,                          // spots in the founding batch.
} as const;

/** Convert an ISO date string (YYYY-MM-DD) to "Month D" for display. '2026-07-20' → 'July 20' */
export function fmtDate(iso: string): string {
  const [, m, d] = iso.split('-').map(Number);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[m - 1]} ${d}`;
}

// CTA map — all labels, hrefs, and messages derive from BATCH above.
// Flip BATCH.status to change the entire site's CTA behavior.
export const ctaStates = {
  'pre-launch': {
    primaryLabel: 'Join the Waitlist',
    primaryHref:  '/why-youre-stuck?source=waitlist',
    subLine:      `Founding Batch opens ${fmtDate(BATCH.startDate)}. First ${BATCH.cap} only.`,
    whatsappMsg:  `Brother, I want to join the waitlist for Batch ${BATCH.number}.`,
  },
  'open': {
    primaryLabel: `Join Batch ${BATCH.number}`,
    primaryHref:  '#enroll',
    subLine:      `Founding price holds until ${BATCH.cap} fill or ${fmtDate(BATCH.foundingDeadline)}.`,
    whatsappMsg:  'Brother, I want to join the Founding Batch.',
  },
  'closed': {
    primaryLabel: `Join Waitlist for Batch ${BATCH.number + 1}`,
    primaryHref:  `/why-youre-stuck?source=waitlist-b${BATCH.number + 1}`,
    subLine:      `Batch ${BATCH.number} is full. Next Batch opens later.`,
    whatsappMsg:  `Brother, Batch ${BATCH.number} is full. Put me on the Batch ${BATCH.number + 1} waitlist.`,
  },
};

// Convenience: current state's fields. Import this in every call site.
export const currentCTA = ctaStates[BATCH.status];

export function waLink(prefill?: string): string {
  const text = encodeURIComponent(prefill ?? SITE.waPrefill);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
