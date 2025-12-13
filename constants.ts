import { Music, Dumbbell, Brain, Calendar, Smile, Zap, Heart, BatteryCharging, User } from 'lucide-react';

export const BRAND_NAME = "Groove & Glow";
export const NEXT_SESSION_DATE = "January 15th";
export const NEXT_SESSION_TIME = "7:00 PM";
export const LOCATION = "The Loft Studio, Downtown";
export const PRICE = "$35";
export const SPOTS_LIMIT = 25;
export const HOST_NAME = "Mel Nalty";
export const HOST_CREDENTIALS = "Certified Trainer & Movement Catalyst";

export const BENEFITS = [
  {
    icon: Music,
    title: "Dance-First Energy",
    description: "Learn fun, repeatable movement patterns set to music that makes you feel something. No awkward choreography. No judgment."
  },
  {
    icon: Dumbbell,
    title: "Strength Built In",
    description: "Simple bodyweight moves—squats, push-ups, core work—layered into the flow. You'll sweat, build strength, and leave feeling accomplished."
  },
  {
    icon: Brain,
    title: "Mental Reset Button",
    description: "One session = mood lift + energy boost + the feeling of 'I did something for me today.' Cardio for your body, therapy for your mind."
  },
  {
    icon: Calendar,
    title: "An Event, Not a Routine",
    description: "This happens once a month, like a live show. You don't go every night—you go when it's on, and it feels special."
  },
  {
    icon: Smile,
    title: "No Pressure",
    description: "Come as you are. Move at your pace. Feel confident in your body, exactly as it is right now. No partner needed."
  }
];

export const AUDIENCE_FIT = {
  YES: [
    "Are 25–55 (any gender, any fitness level)",
    "Used to dance when you were younger and miss it",
    "Want movement that feels like fun, not obligation",
    "Want to feel confident without being 'good at dance'",
    "Want a healthier outlet than a late night out"
  ],
  NO: [
    "Only want strict technique training",
    "Prefer silent, slow, meditative movement",
    "Want a strict weekly routine"
  ]
};

export const FLOW_STEPS = [
  { title: "Warm-Up", description: "Mobility + rhythm. Get your body ready, shake off the day." },
  { title: "Dance Combos", description: "Easy-to-follow patterns built for real adults. Repeatable. Fun." },
  { title: "Sweat Set", description: "Short strength bursts (squats, push-ups, core). Quick but effective." },
  { title: "Main Character Moment", description: "The bring-it-together track. This is where it clicks." },
  { title: "Cool Down", description: "Reset your nervous system. Leave glowing, not drained." }
];

export const OUTCOMES = [
  { icon: Zap, text: "More alive & energized" },
  { icon: BatteryCharging, text: "Sweaty in a satisfying way" },
  { icon: Dumbbell, text: "Stronger (bodyweight built-in)" },
  { icon: Heart, text: "More confident in your body" },
  { icon: User, text: "Like you did something for YOU" }
];

export const FAQS = [
  {
    question: "How hard is it?",
    answer: "Moderate, with options. You'll sweat and feel accomplished, but you won't be gasping for air. Think 'energized,' not 'destroyed.'"
  },
  {
    question: "What should I wear?",
    answer: "Something you can move in comfortably. Sneakers recommended. No special gear needed."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. If you can't make it, let us know 48 hours in advance for a full refund or credit toward the next session."
  },
  {
    question: "How many people per session?",
    answer: `Strictly limited to ${SPOTS_LIMIT} people. We keep it limited so the vibe stays high and the room doesn't feel packed.`
  },
  {
    question: "What music do you use?",
    answer: "A mix of 2000s throwbacks, pop, R&B, and house—music that makes you feel something."
  },
  {
    question: "Can I bring a friend?",
    answer: "Yes! In fact, please do. It's more fun with someone you know."
  }
];