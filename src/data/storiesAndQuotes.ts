/**
 * ============================================================================
 * STORIES & QUOTATIONS DATA — EASY TO EDIT & REPLACE
 * ============================================================================
 * 1. To replace a sample composite story with a real approved story:
 *    - Change `attributionLabel` to 'Shared with permission'
 *    - Replace `displayName`, `age`, `pullQuote`, and the 5 `sections` fields.
 *    - Never include full names, school names, exact locations, or phone numbers.
 *
 * 2. To swap a story image:
 *    - Replace the `imageSrc` path with your local asset path in `/src/assets/images/`
 *      and update the matching entry in `PHOTO_CREDITS`.
 */

export type StoryFilterCategory =
  | 'all'
  | 'alcohol'
  | 'drugs'
  | 'vaping'
  | 'betting'
  | 'gaming'
  | 'porn'
  | 'phone'
  | 'other';

export const STORY_FILTERS: { id: StoryFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Stories' },
  { id: 'alcohol', label: 'Alcohol' },
  { id: 'drugs', label: 'Drugs' },
  { id: 'vaping', label: 'Vaping' },
  { id: 'betting', label: 'Betting' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'porn', label: 'Porn' },
  { id: 'phone', label: 'Phone' },
  { id: 'other', label: 'Other' },
];

export interface StoryEntry {
  id: string;
  displayName: string;
  age?: number | string;
  addictionLabel: string;
  filterCategories: Exclude<StoryFilterCategory, 'all'>[];
  attributionLabel: 'Shared with permission' | 'Sample story (composite, not a real person)';
  imageSrc: string;
  imageAlt: string;
  pullQuote: string;
  sections: {
    whereItStarted: string;
    breakingPoint: string;
    whatGotMeHelp: string;
    whatChanged: string;
    whatITellOtherGuys: string;
  };
}

export const STORIES_LIST: StoryEntry[] = [
  {
    id: 'story-porn',
    displayName: 'Anonymous',
    addictionLabel: 'Pornography, Masturbation & Loneliness',
    filterCategories: ['porn'],
    attributionLabel: 'Shared with permission',
    imageSrc: '/src/assets/images/story_gym_hands_1795725025638.jpg',
    imageAlt: 'Chalk-dusted hands gripping a steel barbell in quiet morning gym light',
    pullQuote: 'It was never just about lust—loneliness hit hard in quiet rooms, and screens became the only comfort I knew.',
    sections: {
      whereItStarted:
        'For me, pornography and masturbation did not start because life was exciting—they took root when loneliness hit. In quiet evenings when nobody called, when I felt disconnected even around people, or when stress piled up with nowhere to put it, a screen behind a closed door felt like the easiest escape. What started occasionally slowly became a routine I ran to whenever the silence in my room felt too heavy to sit with.',
      breakingPoint:
        'The hardest part was not a single dramatic crash—it was the slow weight of fighting it day after day while pretending everything was fine. After each session, the brief relief disappeared in seconds and left me feeling emptier, heavier, and more isolated than before. I lost sleep, felt drained the next morning, and carried constant guilt that made me pull back even further from friends and real conversations. I swore to myself countless nights that I was finished for good—deleted apps, cleared history, promised I would never go back—only to slip again as soon as loneliness or exhaustion hit at night.',
      whatGotMeHelp:
        'What changed the direction was realizing I was trying to fight loneliness with more isolation. Trying to quit quietly inside my own head kept failing because secrecy feeds the urge. I started opening up honestly instead of hiding in shame, put real boundaries between my phone and my bed at night, and stepped into daily physical routines and real-world support rather than sitting alone late at night with nothing to do.',
      whatChanged:
        'I am still in the fight—this is not a fairytale where urges never knock again. Some nights are still hard when loneliness creeps back in. The difference now is that I recognize the real trigger before it owns me. When I feel isolated or low, I treat it as a signal to move my body, leave the room, or connect with someone real instead of numbing out. Each honest reset builds steadier ground, better morning focus, and real self-respect.',
      whatITellOtherGuys:
        'If you are fighting pornography and masturbation right now while feeling deeply alone, hear this: you are not weak, and you are not the only man carrying this weight. Loneliness makes the habit feel like shelter, yet it only locks you in deeper. Do not keep fighting it in silence—protect your nights, reach out to someone you trust, and keep standing back up.',
    },
  },
  {
    id: 'story-alcohol',
    displayName: 'T.',
    age: 26,
    addictionLabel: 'Alcohol',
    filterCategories: ['alcohol'],
    attributionLabel: 'Sample story (composite, not a real person)',
    imageSrc: '/src/assets/images/story_open_road_1795725024488.jpg',
    imageAlt: 'Empty open road stretching toward an amber sunrise through morning mist',
    pullQuote: 'Relapse taught me where my guard was down, not that I was beyond repair.',
    sections: {
      whereItStarted:
        'I started drinking with older coworkers after long shifts when I was twenty. At first it felt like a normal way to unwind and fit in. Within two years, Friday nights quietly bled into Tuesday and Wednesday evenings alone in my apartment. Whenever work stressed me out or an argument left me tense, a bottle felt like the fastest off-switch.',
      breakingPoint:
        'I told myself I had it handled because I never missed rent. Then I woke up on a Thursday morning with no memory of how I got home, a cracked phone screen, and three missed calls from my younger brother asking if I was okay. Worse, I tried to stop on my own that week, lasted eleven days, and slipped hard the first lonely Saturday night. That second relapse scared me because I realized willpower alone was not holding.',
      whatGotMeHelp:
        'Instead of hiding in embarrassment, I called a nurse line to ask whether stopping abruptly was safe, then walked into a clinic with my brother waiting outside. A doctor checked my liver numbers and connected me with an outpatient counselor and an evening peer group. Having to look real men in the eye once a week removed the secrecy that kept my drinking alive.',
      whatChanged:
        'The first month was restless—poor sleep, sweatiness, and irritability around six every evening. By week six, my resting heart rate dropped and mornings stopped feeling like damage control. I paid off two overdue bills with money I used to spend on weekend tabs and started running three mornings a week.',
      whatITellOtherGuys:
        'Do not wait until you lose your job or wreck a car to take alcohol seriously. If you keep breaking promises to yourself about cutting back, tell one person you trust this week and talk to a doctor before you try to tough out withdrawal alone.',
    },
  },
  {
    id: 'story-betting',
    displayName: 'Sam',
    age: 23,
    addictionLabel: 'Sports Betting',
    filterCategories: ['betting'],
    attributionLabel: 'Sample story (composite, not a real person)',
    imageSrc: '/src/assets/images/story_court_dawn_1795725026501.jpg',
    imageAlt: 'Empty outdoor basketball court illuminated by early morning sunlight',
    pullQuote: 'Chasing one more win always steals tomorrow’s peace to pay for tonight’s noise.',
    sections: {
      whereItStarted:
        'I grew up loving football and basketball, so placing small weekend bets felt harmless—just extra skin in the game. Once live in-play betting apps landed on my phone, it stopped being about sports. I could wager on the next ten minutes from bed at 2 AM while telling myself I had an edge.',
      breakingPoint:
        'One bad Sunday wiped out half my rent money. In panic, I borrowed from a close friend claiming my car broke down, then threw that cash onto an overnight match trying to win back even. Watching that bet lose at three in the morning made my chest ache with shame. I deleted the app, lasted three weeks, and reinstalled it during a boring afternoon shift—losing my next paycheck in forty minutes.',
      whatGotMeHelp:
        'That second loss forced me to get honest. I sat down with my friend, admitted the lie, and handed him my debit card for thirty days while setting up a repayment plan. I placed permanent self-exclusion limits on every betting platform, switched to basic bank alerts, and joined an online Gamblers Anonymous meeting twice a week.',
      whatChanged:
        'Sports became enjoyable again once money was no longer riding on every whistle. My sleep leveled out because I was not refreshing scores across three time zones. Within four months I paid my friend back in full and started putting small automatic transfers into savings every payday.',
      whatITellOtherGuys:
        'You cannot gamble your way out of gambling debt. Delete the apps, add bank friction, and let someone close to you see your account balance for a couple of months until the urge to chase loses its grip.',
    },
  },
  {
    id: 'story-vaping',
    displayName: 'Anonymous',
    age: 19,
    addictionLabel: 'Vaping & Nicotine',
    filterCategories: ['vaping'],
    attributionLabel: 'Sample story (composite, not a real person)',
    imageSrc: '/src/assets/images/story_dawn_runner_1795725025322.jpg',
    imageAlt: 'Distant silhouette of a runner on a misty waterfront path at sunrise',
    pullQuote: 'The day I put the vape down and spoke honestly to one teammate, the panic eased.',
    sections: {
      whereItStarted:
        'Everyone passed flavored vapes around in high school locker rooms, and I figured it was nothing compared to cigarettes. By college, a high-strength disposable lived under my pillow. I was taking hits before getting out of bed, between classes, and in bathroom stalls whenever I felt anxious.',
      breakingPoint:
        'During preseason conditioning, my lungs burned twenty minutes earlier than teammates I used to outrun. Worse, if my battery died during a long lab, my hands shook and I snapped at people for no reason. I threw three vapes in public trash cans over two months—only to buy another one at a corner shop two days later.',
      whatGotMeHelp:
        'I finally told a teammate I respected that I was embarrassed by how hooked I was on nicotine. We agreed to train together every morning and check in before any convenience store run. I used nicotine gum tapered through our campus health clinic instead of cold-turkey white-knuckling during midterms, and swapped morning puffs for ice water and five minutes outside.',
      whatChanged:
        'The brain fog and short fuse lasted about ten days, then faded fast. Six weeks later, my cardio times dropped back to my best marks and my resting anxiety fell sharply because I was no longer riding constant chemical highs and crashes every twenty minutes.',
      whatITellOtherGuys:
        'Nicotine lies to you—it creates the very restlessness it claims to calm. Ditch the disposable pods, tell a training partner, and give your lungs three honest weeks to prove how much sharper you feel.',
    },
  },
  {
    id: 'story-drugs',
    displayName: 'D.',
    age: 29,
    addictionLabel: 'Prescription & Stimulant Drugs',
    filterCategories: ['drugs'],
    attributionLabel: 'Sample story (composite, not a real person)',
    imageSrc: '/src/assets/images/story_mountain_ridge_1795725025769.jpg',
    imageAlt: 'Dark slate mountain ridge rising through morning valley mist into amber sunrise',
    pullQuote: 'Morning energy did not return overnight—it came back after protecting sleep and showing up.',
    sections: {
      whereItStarted:
        'It began with borrowed study pills during finals and later turned into chasing stimulants to survive double shifts in logistics. I liked feeling sharp and tireless for hours at a time. Nobody around me noticed at first because I looked productive on paper.',
      breakingPoint:
        'The crash after each run grew darker—two days of empty exhaustion, paranoia, skipped meals, and racing heartbeats at midnight. I tried walking away on my own after promising my mother I was just working too hard, but within three weeks of high pressure at work I went right back to someone who could get me pills. Losing twenty pounds and snapping at everyone who cared was my wake-up call.',
      whatGotMeHelp:
        'I booked an honest appointment with a primary care doctor and admitted what I had been taking. Because stimulants had wrecked my sleep and mood baseline, we mapped a safe recovery plan alongside weekly cognitive behavioral therapy. I blocked old contacts, changed my commute so I avoided familiar spots, and started attending Narcotics Anonymous meetings.',
      whatChanged:
        'The first month felt flat and heavy while my brain recalibrated. Around day forty-five, natural appetite and real laughter started returning. I asked my supervisor for steady daytime hours, rebuilt trust slowly with my family, and learned how to rest without feeling guilty.',
      whatITellOtherGuys:
        'Pills and stimulants are borrowed energy with brutal interest. If you feel trapped in a cycle of crashes and secrecy, tell a doctor—confidential care exists specifically for guys in your exact spot.',
    },
  },
  {
    id: 'story-phone-gaming-other',
    displayName: 'Anonymous',
    age: 17,
    addictionLabel: 'Phone Scrolling, Gaming & Energy Drinks',
    filterCategories: ['gaming', 'phone', 'other'],
    attributionLabel: 'Sample story (composite, not a real person)',
    imageSrc: '/src/assets/images/story_desk_notebook_1795725026888.jpg',
    imageAlt: 'Wooden desk in quiet morning window light with an open notebook, coffee mug, and phone face-down',
    pullQuote: 'I thought I was lazy until I saw how six hours of feeds, matches, and caffeine were frying my focus.',
    sections: {
      whereItStarted:
        'It crept up slowly—checking short-form clips before school, queuing late-night online games until 2 AM, and telling myself just one more match would help me unwind. To survive morning classes, I started grabbing two strong energy drinks every day before first period.',
      breakingPoint:
        'My grades slid, my heart raced during exams, and I could not read two pages of a textbook without reaching for my phone. When my coach benched me for looking sluggish at practice, I got angry at everyone else before finally looking at my screen-time report: nearly seven hours a day.',
      whatGotMeHelp:
        'My older cousin sat down with me and challenged me to a 30-day reset. We moved my console out of my bedroom, put grayscale mode and hard daily app limits on my phone, bought a cheap physical alarm clock so my phone stayed charging in the kitchen overnight, and cut out energy drinks completely.',
      whatChanged:
        'The first week was painfully boring—I did not know what to do with quiet evenings. By week three, I slept through the night without racing thoughts, my attention span in class returned, and I earned my starting spot back on the team.',
      whatITellOtherGuys:
        'Do not call yourself lazy if you are sleeping four hours behind a glowing screen and running on synthetic caffeine. Put the phone outside your bedroom tonight and watch what happens in fourteen days.',
    },
  },
];

export interface PhotoCredit {
  slot: string;
  subject: string;
  credit: string;
}

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    slot: 'Hero Backdrop',
    subject: 'Waterfront pier at dawn (anonymous rear silhouette)',
    credit: 'Custom Editorial Asset · Replaceable in src/App.tsx',
  },
  {
    slot: 'Understand Section',
    subject: 'Morning gym bench preparation',
    credit: 'Custom Editorial Asset · Replaceable in src/App.tsx',
  },
  {
    slot: 'Stories Card 01 (Alcohol)',
    subject: 'Empty asphalt highway at sunrise',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
  {
    slot: 'Stories Card 02 (Betting)',
    subject: 'Outdoor basketball court at dawn',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
  {
    slot: 'Stories Card 03 (Vaping)',
    subject: 'Distant waterfront runner silhouette at sunrise',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
  {
    slot: 'Stories Card 04 (Drugs)',
    subject: 'Mountain ridge above morning mist',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
  {
    slot: 'Stories Card 05 (Pornography & Compulsive Masturbation)',
    subject: 'Chalked hands gripping steel barbell',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
  {
    slot: 'Stories Card 06 (Phone, Gaming & Other)',
    subject: 'Morning desk with open journal and phone face-down',
    credit: 'Custom Editorial Asset · Replaceable in src/data/storiesAndQuotes.ts',
  },
];

export interface QuotationItem {
  id: string;
  quote: string;
  attribution: string;
  sourceNote: string;
}

export const QUOTATIONS_LIST: QuotationItem[] = [
  {
    id: 'q-hari',
    quote: 'The opposite of addiction is not sobriety. The opposite of addiction is connection.',
    attribution: 'Johann Hari',
    sourceNote: 'Public TED Talk (2015) · Exact quote',
  },
  {
    id: 'q-angelou',
    quote: 'You may encounter many defeats, but you must not be defeated.',
    attribution: 'Maya Angelou',
    sourceNote: 'Publicly documented quote',
  },
  {
    id: 'q-story-t',
    quote: 'Relapse taught me where my guard was down, not that I was beyond repair.',
    attribution: 'T., Age 26',
    sourceNote: 'Composite story quote · Alcohol recovery',
  },
  {
    id: 'q-rise-1',
    quote: 'Asking for help is not weakness; pretending you are fine while sinking in private is.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
  {
    id: 'q-mlk-paraphrase',
    quote: 'You do not have to see the entire road ahead—only take the next honest step in front of you today.',
    attribution: 'Paraphrase of Dr. Martin Luther King Jr.',
    sourceNote: 'Labeled paraphrase on taking the first step',
  },
  {
    id: 'q-story-vape',
    quote: 'The day I put the vape down and spoke honestly to one teammate, the panic eased.',
    attribution: 'Anonymous, Age 19',
    sourceNote: 'Composite story quote · Nicotine recovery',
  },
  {
    id: 'q-rise-2',
    quote: 'Recovery is rarely a straight line upward; real change happens when you refuse to let one bad night turn into a lost month.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
  {
    id: 'q-story-bet',
    quote: 'Chasing one more win always steals tomorrow’s peace to pay for tonight’s noise.',
    attribution: 'Sam, Age 23',
    sourceNote: 'Composite story quote · Sports betting recovery',
  },
  {
    id: 'q-peer-paraphrase',
    quote: 'Strength is not never falling; strength is getting honest fast when you slip and refusing to hide in shame.',
    attribution: 'Peer Recovery Wisdom',
    sourceNote: 'Labeled paraphrase from community recovery groups',
  },
  {
    id: 'q-rise-3',
    quote: 'Your brain learned a shortcut to numb pain; with time, structure, and real effort, it can relearn how to live awake.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
  {
    id: 'q-story-drugs',
    quote: 'Morning energy did not return overnight—it came back quietly after protecting sleep and showing up.',
    attribution: 'D., Age 29',
    sourceNote: 'Composite story quote · Drug recovery',
  },
  {
    id: 'q-rise-4',
    quote: 'You are not broken beyond fixing. You are carrying too much alone, and there is a clear way out.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
  {
    id: 'q-story-porn',
    quote: 'Loneliness makes the habit feel like shelter, yet it only locks you in deeper. Do not keep fighting it in silence.',
    attribution: 'Anonymous',
    sourceNote: 'Shared story quote · Pornography, masturbation & loneliness',
  },
  {
    id: 'q-rise-5',
    quote: 'Win the night by protecting your bedroom: leave the phone outside the door, and morning self-respect takes care of itself.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
  {
    id: 'q-rise-6',
    quote: 'Still fighting does not mean failing. As long as you refuse to surrender to the habit, you are still in the fight.',
    attribution: 'Rise Again',
    sourceNote: 'Original line',
  },
];
