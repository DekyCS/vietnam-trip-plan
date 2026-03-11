import { Camera, Utensils, Bus, Sparkles, Coffee, Compass } from 'lucide-react';
import type { Activity } from '../data/itinerary';

const typeConfig: Record<Activity['type'], { icon: typeof Camera; color: string }> = {
  sightseeing: { icon: Camera, color: 'bg-teal-100 text-teal-600' },
  food: { icon: Utensils, color: 'bg-rose-100 text-rose-600' },
  transport: { icon: Bus, color: 'bg-blue-100 text-blue-600' },
  event: { icon: Sparkles, color: 'bg-purple-100 text-purple-600' },
  relax: { icon: Coffee, color: 'bg-amber-100 text-amber-600' },
  explore: { icon: Compass, color: 'bg-emerald-100 text-emerald-600' },
};

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const config = typeConfig[activity.type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-3 py-2">
      <div className={`w-8 h-8 rounded-xl ${config.color} flex items-center justify-center shrink-0 mt-0.5`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <h4 className="font-semibold text-gray-800 text-sm">{activity.title}</h4>
          {activity.time && (
            <span className="text-xs text-gray-400 font-medium shrink-0">{activity.time}</span>
          )}
        </div>
        {activity.description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{activity.description}</p>
        )}
      </div>
    </div>
  );
}
