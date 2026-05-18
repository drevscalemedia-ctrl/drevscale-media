export const BRAND = {
  name: "Drevscale Media",
  owner: "Carter Drevs",
  phone: "(572) 272-7819",
  phoneHref: "tel:5722727819",
  email: "drevscalemedia@gmail.com",
  location: "Fountain Hills, AZ",
  serviceArea: "Fountain Hills, Scottsdale & the East Valley",
  coordinates: { lat: 33.6064, lng: -111.7175 },
  tagline: "More Leads. More Customers.",
  scarcity: "Currently accepting 3 new clients this quarter",
};

export const PRICING = {
  fbAds: {
    setup: "$250",
    managementRange: "$400–$650/mo",
    managementLow: 400,
    managementHigh: 650,
    adSpendRange: "$400–$500/mo",
    adSpendMin: 400,
    totalRange: "~$800–$1,100/mo",
  },
  web: {
    build: "Project-based",
    hostingRange: "$50–$80/mo",
    hostingLow: 50,
    hostingHigh: 80,
    domain: "~$10.46/yr",
  },
};

export const INDUSTRIES = [
  { name: "Dental Practices", icon: "🦷", stat: "Avg. 12 new patient leads/mo", cpl: 35 },
  { name: "Med Spas", icon: "✨", stat: "Avg. 18 appointment leads/mo", cpl: 45 },
  { name: "Gyms & Fitness", icon: "💪", stat: "Avg. 25 trial sign-up leads/mo", cpl: 22 },
  { name: "HVAC & Home Services", icon: "🔧", stat: "Avg. 20 service call leads/mo", cpl: 18 },
  { name: "Restaurants", icon: "🍽️", stat: "Avg. 200+ event RSVPs/mo", cpl: 8 },
  { name: "Chiropractic", icon: "🦴", stat: "Avg. 15 new patient leads/mo", cpl: 30 },
  { name: "Real Estate", icon: "🏠", stat: "Avg. 8 buyer/seller leads/mo", cpl: 55 },
  { name: "Auto Repair", icon: "🚗", stat: "Avg. 22 service appointment leads/mo", cpl: 20 },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Strategy Call",
    subtitle: "Free · 20 minutes",
    desc: "We talk about your business, your goals, and what's been tried before. No pitch — just an honest look at what's possible.",
  },
  {
    step: "02",
    title: "Setup & Build",
    subtitle: "48 hours",
    desc: "Pixel installation, campaign architecture, audience research, and ad creative. Everything built before a dollar is spent.",
  },
  {
    step: "03",
    title: "Launch",
    subtitle: "Go live",
    desc: "Campaigns go live. We monitor performance daily in the first two weeks and make fast adjustments to get lead flow moving.",
  },
  {
    step: "04",
    title: "Optimize Monthly",
    subtitle: "Ongoing",
    desc: "Monthly reports, ongoing optimization, and direct access to Carter. Your campaigns improve every month.",
  },
];

export const FACEBOOK_ADS_INCLUDES = [
  { title: "Campaign Setup", desc: "Full pixel installation, account audit, campaign architecture" },
  { title: "Custom Audience Targeting", desc: "Local radius, interest, demographic, and lookalike audiences" },
  { title: "Ad Creative Direction", desc: "Headlines, body copy, and creative strategy for every ad" },
  { title: "Conversion Tracking", desc: "Pixel setup and event tracking so every lead is counted" },
  { title: "Ongoing Optimization", desc: "Continuous A/B testing and bid adjustments week over week" },
  { title: "Monthly Reports", desc: "Leads, cost per lead, ad spend, ROAS — plain English" },
];

export const WEB_DESIGN_INCLUDES = [
  { title: "Mobile-First Design", desc: "Built for iPhone first — that's how prospects will find you" },
  { title: "Fast Load Times", desc: "Optimized for under 3 seconds. Slow sites lose customers." },
  { title: "SEO Optimized", desc: "Local keywords baked in so you show up when people search" },
  { title: "Contact Forms", desc: "Lead capture that sends directly to your email or phone" },
  { title: "Monthly Maintenance", desc: "Hosting, updates, and uptime monitoring included" },
  { title: "Conversion CTAs", desc: "Every page has a clear next step — no dead ends" },
];

export const FAQS = [
  {
    q: "How much does it cost total?",
    a: "For Facebook Ads, expect to invest around $800–$1,100/month total — that's our $400–$650 management fee plus your ad spend paid directly to Facebook. Website hosting is $50–$80/month after the one-time build fee.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see initial lead flow within the first 2 weeks of launch. Month 2 is usually when things really hit their stride as we've optimized based on real performance data.",
  },
  {
    q: "Do I need a big ad budget?",
    a: "We recommend a minimum of $400–$500/month in ad spend. Below that, Facebook doesn't have enough data to optimize effectively and results suffer.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. We operate month-to-month. We want to keep your business because we're delivering results — not because you're locked in.",
  },
  {
    q: "What happens if I don't get results?",
    a: "We actively adjust strategy. No excuses, no waiting — if lead flow drops, we're already on it. You'll always know what's happening with your campaigns.",
  },
  {
    q: "Do I need a website to run Facebook ads?",
    a: "Not necessarily — we can send traffic to a landing page or Messenger funnel. But a good website dramatically improves conversion, especially after a cold call prospect Googles you.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Carter got our phones ringing within the first two weeks. We had tried Facebook ads on our own for months with nothing. He had us generating leads before the end of the first month.",
    name: "[CLIENT NAME]",
    business: "[HVAC Company], Fountain Hills AZ",
    metric: "34 leads in 30 days",
  },
  {
    quote: "The reporting is what got me. I can see exactly where every dollar went and what it produced. No fluff, no spin — just real numbers. That's rare.",
    name: "[CLIENT NAME]",
    business: "[Med Spa], Scottsdale AZ",
    metric: "$14.50 avg cost per lead",
  },
  {
    quote: "I cold-called Carter after seeing a competitor of mine running ads I knew he built. Best decision I made for my business this year.",
    name: "[CLIENT NAME]",
    business: "[Dental Practice], Scottsdale AZ",
    metric: "12 new patients/month",
  },
];

export const CASE_STUDIES = [
  {
    industry: "HVAC Company",
    location: "Fountain Hills, AZ",
    before: { leads: 3, cpl: 180, roas: 0.8 },
    after: { leads: 34, cpl: 8.2, roas: 4.1 },
    adSpend: 280,
    timeframe: "30 days",
    summary: "Targeted homeowners within 15 miles during summer peak season. Campaign focused on AC tune-up offer, driving calls and form submissions.",
    quote: "We had more leads in the first month than the previous 6 combined.",
  },
  {
    industry: "Med Spa / Aesthetics",
    location: "Scottsdale, AZ",
    before: { leads: 5, cpl: 95, roas: 1.2 },
    after: { leads: 22, cpl: 14.5, roas: 3.8 },
    adSpend: 320,
    timeframe: "30 days",
    summary: "Retargeting campaign combined with interest-based targeting for women 28–55 in north Scottsdale. Promo offer drove direct booking page visits.",
    quote: "The quality of leads was just as impressive as the volume.",
  },
  {
    industry: "Local Restaurant",
    location: "Fountain Hills, AZ",
    before: { leads: 40, cpl: 18, roas: 1.5 },
    after: { leads: 400, cpl: 1.8, roas: 5.2 },
    adSpend: 720,
    timeframe: "30 days",
    summary: "Event-based campaign for a Friday night special. Reached locals via geo-fencing and lookalike audiences built from existing Facebook followers.",
    quote: "400+ RSVPs and we had to stop taking reservations. Carter delivered.",
  },
];
