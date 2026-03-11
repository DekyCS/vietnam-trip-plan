import { HugeiconsIcon } from '@hugeicons/react';
import { HotelIcon, CalendarCheckIn01Icon, CalendarCheckOut01Icon } from '@hugeicons/core-free-icons';
import type { Hotel } from '../data/itinerary';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-4 border-2 border-orange-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-200/70 flex items-center justify-center shrink-0">
          <HugeiconsIcon icon={HotelIcon} size={20} strokeWidth={2.5} className="text-orange-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm leading-tight">{hotel.name}</h4>
          <p className="text-xs text-gray-400 mt-0.5">{hotel.location}</p>

          <div className="flex items-center gap-4 mt-2.5">
            <div className="flex items-center gap-1.5">
              <HugeiconsIcon icon={CalendarCheckIn01Icon} size={14} strokeWidth={2.5} className="text-green-500" />
              <span className="text-xs font-medium text-gray-600">{hotel.checkIn}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HugeiconsIcon icon={CalendarCheckOut01Icon} size={14} strokeWidth={2.5} className="text-red-400" />
              <span className="text-xs font-medium text-gray-600">{hotel.checkOut}</span>
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
