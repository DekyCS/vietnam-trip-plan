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

export interface Train {
  operator: string;
  departure: { city: string; station: string; time: string };
  arrival: { city: string; station: string; time: string };
  date: string;
  duration?: string;
}

export interface DayData {
  day: number;
  date: string;
  title: string;
  subtitle?: string;
  location: string;
  flights?: Flight[];
  trains?: Train[];
  hotels?: Hotel[];
  activities: Activity[];
  isHackathon?: boolean;
  isBirthday?: boolean;
  image: string;
}

export const itinerary: DayData[] = [
  {
    day: 1,
    date: 'Mar 16',
    title: 'Montreal to Seoul',
    subtitle: 'Travel Day',
    location: 'Montreal → Minneapolis → Seoul',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
    flights: [
      {
        airline: 'Delta',
        flightNumber: 'DL 5427',
        departure: { city: 'Montreal', airport: 'YUL', time: '07:00' },
        arrival: { city: 'Minneapolis', airport: 'MSP', time: '09:09' },
        date: 'Mar 16',
        duration: '3h 9m',
      },
      {
        airline: 'Delta',
        flightNumber: 'DL 171',
        departure: { city: 'Minneapolis', airport: 'MSP', time: '11:30' },
        arrival: { city: 'Seoul', airport: 'ICN', time: '15:30+1' },
        date: 'Mar 16',
        duration: '14h',
      },
    ],
    activities: [
      { time: '05:00', title: 'Airport check-in at YUL', type: 'transport' },
      { time: '07:00', title: 'Depart Montreal → Minneapolis', description: 'Delta DL 5427', type: 'transport' },
      { time: '09:09', title: 'Arrive Minneapolis (MSP)', description: '2h 21m layover at Terminal 1', type: 'transport' },
      { time: '11:30', title: 'Depart Minneapolis → Seoul', description: 'Delta DL 171 — 14h flight', type: 'transport' },
    ],
  },
  {
    day: 2,
    date: 'Mar 17',
    title: 'Seoul to Saigon',
    subtitle: 'Transit Day',
    location: 'Seoul → Ho Chi Minh City',
    image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80',
    flights: [
      {
        airline: 'Vietnam Airlines',
        flightNumber: 'VN 403',
        departure: { city: 'Seoul', airport: 'ICN', time: '17:55' },
        arrival: { city: 'Ho Chi Minh City', airport: 'SGN', time: '21:20' },
        date: 'Mar 17',
        duration: '5h 25m',
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
      { time: '15:30', title: 'Arrive Seoul Incheon (ICN)', description: 'From Minneapolis flight — 2h 25m layover', type: 'transport' },
      { time: '17:55', title: 'Depart Seoul → HCMC', description: 'Vietnam Airlines VN 403', type: 'transport' },
      { time: '21:20', title: 'Arrive Ho Chi Minh City!', description: 'Tan Son Nhat Airport (SGN) — welcome to Vietnam!', type: 'sightseeing' },
    ],
  },
  {
    day: 3,
    date: 'Mar 18',
    title: 'Ho Chi Minh City',
    subtitle: 'Exploration Day',
    location: 'Ho Chi Minh City',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    activities: [
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
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    isHackathon: true,
    activities: [
      { time: 'All Day', title: 'Hackathon — Day 1', description: 'Ideation, team formation, and start building', type: 'event' },
    ],
  },
  {
    day: 7,
    date: 'Mar 22',
    title: 'Hackathon Day 2',
    subtitle: 'Ship It',
    location: 'Ho Chi Minh City',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    isHackathon: true,
    activities: [
      { time: 'All Day', title: 'Hackathon — Day 2', description: 'Continue building, demos, and judging', type: 'event' },
    ],
  },
  {
    day: 8,
    date: 'Mar 23',
    title: 'Fly to Da Nang!',
    subtitle: "Jeffrey's Birthday!",
    location: 'Da Nang',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    isBirthday: true,
    flights: [
      {
        airline: 'VietJet Air',
        flightNumber: 'VJ 620',
        departure: { city: 'Ho Chi Minh City', airport: 'SGN', time: '06:30' },
        arrival: { city: 'Da Nang', airport: 'DAD', time: '07:50' },
        date: 'Mar 23',
        duration: '1h 20m',
      },
    ],
    hotels: [
      {
        name: 'Kamala Hotel',
        checkIn: 'Mar 23',
        checkOut: 'Mar 24',
        location: 'Da Nang',
      },
    ],
    activities: [
      { time: '06:30', title: 'Fly HCMC → Da Nang', description: 'VietJet Air VJ 620', type: 'transport' },
      { time: '07:50', title: 'Arrive Da Nang!', description: 'Check in to Kamala Hotel', type: 'transport' },
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
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&q=80',
    hotels: [
      {
        name: 'Home in Sơn Trà',
        checkIn: 'Mar 24',
        checkOut: 'Mar 26',
        location: 'Sơn Trà, Da Nang',
        notes: 'Airbnb',
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
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    flights: [
      {
        airline: 'VietJet Air',
        flightNumber: 'VJ 641',
        departure: { city: 'Da Nang', airport: 'DAD', time: '19:30' },
        arrival: { city: 'Ho Chi Minh City', airport: 'SGN', time: '20:55' },
        date: 'Mar 26',
        duration: '1h 25m',
      },
    ],
    activities: [
      { title: 'Check out of Airbnb', type: 'transport' },
      { time: '19:30', title: 'Fly Da Nang → HCMC', description: 'VietJet Air VJ 641', type: 'transport' }
    ],
  },
  {
    day: 12,
    date: 'Mar 27',
    title: 'Heading Home',
    subtitle: 'HCMC → Montreal',
    location: 'HCMC → Shanghai → Toronto → Montreal',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80',
    flights: [
      {
        airline: 'China Eastern',
        flightNumber: 'MU 282',
        departure: { city: 'Ho Chi Minh City', airport: 'SGN', time: '02:10' },
        arrival: { city: 'Shanghai', airport: 'PVG', time: '07:10' },
        date: 'Mar 27',
        duration: '4h',
      },
      {
        airline: 'China Eastern',
        flightNumber: 'MU 207',
        departure: { city: 'Shanghai', airport: 'PVG', time: '12:30' },
        arrival: { city: 'Toronto', airport: 'YYZ', time: '14:25' },
        date: 'Mar 27',
        duration: '13h 55m',
        notes: 'Same day arrival (time zone change) · 5h 20m transfer in Shanghai',
      },
    ],
    trains: [
      {
        operator: 'VIA Rail',
        departure: { city: 'Toronto', station: 'TRTO', time: '18:08' },
        arrival: { city: 'Montreal (Dorval)', station: 'DORV', time: '22:38' },
        date: 'Mar 27',
        duration: '4h 30m',
      },
    ],
    activities: [
      { time: '02:10', title: 'Fly HCMC → Shanghai', description: 'China Eastern MU 282', type: 'transport' },
      { time: '12:30', title: 'Fly Shanghai → Toronto', description: 'China Eastern MU 207 — 5h 20m transfer', type: 'transport' },
      { time: '14:25', title: 'Arrive Toronto Pearson (YYZ)', description: 'Terminal 3', type: 'transport' },
      { time: '18:08', title: 'Train Toronto → Dorval', description: 'VIA Rail — arriving 22:38', type: 'transport' },
      { time: '22:38', title: 'Arrive home in Montreal!', description: 'Welcome back!', type: 'sightseeing' },
    ],
  },
];
