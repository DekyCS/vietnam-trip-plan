import { Building2, CalendarCheck, CalendarX } from 'lucide-react';
import type { Hotel } from '../data/itinerary';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-orange-100/50">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
          <Building2 className="w-5 h-5 text-orange-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm leading-tight">{hotel.name}</h4>
          <p className="text-xs text-gray-400 mt-0.5">{hotel.location}</p>

          <div className="flex items-center gap-4 mt-2.5">
            <div className="flex items-center gap-1.5">
              <CalendarCheck className="w-3.5 h-3.5 text-green-500" />
              <span className="text-xs text-gray-600">{hotel.checkIn}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarX className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs text-gray-600">{hotel.checkOut}</span>
            </div>
          </div>

          {hotel.notes && (
            <p className="text-xs text-orange-500/70 mt-2 italic">{hotel.notes}</p>
          )}
        </div>
      </div>
    </div>
  );
}
