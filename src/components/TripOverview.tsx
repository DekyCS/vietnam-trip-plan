import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Plane } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Days', value: '12', color: 'bg-orange-100 text-orange-600' },
  { icon: MapPin, label: 'Cities', value: '3', color: 'bg-teal-100 text-teal-600' },
  { icon: Users, label: 'Travelers', value: '4', color: 'bg-purple-100 text-purple-600' },
  { icon: Plane, label: 'Flights', value: '6', color: 'bg-blue-100 text-blue-600' },
];

export default function TripOverview() {
  return (
    <section className="px-5 -mt-8 relative z-20 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6"
      >
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Trip Overview</h2>
        <div className="grid grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
