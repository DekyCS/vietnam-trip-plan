import { HugeiconsIcon } from '@hugeicons/react';
import { AirplaneIcon } from '@hugeicons/core-free-icons';
import type { Flight } from '../data/itinerary';

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 border-2 border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-blue-700 bg-blue-200/70 px-2.5 py-1 rounded-full">
          {flight.airline} · {flight.flightNumber}
        </span>
        {flight.duration && (
          <span className="text-xs text-gray-400 font-semibold">{flight.duration}</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Departure */}
        <div className="flex-1 text-right">
          <div className="text-xl font-extrabold text-gray-900">{flight.departure.airport}</div>
          <div className="text-sm font-medium text-gray-500">{flight.departure.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{flight.departure.city}</div>
        </div>

        {/* Plane line */}
        <div className="flex items-center gap-1 px-2">
          <div className="w-8 h-px bg-blue-300" />
          <HugeiconsIcon icon={AirplaneIcon} size={16} strokeWidth={2.5} className="text-blue-500" />
          <div className="w-8 h-px bg-blue-300" />
        </div>

        {/* Arrival */}
        <div className="flex-1">
          <div className="text-xl font-extrabold text-gray-900">{flight.arrival.airport}</div>
          <div className="text-sm font-medium text-gray-500">{flight.arrival.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{flight.arrival.city}</div>
        </div>
      </div>

      {flight.notes && (
        <p className="text-xs text-blue-500/70 mt-3 text-center italic">{flight.notes}</p>
      )}
    </div>
  );
}
