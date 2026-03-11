export interface Flight {
  airline: string;
  flightNumber: string;
  departure: { city: string; airport: string; time: string };
  arrival: { city: string; airport: string; time: string };
  date: string;
  duration?: string;
  notes?: string;
}

export interface Hotel {
  name: string;
  checkIn: string;
  checkOut: string;
  location: string;
  notes?: string;
}

export interface Activity {
  time?: string;
  title: string;
  description?: string;
  type: 'sightseeing' | 'food' | 'transport' | 'event' | 'relax' | 'explore';
}

export interface DayData {
  day: number;
  date: string;
  title: string;
  subtitle?: string;
  location: string;
  flights?: Flight[];
  hotels?: Hotel[];
  activities: Activity[];
  isHackathon?: boolean;
  isBirthday?: boolean;
  gradient: string;
}

export const itinerary: DayData[] = [
  {
    day: 1,
    date: 'Mar 16',
    title: 'Montreal to Seoul',
    subtitle: 'Travel Day',
    location: 'Montreal → Seoul',
    gradient: 'from-blue-400 to-indigo-500',
    flights: [
      {
        airline: 'Korean Air',
        flightNumber: 'KE 074',
        departure: { city: 'Montreal', airport: 'YUL', time: '13:10' },
        arrival: { city: 'Seoul', airport: 'ICN', time: '16:20+1' },
        date: 'Mar 16',
        duration: '14h 10m',
      },
    ],
    activities: [
      { time: '10:00', title: 'Airport check-in at YUL', type: 'transport' },
      { time: '13:10', title: 'Depart Montreal', description: 'Korean Air KE 074 — direct to Seoul Incheon', type: 'transport' },
    ],
  },
  {
    day: 2,
    date: 'Mar 17',
    title: 'Seoul Layover',
    subtitle: 'Transit Day',
    location: 'Seoul → Ho Chi Minh City',
    gradient: 'from-indigo-400 to-purple-500',
    flights: [
      {
        airline: 'Korean Air',
        flightNumber: 'KE 679',
        departure: { city: 'Seoul', airport: 'ICN', time: '18:35' },
        arrival: { city: 'Ho Chi Minh City', airport: 'SGN', time: '22:10' },
        date: 'Mar 17',
        duration: '5h 35m',
      },
    ],
    hotels: [
      {
        name: 'Mia Saigon Luxury Boutique Hotel',
        checkIn: 'Mar 17 (late)',
        checkOut: 'Mar 20',
        location: 'Ho Chi Minh City',
      },
    ],
    activities: [
      { time: '16:20', title: 'Arrive Seoul Incheon (ICN)', description: 'From Montreal flight', type: 'transport' },
      { title: 'Explore Incheon Airport', description: 'Korean food, duty free shopping, transit lounge', type: 'explore' },
      { time: '18:35', title: 'Depart Seoul → HCMC', description: 'Korean Air KE 679', type: 'transport' },
      { time: '22:10', title: 'Arrive Ho Chi Minh City!', description: 'Tan Son Nhat Airport (SGN) — welcome to Vietnam!', type: 'sightseeing' },
    ],
  },
  {
    day: 3,
    date: 'Mar 18',
    title: 'Ho Chi Minh City',
    subtitle: 'Exploration Day',
    location: 'Ho Chi Minh City',
    gradient: 'from-orange-400 to-rose-500',
    activities: [
      { time: 'Morning', title: 'Sleep in & recover from jet lag', type: 'relax' },
      { time: 'Late Morning', title: 'Breakfast at hotel or nearby cafe', description: 'Try pho or banh mi for breakfast', type: 'food' },
      { title: 'Visit War Remnants Museum', description: 'One of the most visited museums in Vietnam', type: 'sightseeing' },
      { title: 'Notre-Dame Cathedral Basilica', description: 'Iconic French colonial architecture', type: 'sightseeing' },
      { title: 'Central Post Office', description: 'Beautiful historic building near the cathedral', type: 'sightseeing' },
      { title: 'Ben Thanh Market', description: 'Famous market — great for souvenirs & street food', type: 'explore' },
      { time: 'Evening', title: 'Dinner on Bui Vien Walking Street', description: 'Backpacker street with amazing nightlife & food', type: 'food' },
    ],
  },
  {
    day: 4,
    date: 'Mar 19',
    title: 'HCMC Day 2',
    subtitle: 'Culture & Food',
    location: 'Ho Chi Minh City',
    gradient: 'from-rose-400 to-pink-500',
    activities: [
      { time: 'Morning', title: 'Cu Chi Tunnels Day Trip', description: 'Underground tunnel network from the Vietnam War — ~1.5 hrs from city', type: 'sightseeing' },
      { time: 'Afternoon', title: 'Jade Emperor Pagoda', description: 'Beautiful Taoist temple', type: 'sightseeing' },
      { title: 'Cafe Apartment', description: 'Iconic building full of quirky cafes on Nguyen Hue', type: 'explore' },
      { time: 'Evening', title: 'District 4 Street Food Tour', description: 'Seafood, broken rice, and local specialties', type: 'food' },
    ],
  },
  {
    day: 5,
    date: 'Mar 20',
    title: 'Hotel Switch + Hackathon Eve',
    subtitle: 'Transition Day',
    location: 'Ho Chi Minh City',
    gradient: 'from-amber-400 to-orange-500',
    hotels: [
      {
        name: 'Eastin Grand Hotel Saigon',
        checkIn: 'Mar 20',
        checkOut: 'Mar 23',
        location: 'Ho Chi Minh City',
        notes: 'Hackathon venue hotel',
      },
    ],
    activities: [
      { time: 'Morning', title: 'Check out of Mia Saigon', type: 'transport' },
      { title: 'Check in to Eastin Grand Hotel Saigon', description: 'Hackathon venue — settle in and prep', type: 'transport' },
      { time: 'Afternoon', title: 'Free time to explore', description: 'Last bit of sightseeing before hackathon begins', type: 'explore' },
      { time: 'Evening', title: 'Hackathon welcome / registration', description: 'Get ready for 3 days of hacking!', type: 'event' },
    ],
    isHackathon: true,
  },
  {
    day: 6,
    date: 'Mar 21',
    title: 'Hackathon Day 1',
    subtitle: 'Build Mode',
    location: 'Ho Chi Minh City',
    gradient: 'from-violet-500 to-purple-600',
    isHackathon: true,
    activities: [
      { time: 'All Day', title: 'Hackathon — Day 1', description: 'Ideation, team formation, and start building', type: 'event' },
      { time: 'Evening', title: 'Hackathon dinner & networking', type: 'food' },
    ],
  },
  {
    day: 7,
    date: 'Mar 22',
    title: 'Hackathon Day 2',
    subtitle: 'Ship It',
    location: 'Ho Chi Minh City',
    gradient: 'from-purple-500 to-fuchsia-600',
    isHackathon: true,
    activities: [
      { time: 'All Day', title: 'Hackathon — Day 2', description: 'Continue building, demos, and judging', type: 'event' },
      { time: 'Evening', title: 'Hackathon closing ceremony', description: 'Presentations and celebration', type: 'event' },
    ],
  },
  {
    day: 8,
    date: 'Mar 23',
    title: 'Fly to Da Nang!',
    subtitle: "Jeffrey's Birthday!",
    location: 'Da Nang',
    gradient: 'from-cyan-400 to-teal-500',
    isBirthday: true,
    flights: [
      {
        airline: 'VietJet Air',
        flightNumber: 'VJ 513',
        departure: { city: 'Ho Chi Minh City', airport: 'SGN', time: '09:55' },
        arrival: { city: 'Da Nang', airport: 'DAD', time: '11:20' },
        date: 'Mar 23',
        duration: '1h 25m',
      },
    ],
    hotels: [
      {
        name: 'Mandila Beach Hotel',
        checkIn: 'Mar 23',
        checkOut: 'Mar 24',
        location: 'Da Nang',
      },
    ],
    activities: [
      { time: '09:55', title: 'Fly HCMC → Da Nang', description: 'VietJet Air VJ 513', type: 'transport' },
      { time: '11:20', title: 'Arrive Da Nang!', description: 'Check in to Mandila Beach Hotel', type: 'transport' },
      { time: 'Afternoon', title: 'My Khe Beach', description: 'One of the most beautiful beaches in Vietnam', type: 'sightseeing' },
      { time: 'Afternoon', title: 'Dragon Bridge', description: 'Iconic bridge — breathes fire on weekends!', type: 'sightseeing' },
      { time: 'Evening', title: "Jeffrey's Birthday Dinner!", description: 'Celebrate at a beachside restaurant in Da Nang', type: 'food' },
    ],
  },
  {
    day: 9,
    date: 'Mar 24',
    title: 'Ba Na Hills',
    subtitle: 'Golden Bridge Day',
    location: 'Da Nang / Hoi An',
    gradient: 'from-emerald-400 to-teal-500',
    hotels: [
      {
        name: 'Airbnb in Hoi An',
        checkIn: 'Mar 24',
        checkOut: 'Mar 26',
        location: 'Hoi An',
        notes: 'Beach area Airbnb',
      },
    ],
    activities: [
      { time: 'Morning', title: 'Ba Na Hills Day Trip', description: 'Take the cable car up to the famous Golden Bridge', type: 'sightseeing' },
      { title: 'Golden Bridge', description: 'The iconic bridge held by giant stone hands — must-see photo spot!', type: 'sightseeing' },
      { title: 'French Village', description: 'European-themed village at the summit', type: 'explore' },
      { time: 'Late Afternoon', title: 'Check in to Hoi An Airbnb', description: 'Drive to Hoi An (~45 min from Da Nang)', type: 'transport' },
      { time: 'Evening', title: 'Hoi An Ancient Town', description: 'Explore the lantern-lit streets and night market', type: 'explore' },
    ],
  },
  {
    day: 10,
    date: 'Mar 25',
    title: 'Son Tra Peninsula',
    subtitle: 'Nature & Views',
    location: 'Da Nang / Hoi An',
    gradient: 'from-teal-400 to-cyan-500',
    activities: [
      { time: 'Morning', title: 'Son Tra Peninsula', description: 'Beautiful peninsula with mountain roads and panoramic views', type: 'sightseeing' },
      { title: 'Linh Ung Pagoda', description: '67m Lady Buddha statue overlooking the coast', type: 'sightseeing' },
      { time: 'Afternoon', title: 'An Bang Beach', description: 'Relax at one of Hoi An\'s best beaches', type: 'relax' },
      { time: 'Evening', title: 'Hoi An Riverside Dinner', description: 'Cao lau, white rose dumplings — Hoi An specialties', type: 'food' },
    ],
  },
  {
    day: 11,
    date: 'Mar 26',
    title: 'Back to HCMC',
    subtitle: 'Free Morning + Flight',
    location: 'Da Nang → Ho Chi Minh City',
    gradient: 'from-sky-400 to-blue-500',
    flights: [
      {
        airline: 'VietJet Air',
        flightNumber: 'VJ 526',
        departure: { city: 'Da Nang', airport: 'DAD', time: '15:00' },
        arrival: { city: 'Ho Chi Minh City', airport: 'SGN', time: '16:25' },
        date: 'Mar 26',
        duration: '1h 25m',
      },
    ],
    hotels: [
      {
        name: 'Mia Saigon Luxury Boutique Hotel',
        checkIn: 'Mar 26',
        checkOut: 'Mar 27',
        location: 'Ho Chi Minh City',
        notes: 'Last night in Vietnam',
      },
    ],
    activities: [
      { time: 'Morning', title: 'Free morning in Hoi An', description: 'Last chance to explore or shop', type: 'explore' },
      { title: 'Check out of Airbnb', type: 'transport' },
      { time: '15:00', title: 'Fly Da Nang → HCMC', description: 'VietJet Air VJ 526', type: 'transport' },
      { time: 'Evening', title: 'Last dinner in Saigon', description: 'Enjoy one final Vietnamese feast', type: 'food' },
    ],
  },
  {
    day: 12,
    date: 'Mar 27',
    title: 'Heading Home',
    subtitle: 'HCMC → Montreal',
    location: 'HCMC → Shanghai → Toronto → Montreal',
    gradient: 'from-slate-400 to-gray-500',
    flights: [
      {
        airline: 'China Eastern',
        flightNumber: 'MU 290',
        departure: { city: 'Ho Chi Minh City', airport: 'SGN', time: '08:35' },
        arrival: { city: 'Shanghai', airport: 'PVG', time: '13:15' },
        date: 'Mar 27',
        duration: '4h 40m',
      },
      {
        airline: 'China Eastern',
        flightNumber: 'MU 207',
        departure: { city: 'Shanghai', airport: 'PVG', time: '17:15' },
        arrival: { city: 'Toronto', airport: 'YYZ', time: '18:25' },
        date: 'Mar 27',
        duration: '14h 10m',
        notes: 'Same day arrival (time zone change)',
      },
      {
        airline: 'Air Canada',
        flightNumber: 'AC 895',
        departure: { city: 'Toronto', airport: 'YYZ', time: '21:00' },
        arrival: { city: 'Montreal', airport: 'YUL', time: '22:25' },
        date: 'Mar 27',
        duration: '1h 25m',
      },
    ],
    activities: [
      { time: '05:30', title: 'Early wake up & checkout', type: 'transport' },
      { time: '08:35', title: 'Fly HCMC → Shanghai', description: 'China Eastern MU 290', type: 'transport' },
      { time: '17:15', title: 'Fly Shanghai → Toronto', description: 'China Eastern MU 207', type: 'transport' },
      { time: '21:00', title: 'Fly Toronto → Montreal', description: 'Air Canada AC 895', type: 'transport' },
      { time: '22:25', title: 'Arrive home in Montreal!', description: 'Welcome back!', type: 'sightseeing' },
    ],
  },
];
