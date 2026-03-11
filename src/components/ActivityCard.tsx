import { HugeiconsIcon } from '@hugeicons/react';
import {
  Camera01Icon,
  Restaurant01Icon,
  Bus01Icon,
  SparklesIcon,
  Coffee01Icon,
  CompassIcon,
} from '@hugeicons/core-free-icons';
import type { Activity } from '../data/itinerary';
import type { IconSvgElement } from '@hugeicons/react';

const typeConfig: Record<Activity['type'], { icon: IconSvgElement; color: string }> = {
  sightseeing: { icon: Camera01Icon, color: 'bg-teal-100 text-teal-600' },
  food: { icon: Restaurant01Icon, color: 'bg-rose-100 text-rose-600' },
  transport: { icon: Bus01Icon, color: 'bg-blue-100 text-blue-600' },
  event: { icon: SparklesIcon, color: 'bg-purple-100 text-purple-600' },
  relax: { icon: Coffee01Icon, color: 'bg-amber-100 text-amber-600' },
  explore: { icon: CompassIcon, color: 'bg-emerald-100 text-emerald-600' },
};

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const config = typeConfig[activity.type];

  return (
    <div className="flex items-start gap-3 py-2">
      <div className={`w-8 h-8 rounded-xl ${config.color} flex items-center justify-center shrink-0 mt-0.5`}>
        <HugeiconsIcon icon={config.icon} size={16} strokeWidth={2.5} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <h4 className="font-bold text-gray-800 text-sm">{activity.title}</h4>
          {activity.time && (
            <span className="text-xs text-gray-400 font-semibold shrink-0">{activity.time}</span>
          )}
        </div>
        {activity.description && (
          <p className="text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">{activity.description}</p>
        )}
      </div>
    </div>
  );
}
