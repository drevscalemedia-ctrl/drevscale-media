export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  location: string;
  industry: string;
  avatarColor: string;
}

export const TESTIMONIALS_WALL: Testimonial[] = [
  {
    quote: "booked 14 new patient consults in the first 3 weeks, my front desk is finally busy lol",
    name: "Dr. Marisol Reyes",
    business: "Sonoran Smile Dental",
    location: "Scottsdale",
    industry: "Dental",
    avatarColor: "#C4714A",
  },
  {
    quote: "we filled every botox slot for the month from one campaign. carter actually picks up the phone too",
    name: "Lainey Burkholder",
    business: "Saguaro Aesthetics Med Spa",
    location: "Fountain Hills",
    industry: "Med Spa",
    avatarColor: "#B5697A",
  },
  {
    quote: "old guy here who hates facebook. got 22 ac tune-up calls last week. fine, i was wrong.",
    name: "Randy Cochran",
    business: "Cochran Heating & Cooling",
    location: "Mesa",
    industry: "HVAC",
    avatarColor: "#2D6E6E",
  },
  {
    quote: "membership inquiries went from like 3 a week to 3 a day. had to hire another trainer",
    name: "Tomás Velarde",
    business: "Iron Cactus Strength Co.",
    location: "Scottsdale",
    industry: "Fitness",
    avatarColor: "#4A6FA5",
  },
  {
    quote: "the taco tuesday ad alone paid for the whole month. we were slammed.",
    name: "Priya Donnelly",
    business: "Mesquite & Lime Cantina",
    location: "Old Town Scottsdale",
    industry: "Restaurant",
    avatarColor: "#D4A456",
  },
  {
    quote: "first month i actually understood what i was paying for. transparent reporting is real here",
    name: "Dr. Jared Holcombe",
    business: "Holcombe Family Chiropractic",
    location: "Fountain Hills",
    industry: "Chiropractic",
    avatarColor: "#6B8C6B",
  },
  {
    quote: "got 3 listing leads in week one. one already closed. carter knows the market better than half my brokerage",
    name: "Sienna Kowalczyk",
    business: "Kowalczyk Realty Group",
    location: "Fountain Hills",
    industry: "Real Estate",
    avatarColor: "#7A6B8A",
  },
  {
    quote: "ran our ads for 2 years with another agency, zero results. switched to drevscale and the phone wont stop",
    name: "Marco Delacruz",
    business: "Delacruz Auto & Tire",
    location: "Apache Junction",
    industry: "Auto Repair",
    avatarColor: "#C17A3C",
  },
  {
    quote: "my invisalign consults doubled. literally doubled.",
    name: "Dr. Anika Bhatt",
    business: "Pinnacle Peak Orthodontics",
    location: "North Scottsdale",
    industry: "Dental",
    avatarColor: "#3D7A6E",
  },
  {
    quote: "no contract, no nonsense. exactly what a small shop like mine needed",
    name: "Whitney Argyle",
    business: "Desert Bloom Med Spa",
    location: "Scottsdale",
    industry: "Med Spa",
    avatarColor: "#9E6B82",
  },
  {
    quote: "we werent even on google before. now were getting calls from rio verde. wild",
    name: "Gus Petrakos",
    business: "Petrakos Plumbing",
    location: "Fountain Hills",
    industry: "Plumbing",
    avatarColor: "#4A7A9B",
  },
  {
    quote: "carter rebuilt my site in like 9 days. looks 10x better and actually loads on my mom's iphone now",
    name: "Camille Whitfield",
    business: "Whitfield Pilates Studio",
    location: "Paradise Valley",
    industry: "Fitness",
    avatarColor: "#8B7D6B",
  },
  {
    quote: "44 leads in 30 days. cost per lead under $18. i don't even know what that means but my accountant is happy",
    name: "Dr. Eli Marchetti",
    business: "Marchetti Spine & Sport",
    location: "Scottsdale",
    industry: "Chiropractic",
    avatarColor: "#5C7A5C",
  },
  {
    quote: "honestly thought this was gonna be another wasted $500. booked 11 detailing jobs the first weekend",
    name: "Beto Carrasco",
    business: "Carrasco Mobile Detail",
    location: "Tempe",
    industry: "Auto",
    avatarColor: "#7A5C3A",
  },
];

export const TOP_ROW = TESTIMONIALS_WALL.slice(0, 7);
export const BOTTOM_ROW = TESTIMONIALS_WALL.slice(7);
