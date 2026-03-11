import { HugeiconsIcon } from '@hugeicons/react';
import { Train01Icon } from '@hugeicons/core-free-icons';
import type { Train } from '../data/itinerary';

interface TrainCardProps {
  train: Train;
}

export default function TrainCard({ train }: TrainCardProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 border-2 border-emerald-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-200/70 px-2.5 py-1 rounded-full">
          {train.operator}
        </span>
        {train.duration && (
          <span className="text-xs text-gray-400 font-semibold">{train.duration}</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 text-right">
          <div className="text-xl font-extrabold text-gray-900">{train.departure.station}</div>
          <div className="text-sm font-medium text-gray-500">{train.departure.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{train.departure.city}</div>
        </div>

        <div className="flex items-center gap-1 px-2">
          <div className="w-8 h-px bg-emerald-300" />
          <HugeiconsIcon icon={Train01Icon} size={16} strokeWidth={2.5} className="text-emerald-500" />
          <div className="w-8 h-px bg-emerald-300" />
        </div>

        <div className="flex-1">
          <div className="text-xl font-extrabold text-gray-900">{train.arrival.station}</div>
          <div className="text-sm font-medium text-gray-500">{train.arrival.time}</div>
          <div className="text-xs text-gray-400 mt-0.5">{train.arrival.city}</div>
        </div>
      </div>
    </div>
  );
}
