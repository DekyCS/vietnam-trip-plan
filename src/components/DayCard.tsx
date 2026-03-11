import { motion } from 'framer-motion';
import { MapPin, Cake } from 'lucide-react';
import type { DayData } from '../data/itinerary';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import HackathonBanner from './HackathonBanner';

interface DayCardProps {
  day: DayData;
  index: number;
}

export default function DayCard({ day, index }: DayCardProps) {
  return (
    <motion.div
      id={`day-${day.day}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index < 3 ? index * 0.1 : 0 }}
      className="bg-white rounded-3xl shadow-md shadow-black/5 overflow-hidden"
    >
      {/* Day header */}
      <div className={`bg-gradient-to-r ${day.gradient} p-5 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              Day {day.day} · {day.date}
            </span>
            {day.isBirthday && (
              <span className="flex items-center gap-1 text-xs font-semibold bg-yellow-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <Cake className="w-3.5 h-3.5" />
                Birthday!
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mt-2">{day.title}</h3>
          {day.subtitle && <p className="text-sm text-white/80 font-medium">{day.subtitle}</p>}
          <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{day.location}</span>
          </div>
        </div>
      </div>

      {/* Day content */}
      <div className="p-5 space-y-4">
        {day.isHackathon && <HackathonBanner />}

        {day.flights && day.flights.length > 0 && (
          <div className="space-y-3">
            {day.flights.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))}
          </div>
        )}

        {day.hotels && day.hotels.length > 0 && (
          <div className="space-y-3">
            {day.hotels.map((hotel, i) => (
              <HotelCard key={i} hotel={hotel} />
            ))}
          </div>
        )}

        {day.activities.length > 0 && (
          <div className="divide-y divide-gray-50">
            {day.activities.map((activity, i) => (
              <ActivityCard key={i} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
