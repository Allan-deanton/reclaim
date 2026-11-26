/**
 * ============================================================================
 * RECLAIM — CENTRALIZED SITE CONTENT & EASY-TO-EDIT PLACEHOLDERS
 * ============================================================================
 * Edit site branding, helplines, local clinics, placeholder stories, quotes,
 * and contact details right here without touching layout components.
 */

export const SITE_CONFIG = {
  siteName: 'Reclaim',
  heroHeadline: 'You are not weak. You are stuck. And you can get out.',
  heroSubtext:
    'Addiction rewires your reward system so ordinary discipline feels impossible. This is a straight-talking playbook for young men (15–35) ready to see what is happening, protect their performance, and build a way out.',
  contactEmail: 'kiheheallan@gmail.com',
  helplineNumber: '0791839151',
  regionLabel: 'For Young Men Ages 15–35 · Free & Private Guide',
};

export interface BrainMechanism {
  index: string;
  title: string;
  summary: string;
  detail: string;
}

export const BRAIN_MECHANISMS: BrainMechanism[] = [
  {
    index: '01',
    title: 'Dopamine Spikes & Baseline Crash',
    summary: 'Your brain learns to chase shortcuts instead of real effort.',
    detail:
      'Dopamine is not just pleasure—it is the chemical signal that drives anticipation, focus, and effort. Substances and hyper-stimulating habits flood your reward pathway far beyond normal life rewards. To protect itself, your brain turns down its own dopamine receptors, leaving normal days feeling flat, grey, and unmotivating.',
  },
  {
    index: '02',
    title: 'Tolerance Builds Quietly',
    summary: 'The same dose or session stops doing what it used to.',
    detail:
      'Because your receptors adapt, yesterday’s amount no longer gives the same relief. You need more frequency, stronger substances, higher bets, or more extreme content just to feel normal or numb the discomfort.',
  },
  {
    index: '03',
    title: 'Cravings & Conditioned Cues',
    summary: 'Your environment triggers the urge before you even think.',
    detail:
      'Stress after work, walking past a familiar corner, sitting alone at midnight with your phone, or getting paid—your brain links these cues to instant relief. The urge fires automatically in older survival circuits before your rational thinking kicks in.',
  },
  {
    index: '04',
    title: 'Withdrawal & Why Willpower Alone Fails',
    summary: 'It is a wiring problem, not a moral failure.',
    detail:
      'When you stop, your nervous system protests with restlessness, irritability, brain fog, insomnia, or physical sickness. Trying to white-knuckle a hijacked survival loop with pure willpower while isolated is why smart, capable guys keep slipping. Change happens when you combine honest decisions with structure, environment changes, and real support.',
  },
];

export type AddictionCategory = 'substance' | 'behavior';

export interface AddictionItem {
  id: string;
  name: string;
  category: AddictionCategory;
  shortDesc: string;
  warningSigns: string[];
  performanceImpact: string;
  medicalWarning?: string;
}

export const ADDICTIONS_LIST: AddictionItem[] = [
  // ======================== SUBSTANCES (11) ========================
  {
    id: 'alcohol',
    name: 'Alcohol',
    category: 'substance',
    shortDesc:
      'A central nervous system depressant that lowers inhibition, fragments sleep, and quickly becomes a crutch for stress or social anxiety.',
    warningSigns: [
      'Needing more drinks to feel relaxed or struggling to stop after one or two',
      'Blacking out, missing morning classes or shifts, or hiding how much you drink',
      'Morning shakes, sweating, or anxiety that eases only after drinking again',
    ],
    performanceImpact:
      'Suppresses REM sleep even when it helps you pass out, slows muscle recovery and testosterone balance, drains focus for days, and damages liver and cardiovascular stamina.',
    medicalWarning:
      'Heavy, daily alcohol withdrawal can cause dangerous seizures or delirium tremens. Speak with a doctor before stopping suddenly.',
  },
  {
    id: 'nicotine-vaping',
    name: 'Nicotine & Vaping',
    category: 'substance',
    shortDesc:
      'Fast-acting stimulant delivered via cigarettes, high-strength vapes, or pouches that locks in frequent micro-cravings all day.',
    warningSigns: [
      'Reaching for a vape or pouch within minutes of waking up',
      'Restlessness, irritability, or brain fog if you go a few hours without it',
      'Spending steady cash on pods or packs while hiding usage from family or coaches',
    ],
    performanceImpact:
      'Constricts blood vessels, lowers oxygen delivery during sprints and lifts, fragments concentration between hits, and raises resting heart rate and baseline anxiety.',
  },
  {
    id: 'cannabis',
    name: 'Cannabis (Weed, Concentrates, Edibles)',
    category: 'substance',
    shortDesc:
      'Often dismissed as harmless, high-potency THC products can quietly erode ambition, memory, and emotional resilience when used regularly.',
    warningSigns: [
      'Feeling unable to unwind, eat, or fall asleep without smoking or hitting a cart',
      'Turning down training, hobbies, or friends so you can stay home and get high',
      'Irritability, vivid nightmares, or sweatiness when taking a few days off',
    ],
    performanceImpact:
      'Impairs working memory and reaction time, disrupts deep dream sleep, flattens natural drive for long-term goals, and can trigger paranoia or severe anxiety in heavy users.',
  },
  {
    id: 'opioids',
    name: 'Opioids & Painkillers',
    category: 'substance',
    shortDesc:
      'Prescription pain relievers (like oxycodone, codeine, tramadol) or illicit opioids that numb physical and emotional pain while rapidly creating physical dependence.',
    warningSigns: [
      'Taking pills longer or in larger amounts than prescribed, or seeking pills outside a doctor',
      'Nodding off during the day, pinpoint pupils, or constant flu-like symptoms between uses',
      'Secrecy around money, missing valuables, or pulling away from everyone close to you',
    ],
    performanceImpact:
      'Shuts down natural energy and hormone production, causes severe constipation and fatigue, and carries high risk of fatal overdose—especially if mixed with alcohol or sedatives or bought from unverified sources.',
    medicalWarning:
      'Opioid withdrawal is intense and carries high relapse/overdose risk because tolerance drops fast. Seek medical care and ask about supervised treatment.',
  },
  {
    id: 'stimulants',
    name: 'Stimulants (Cocaine, Meth, Khat & Similar)',
    category: 'substance',
    shortDesc:
      'Drugs that force massive dopamine and adrenaline surges—from cocaine and methamphetamine to chewed khat leaves and synthetic cathinones.',
    warningSigns: [
      'Chasing long bursts of energy followed by multi-day crashes, paranoia, or depression',
      'Jaw clenching, skipped meals, rapid weight loss, or going 24+ hours without sleep',
      'Needing the substance to work double shifts, study, or feel confident socially',
    ],
    performanceImpact:
      'Strains heart valves and blood pressure, burns through deep sleep reserves, triggers erratic decision-making and financial losses, and severely depletes mood chemistry afterward.',
  },
  {
    id: 'sedatives-benzos',
    name: 'Sedatives & Sleeping Pills (Benzodiazepines)',
    category: 'substance',
    shortDesc:
      'Calming medications (like alprazolam, diazepam, or sleep aids) that ease panic short-term but build rapid physical tolerance and rebound anxiety.',
    warningSigns: [
      'Running out of prescriptions early or taking extra pills to cope with normal stress',
      'Slurred speech, memory gaps, or impaired coordination the morning after',
      'Panic spikes, tremors, or racing heart when a dose is delayed',
    ],
    performanceImpact:
      'Blunts mental sharpness, slows athletic reflexes, causes dangerous memory blackouts, and worsens baseline anxiety once tolerance sets in.',
    medicalWarning:
      'Stopping benzodiazepines abruptly can trigger life-threatening seizures. Always taper under direct medical supervision.',
  },
  {
    id: 'prescription-misuse',
    name: 'Prescription Drug Misuse',
    category: 'substance',
    shortDesc:
      'Using someone else’s prescription—or taking ADHD stimulants, cough syrups, or muscle relaxers in ways not directed by a physician.',
    warningSigns: [
      'Borrowing or buying study pills or syrups from classmates or coworkers',
      'Believing you cannot pass exams, train, or socialize without a pill',
      'Combining medications with alcohol or energy drinks to amplify effects',
    ],
    performanceImpact:
      'Creates false confidence followed by severe crashes, masks real sleep or health deficits, and risks dangerous heart rhythm or breathing emergencies.',
  },
  {
    id: 'inhalants',
    name: 'Inhalants',
    category: 'substance',
    shortDesc:
      'Breathing fumes from glues, solvents, aerosol sprays, fuels, or nitrous oxide canisters for a brief, disorienting rush.',
    warningSigns: [
      'Chemical smells on breath or clothing, paint/solvent stains, or hidden canisters',
      'Frequent headaches, nosebleeds, dizziness, or slurred speech',
      'Sudden drops in school grades, coordination, or short-term memory',
    ],
    performanceImpact:
      'Directly starves the brain of oxygen and damages nerve coatings (myelin), risking permanent hearing, memory, liver, or heart-rhythm injury even after brief use.',
  },
  {
    id: 'anabolic-steroids',
    name: 'Anabolic Steroids & Image-Enhancing Drugs',
    category: 'substance',
    shortDesc:
      'Synthetic hormones used to force rapid muscle gain or chase an idealized physique, often while ignoring internal health costs.',
    warningSigns: [
      'Obsessive body checking paired with sudden mood swings or aggression',
      'Fear of stopping cycles because of severe fatigue, low mood, or strength drops',
      'Severe acne, testicular shrinkage, hair loss, or elevated blood pressure',
    ],
    performanceImpact:
      'Can shut down your natural testosterone production for months or permanently, enlarge the heart muscle, strain the liver and kidneys, and cause deep depressive crashes off-cycle.',
  },
  {
    id: 'energy-drinks-caffeine',
    name: 'Energy Drinks & Excess Caffeine',
    category: 'substance',
    shortDesc:
      'Relying on multiple high-caffeine cans, pre-workouts, or pills daily to mask exhaustion rather than fixing sleep and recovery.',
    warningSigns: [
      'Consuming multiple energy drinks or double-scooped pre-workouts every day',
      'Heart palpitations, afternoon crashes, and inability to sleep before 2 AM',
      'Throbbing headaches or irritability if you skip caffeine for one morning',
    ],
    performanceImpact:
      'Destroys deep slow-wave sleep even hours after drinking, creates a loop of artificial alertness and exhaustion, and elevates resting cortisol and blood pressure.',
  },
  {
    id: 'local-substances',
    name: 'Other Locally Misused Substances',
    category: 'substance',
    shortDesc:
      'Regional or unregulated mixes—such as synthetic cannabinoids ("spice"), kratom extracts, codeine mixtures, or locally brewed spirits.',
    warningSigns: [
      'Buying unmarked packets, liquids, or blends whose exact ingredients are unknown',
      'Unpredictable reactions, vomiting, confusion, or severe morning lethargy',
      'Feeling trapped by cheap availability or peer pressure in your neighborhood',
    ],
    performanceImpact:
      'Unregulated potency causes sudden poisoning, kidney or liver strain, unpredictable mental crashes, and severe loss of daily reliability.',
    medicalWarning:
      'Unknown street or homemade mixes carry high poisoning risk. If someone collapses or has trouble breathing, call emergency services immediately.',
  },

  // ======================== BEHAVIORS (10) ========================
  {
    id: 'pornography',
    name: 'Pornography & Compulsive Masturbation',
    category: 'behavior',
    shortDesc:
      'High-speed, endless novelty sexual imagery paired with compulsive masturbation that hijacks reward pathways and becomes an automatic escape from stress, loneliness, or boredom.',
    warningSigns: [
      'Turning to porn and masturbation automatically whenever stressed, lonely, tired, or discouraged',
      'Spending late-night hours chasing stronger novelty while sacrificing sleep, study, or morning energy',
      'The cycle of guilt afterward: swearing it was the last time, deleting accounts, and slipping back within days',
      'Feeling foggy, unmotivated, or anxious around real-world dating and eye contact',
    ],
    performanceImpact:
      'Fragments deep sleep, drains morning drive and mental focus, fuels persistent guilt and self-doubt, numbs natural attraction in real relationships, and can contribute to anxiety-driven performance difficulties with a real partner.',
  },
  {
    id: 'gambling-betting',
    name: 'Gambling & Sports Betting',
    category: 'behavior',
    shortDesc:
      'Betting apps, parlays, slots, or high-risk crypto/day trading disguised as easy money or sports knowledge.',
    warningSigns: [
      'Chasing losses by placing bigger bets to "win back" yesterday’s money',
      'Checking live odds during work, class, or dinner with family',
      'Borrowing money, maxing cards, or lying about account balances',
    ],
    performanceImpact:
      'Turns sports you used to love into constant financial stress, drains savings and emergency cash, wrecks sleep across time zones, and fuels anxiety and secrecy.',
  },
  {
    id: 'video-gaming',
    name: 'Video Gaming',
    category: 'behavior',
    shortDesc:
      'When competitive ranks, loot loops, and online squads stop being recreation and become your primary escape from real-world challenges.',
    warningSigns: [
      'Playing 6+ hours daily while neglecting classes, job applications, or hygiene',
      'Snapping angrily when interrupted mid-match or losing sleep to grind ranks',
      'Feeling empty or restless whenever you step away from the screen',
    ],
    performanceImpact:
      'Replaces slow real-life progress (career skills, strength, relationships) with artificial XP bars, wrecks posture and circadian rhythm, and leaves real goals untouched.',
  },
  {
    id: 'social-media-phone',
    name: 'Social Media & Phone Use',
    category: 'behavior',
    shortDesc:
      'Compulsive checking, comparison, and algorithm feeds engineered to hijack attention hundreds of times a day.',
    warningSigns: [
      'Unlocking your phone without realizing why, even mid-conversation or driving',
      'Measuring your worth against highlight reels of wealth, physiques, or status',
      'Panic or boredom within two minutes if your phone is in another room',
    ],
    performanceImpact:
      'Shatters deep focus into 10-second fragments, lowers reading and study stamina, increases social comparison anxiety, and steals hours of productive evening time.',
  },
  {
    id: 'binge-scrolling',
    name: 'Binge-Watching & Endless Scrolling',
    category: 'behavior',
    shortDesc:
      'Short-form video loops and autoplay series used to numb evening exhaustion until 3 AM.',
    warningSigns: [
      'Saying "one more clip" or "one more episode" until sunrise',
      'Using screens to avoid sitting alone with uncomfortable thoughts or tasks',
      'Waking up groggy every morning despite telling yourself tonight will be different',
    ],
    performanceImpact:
      'Cuts total sleep duration, exposes eyes to bright light that delays melatonin, and creates a fog of chronic procrastination the next day.',
  },
  {
    id: 'compulsive-eating',
    name: 'Compulsive Eating & Sugar',
    category: 'behavior',
    shortDesc:
      'Using hyper-palatable junk food and sugar binges to soothe stress, loneliness, or frustration rather than fueling your body.',
    warningSigns: [
      'Eating rapidly late at night until uncomfortably full, even when not hungry',
      'Hiding wrappers, ordering delivery secretly, or swinging between crash diets and binges',
      'Using heavy sugar or fast food to get a quick mood lift after hard days',
    ],
    performanceImpact:
      'Triggers blood-sugar crashes and afternoon brain fog, slows athletic speed and recovery, disrupts sleep digestion, and hurts confidence and metabolic health.',
  },
  {
    id: 'shopping-spending',
    name: 'Shopping & Compulsive Spending',
    category: 'behavior',
    shortDesc:
      'Buying clothes, sneakers, tech, or micro-transactions for a temporary burst of status or control while finances quietly sink.',
    warningSigns: [
      'Ordering items online late at night and losing interest as soon as the box arrives',
      'Using "Buy Now, Pay Later" apps or credit cards for non-essentials',
      'Avoiding bank statements out of dread or hiding purchases from partners',
    ],
    performanceImpact:
      'Keeps you living paycheck to paycheck, adds chronic debt stress, and steals capital you need for training, education, or independence.',
  },
  {
    id: 'compulsive-exercise',
    name: 'Compulsive Exercise',
    category: 'behavior',
    shortDesc:
      'When training stops building health and becomes an obsessive punishment or anxiety-control ritual that ignores injury and exhaustion.',
    warningSigns: [
      'Training hard through sharp pain, illness, or stress fractures out of panic',
      'Extreme guilt, panic, or self-hatred if you take one planned rest day',
      'Skipping family events, meals, or sleep strictly to burn calories or lift',
    ],
    performanceImpact:
      'Causes chronic overtraining syndrome, drops testosterone and immune resilience, stalls muscle repair, and leads to avoidable long-term joint injuries.',
  },
  {
    id: 'work-addiction',
    name: 'Work Addiction',
    category: 'behavior',
    shortDesc:
      'Hiding behind constant hustle and overwork so you never have to slow down, feel emotions, or risk failing in relationships.',
    warningSigns: [
      'Checking work messages at midnight, on weekends, or during family dinners',
      'Equating your entire worth as a man with hours worked or income earned',
      'Feeling irritable, empty, or restless on days off without a laptop',
    ],
    performanceImpact:
      'Leads to quiet burnout, shallow strategic thinking, broken friendships and marriages, high blood pressure, and neglected physical health.',
  },
  {
    id: 'risky-sexual-behavior',
    name: 'Risky Sexual Behavior',
    category: 'behavior',
    shortDesc:
      'Chasing impulsive hookups, validation, or unsafe encounters to escape loneliness, numb stress, or feel wanted.',
    warningSigns: [
      'Repeatedly putting yourself in unsafe situations despite regret afterward',
      'Ignoring health boundaries, partner commitments, or personal safety',
      'Using constant pursuit of attention to avoid real emotional intimacy',
    ],
    performanceImpact:
      'Creates emotional exhaustion, relationship instability, legal or STI health risks, and distracts heavily from long-term life direction.',
  },
];

export interface PerformanceArea {
  id: string;
  title: string;
  reality: string;
  recoveryGain: string;
}

export const PERFORMANCE_AREAS: PerformanceArea[] = [
  {
    id: 'school-career',
    title: 'School & Career',
    reality:
      'Chronic substance use and compulsive scrolling shred working memory and morning reliability. Missed deadlines, late arrivals, and half-focused hours compound into stalled promotions or dropped semesters.',
    recoveryGain:
      'Clean mornings bring back sustained 90-minute focus blocks and the reliability bosses and professors actually trust.',
  },
  {
    id: 'physical-health',
    title: 'Physical Health & Fitness',
    reality:
      'Alcohol impairs muscle protein synthesis and recovery; nicotine narrows blood vessels; poor nutrition and stimulants strain your heart and kidneys. Training becomes inconsistent or plateaus.',
    recoveryGain:
      'Within weeks off substances, resting heart rate improves, hydration stabilizes, and gym progress responds again.',
  },
  {
    id: 'sleep',
    title: 'Sleep Architecture',
    reality:
      'Alcohol and cannabis may knock you out faster, while late-night screens and caffeine delay sleep onset—yet all of them strip away restorative REM and deep slow-wave sleep.',
    recoveryGain:
      'Natural sleep cycles normalize over 2–6 weeks, restoring real morning energy without needing chemicals to wake up or wind down.',
  },
  {
    id: 'mental-health',
    title: 'Mental Health & Confidence',
    reality:
      'Addiction feeds a loop of anxiety, low mood, and quiet self-contempt. Hiding habits from people you respect erodes self-trust faster than almost anything else.',
    recoveryGain:
      'Keeping small daily promises to yourself rebuilds genuine confidence that does not depend on numbing out.',
  },
  {
    id: 'money',
    title: 'Money & Financial Trajectory',
    reality:
      'Vapes, weekend tabs, delivery binges, parlays, and missed shifts silently burn thousands a year—keeping smart young men stuck financially dependent or in debt.',
    recoveryGain:
      'Cutting one expensive habit often frees up enough monthly cash to pay down debt, invest in skills, or move out.',
  },
  {
    id: 'relationships',
    title: 'Relationships & Family',
    reality:
      'Secrecy, mood swings, broken promises, and emotional unavailability push away good friends, partners, and family members who genuinely want you to win.',
    recoveryGain:
      'Honesty removes the weight of living a double life and lets you show up present for the people who matter.',
  },
  {
    id: 'discipline',
    title: 'Discipline & Focus',
    reality:
      'When your brain gets effortless dopamine spikes on demand, hard worthwhile tasks—studying, building a trade, practicing—feel unbearably slow and frustrating.',
    recoveryGain:
      'Resetting your reward baseline makes ordinary hard work feel engaging and rewarding again.',
  },
  {
    id: 'sports',
    title: 'Sports Performance',
    reality:
      'Dehydration, slowed reaction time, compromised lung capacity, and poor recovery leave you a step slower in the fourth quarter and far more prone to soft-tissue injuries.',
    recoveryGain:
      'Sharper reflexes, deeper lung capacity, steadier composure under pressure, and faster bounce-back between sessions.',
  },
];

export interface QuizQuestion {
  id: string;
  prompt: string;
}

export const SELF_CHECK_QUESTIONS: QuizQuestion[] = [
  {
    id: 'control',
    prompt: 'Have you tried to cut back or quit, only to find yourself back in the habit within days or weeks?',
  },
  {
    id: 'tolerance',
    prompt: 'Do you need more of it—higher amounts, more time, or stronger intensity—to get the same relief?',
  },
  {
    id: 'secrecy',
    prompt: 'Do you hide how often you do it, lie about where your money/time went, or feel protective when asked?',
  },
  {
    id: 'responsibilities',
    prompt: 'Has it caused you to miss workouts, classes, work shifts, or let down someone counting on you?',
  },
  {
    id: 'coping',
    prompt: 'Is it your automatic go-to whenever you feel stressed, angry, lonely, bored, or overwhelmed?',
  },
  {
    id: 'withdrawal',
    prompt: 'When you try to stop for a few days, do you feel unusually irritable, anxious, foggy, restless, or physically unwell?',
  },
  {
    id: 'consequences',
    prompt: 'Have you kept doing it even after seeing clear damage to your sleep, grades, job, health, or bank account?',
  },
  {
    id: 'preoccupation',
    prompt: 'Do you spend noticeable mental energy thinking about the next session, hiding tracks, or recovering afterward?',
  },
];

export interface RoadmapStep {
  number: string;
  title: string;
  summary: string;
  actions: string[];
  isMedicalWarning?: boolean;
}

export const RECOVERY_ROADMAP: RoadmapStep[] = [
  {
    number: '01',
    title: 'Admit It & Make a Clean Decision',
    summary:
      'Stop minimizing it as "just blowing off steam." Naming the pattern honestly is the moment you stop negotiating with it.',
    actions: [
      'Write down in plain words what the habit is costing your sleep, money, training, and self-respect.',
      'Set a clear Day 1 instead of vague promises like "I will cut back soon."',
    ],
  },
  {
    number: '02',
    title: 'Map Your Real Triggers',
    summary:
      'Cravings rarely come out of nowhere. They follow predictable states: HALT (Hungry, Angry, Lonely, Tired) plus specific places, times, and people.',
    actions: [
      'Track the exact hour, emotion, and location of your last three urges or slips.',
      'Spot your high-risk windows—late night alone, Friday payday, after an argument, or right after work.',
    ],
  },
  {
    number: '03',
    title: 'Build Your Corner (Support Team)',
    summary:
      'Secrecy is oxygen for addiction. Doing this completely alone in silence stacks the odds against you.',
    actions: [
      'Tell one steady, trustworthy person—an older brother, close friend, mentor, or parent—what you are cutting out.',
      'Consider a structured peer group (SMART Recovery, AA, NA, GA) where men talk openly without judgment.',
    ],
  },
  {
    number: '04',
    title: 'Seek Professional Help Early',
    summary:
      'Strong men use professionals for torn ligaments and career taxes—your brain chemistry deserves the same smart approach.',
    actions: [
      'Book an honest visit with a primary doctor, licensed counselor, or addiction specialist.',
      'Ask about outpatient therapy (CBT, motivational interviewing) or structured inpatient rehab if home is unsafe.',
    ],
  },
  {
    number: '05',
    title: 'Safe Detox Warning — Do Not Risk Fatal Withdrawal',
    summary:
      'If you drink heavily every day, take benzodiazepines regularly, or use opioids, stopping abruptly without medical care can be dangerous.',
    actions: [
      'Alcohol and benzodiazepine withdrawal can trigger life-threatening seizures and heart instability—always taper or detox under medical supervision.',
      'Opioid withdrawal causes severe physical illness and lowers tolerance rapidly, creating extreme overdose risk if you slip. Talk to a clinic or emergency physician first.',
    ],
    isMedicalWarning: true,
  },
  {
    number: '06',
    title: 'Replace the Habit With Real Structure',
    summary:
      'You cannot leave a vacuum. If you remove a 2-hour nightly habit and stare at the ceiling, boredom will pull you right back.',
    actions: [
      'Lock in anchor habits: consistent wake time, strength training or running, real meals, and hands-on craft or study.',
      'Reconnect with purpose—sports, learning a trade, creative work, community service, or your faith.',
    ],
  },
  {
    number: '07',
    title: 'Use Practical Daily Friction Tools',
    summary:
      'Make the bad option slow and inconvenient, and make the good option effortless.',
    actions: [
      'Urge Surfing: Picture a craving like an ocean wave—it peaks in 15–20 minutes and drops if you breathe through it instead of acting.',
      'The 10-Minute Rule: Never act on an impulse immediately. Set a 10-minute timer, step outside, drink cold water, and move your body.',
      'Burn the bridges: Delete dealer/trigger contacts, uninstall betting and doom-scroll apps, install DNS/content blockers, clear substances from your room, and change your route home.',
    ],
  },
  {
    number: '08',
    title: 'What to Do After a Slip (Relapse Protocol)',
    summary:
      'A slip happens in many recovery journeys. The danger is not the slip itself—it is the shame spiral ("I blew it, might as well keep going").',
    actions: [
      'Step 1 — Stop immediately: Leave the room, dump the rest, close the tab. Do not turn one mistake into a weekend binge.',
      'Step 2 — Change locations: Go somewhere public, hit the gym, or sit with family.',
      'Step 3 — Tell one person within 24 hours: Break the secrecy right away.',
      'Step 4 — Run an honest post-mortem: What trigger hit you, and what friction will you add before tomorrow?',
    ],
  },
];

export interface DailyHabit {
  id: string;
  label: string;
  detail: string;
}

export const DAILY_TOOLKIT_HABITS: DailyHabit[] = [
  {
    id: 'sleep',
    label: '7–8 hours sleep & phone out of bed',
    detail: 'Charge your phone across the room; protect morning willpower.',
  },
  {
    id: 'train',
    label: '30+ minutes hard physical movement',
    detail: 'Lift, run, spar, or walk fast—burn off restless nervous energy.',
  },
  {
    id: 'fuel',
    label: 'Real meals & hydration before afternoon',
    detail: 'Low blood sugar and dehydration disguise themselves as cravings.',
  },
  {
    id: 'checkin',
    label: 'One honest check-in with a friend or mentor',
    detail: 'Even a quick text: "Checking in, solid day so far."',
  },
  {
    id: 'journal',
    label: '5-minute trigger & gratitude note',
    detail: 'Spot what tested you today and one win you earned.',
  },
];

export const MOTIVATIONAL_QUOTES = [
  {
    quote:
      'Discipline is not about hating yourself into perfection. It is about respecting your future self enough to protect today.',
    context: 'Coach note · Daily standard',
  },
  {
    quote:
      'An urge feels permanent when you are inside it. Give it twenty minutes of movement and cold air, and watch it lose its grip.',
    context: 'Urge surfing · Tactical reminder',
  },
  {
    quote:
      'Strength is not pretending you never get tempted. Strength is calling a brother before you act on it.',
    context: 'Brotherhood · Honest accountability',
  },
  {
    quote:
      'You do not have to fix the next five years tonight. Just win the next hour cleanly.',
    context: 'One step · Momentum',
  },
];

export interface StoryPlaceholder {
  id: string;
  initialsAndAge: string;
  focusArea: string;
  before: string;
  turningPoint: string;
  today: string;
}

// EASY TO EDIT: Replace these placeholder cards with real anonymized local stories.
export const STORY_PLACEHOLDERS: StoryPlaceholder[] = [
  {
    id: 'story-1',
    initialsAndAge: 'M., Age 22 · Placeholder Story',
    focusArea: 'Sports Betting & Late-Night Scrolling',
    before:
      'Every paycheck disappeared into live parlays before Sunday night. I stopped showing up to morning lifts and avoided calls from my older brother.',
    turningPoint:
      'I showed him my banking app, put self-exclusion blocks on my accounts, and handed over my spare cash card for 60 days while working with a counselor.',
    today:
      'Paid off my overdraft, sleeping before midnight again, and back training four days a week.',
  },
  {
    id: 'story-2',
    initialsAndAge: 'D., Age 27 · Placeholder Story',
    focusArea: 'Alcohol & Nicotine',
    before:
      'Drinking every night started as a way to switch off after construction shifts, until I needed six drinks just to stop feeling wired.',
    turningPoint:
      'Spoke to a doctor first so I could stop safely, started attending a local evening recovery group twice a week, and swapped the bar for boxing.',
    today:
      'My morning energy came back first. Saved enough in six months to start my trade certification.',
  },
  {
    id: 'story-3',
    initialsAndAge: 'K., Age 18 · Placeholder Story',
    focusArea: 'Pornography & Gaming Escape',
    before:
      'Failing two classes, hiding in my room until 4 AM, feeling numb around teammates and ashamed to look anyone in the eye.',
    turningPoint:
      'Installed DNS filters with a friend holding the passcode, moved my console out of my bedroom, and committed to 30 days of zero late-night screens.',
    today:
      'Grades stabilized, confidence around real people is returning, and bad days no longer send me straight into hiding.',
  },
];

export const HELPING_FRIEND_GUIDE = {
  doList: [
    {
      title: 'Pick a calm, private moment',
      detail: 'Talk one-on-one on a walk or drive—never call him out in front of a group or while he is intoxicated.',
    },
    {
      title: 'Lead with what you notice, not labels',
      detail: 'Say: "Man, you have seemed exhausted and stressed lately, and I miss having you around. What is really going on?"',
    },
    {
      title: 'Listen more than you fix',
      detail: 'Let him speak without interrupting with speeches. Feeling heard lowers his guard faster than advice.',
    },
    {
      title: 'Offer concrete next steps',
      detail: 'Offer to sit beside him while he calls a helpline, drive him to a doctor appointment, or go with him to his first meeting.',
    },
  ],
  avoidList: [
    {
      title: 'Do not shame or mock him',
      detail: 'Comments like "How can you be so weak?" or "Just grow up and stop" drive him deeper into hiding.',
    },
    {
      title: 'Do not threaten in anger',
      detail: 'Set healthy personal boundaries calmly, but avoid empty ultimatums shouted in the middle of an argument.',
    },
    {
      title: 'Do not enable the habit',
      detail: 'Covering up lies at work or lending cash that funds substances or bets keeps the trap running.',
    },
    {
      title: 'Do not try to carry it alone',
      detail: 'If he talks about suicide or is in danger, involve family, professionals, or emergency services immediately.',
    },
  ],
};

// EASY TO EDIT: Replace these placeholder entries with local country/city helplines, clinics, and support centers.
export const SUPPORT_DIRECTORY = {
  emergencyBanner: {
    title: 'Immediate Danger or Medical Emergency',
    message:
      'If you or someone with you is in immediate danger, having thoughts of suicide or self-harm, experiencing an overdose, chest pain, or severe withdrawal (seizures, confusion, inability to stay conscious), call your local emergency number (e.g., 911, 999, 112) or go to the nearest hospital emergency room right now.',
  },
  globalFinderUrl: 'https://findahelpline.com/',
  resources: [
    {
      type: 'Direct Support & Crisis Helpline',
      name: 'Reclaim Support Helpline',
      detail: 'Confidential support by phone or SMS. Reach out if you need someone steady to talk to or help finding local care.',
      contactLabel: 'Call or SMS: 0791839151',
      href: 'tel:0791839151',
    },
    {
      type: 'Local Hospital & Medical Detox Unit',
      name: 'Nearest Accredited Hospital / Detox Unit',
      detail: 'Essential for safe, medically supervised withdrawal from heavy alcohol, benzodiazepines, or opioids. Call our helpline for nearest clinic guidance or go to your closest hospital ER.',
      contactLabel: 'Call 0791839151 for local clinic referral',
      href: 'tel:0791839151',
    },
    {
      type: 'Outpatient Counseling & Rehab Centers',
      name: 'Counseling & Structured Recovery Programs',
      detail: 'Structured individual counseling, outpatient evening programs, or residential recovery care matched to your schedule.',
      contactLabel: 'Email: kiheheallan@gmail.com',
      href: 'mailto:kiheheallan@gmail.com?subject=Recovery%20Support%20%26%20Counseling%20Inquiry',
    },
  ],
  peerGroups: [
    {
      name: 'SMART Recovery',
      focus: 'Science-based, practical self-empowerment tools (CBT-based, non-12-step). In-person and online daily meetings.',
      url: 'https://www.smartrecovery.org/',
    },
    {
      name: 'Alcoholics Anonymous (AA)',
      focus: 'Free peer-led recovery community for anyone wanting to stop drinking. Anonymous local and virtual meetings.',
      url: 'https://www.aa.org/',
    },
    {
      name: 'Narcotics Anonymous (NA)',
      focus: 'Free peer fellowship focused on recovery from all drugs and prescription misuse.',
      url: 'https://www.na.org/',
    },
    {
      name: 'Gamblers Anonymous (GA)',
      focus: 'Peer support for sports betting, casino, trading, and gambling recovery.',
      url: 'https://www.gamblersanonymous.org/',
    },
  ],
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'am-i-addicted',
    question: 'Am I an addict, or am I just overdoing it?',
    answer:
      'You do not need a dramatic label to take action. A simple rule of thumb: if a substance or habit is hurting your sleep, money, training, relationships, or self-respect—and you keep going back even after deciding to stop—it has too much control over you. Fix the pattern now before it costs more.',
  },
  {
    id: 'quit-alone',
    question: 'Can I quit on my own?',
    answer:
      'Many young men break habits like gaming, scrolling, or mild nicotine use using strong structure, environment blocks, and one honest friend. However, for heavy substance dependence—or if you have tried quitting alone repeatedly and keep slipping—bringing in a doctor, therapist, or peer group dramatically increases your odds and keeps detox safe.',
  },
  {
    id: 'rehab-necessary',
    question: 'Is rehab necessary?',
    answer:
      'Not always. Recovery exists on a spectrum: peer meetings, outpatient counseling (a few evenings a week while keeping work or school), medically assisted treatment, or inpatient residential rehab. Inpatient rehab is strongly worth considering if your home environment is full of triggers, if withdrawal is dangerous, or if outpatient attempts have not stuck.',
  },
  {
    id: 'what-if-relapse',
    question: 'What if I relapse?',
    answer:
      'You did not erase your progress—you hit a weak spot in your plan. Stop immediately instead of turning one slip into a week-long binge, get out of the room, tell someone you trust within 24 hours, and adjust your blockers or routine so that specific trigger cannot catch you the same way twice.',
  },
  {
    id: 'privacy-worry',
    question: 'Will people find out if I ask for help?',
    answer:
      'Licensed doctors, therapists, and national helplines are bound by strict medical confidentiality rules. Peer groups like AA, NA, GA, and SMART Recovery are built around anonymity—you only share your first name. And this website does not collect, track, or send anything you click.',
  },
  {
    id: 'how-long',
    question: 'How long does recovery take?',
    answer:
      'Acute physical cravings and sleep disruption often peak in the first 1 to 3 weeks and ease noticeably after 30 to 90 days as your dopamine receptors and habits stabilize. Real change happens in weeks, while staying sharp and protecting new routines is an ongoing lifestyle standard—just like staying fit.',
  },
];
