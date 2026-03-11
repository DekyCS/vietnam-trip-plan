import { Plane } from 'lucide-react';
import type { Flight } from '../data/itinerary';

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100/50">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
          {flight.airline} · {flight.flightNumber}
        </span>
        {flight.duration && (
          <span className="text-xs text-gray-400 font-medium">{flight.duration}</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Departure */}
        <div className="flex-1 text-right">
          <div className="text-xl font-bold text-gray-900">{flight.departure.airport}</div>
          <div className="text-sm text-gray-500">{flight.departure.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{flight.departure.city}</div>
        </div>

        {/* Plane line */}
        <div className="flex items-center gap-1 px-2">
          <div className="w-8 h-px bg-blue-300" />
          <Plane className="w-4 h-4 text-blue-500 -rotate-0" />
          <div className="w-8 h-px bg-blue-300" />
        </div>

        {/* Arrival */}
        <div className="flex-1">
          <div className="text-xl font-bold text-gray-900">{flight.arrival.airport}</div>
          <div className="text-sm text-gray-500">{flight.arrival.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{flight.arrival.city}</div>
        </div>
      </div>

      {flight.notes && (
        <p className="text-xs text-blue-500/70 mt-3 text-center italic">{flight.notes}</p>
      )}
    </div>
  );
}
