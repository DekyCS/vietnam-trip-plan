import { motion } from 'framer-motion';
import { itinerary } from '../data/itinerary';
import DayCard from './DayCard';

export default function Timeline() {
  return (
    <section className="px-5 py-10 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900">Day by Day</h2>
        <p className="text-sm text-gray-400 mt-1">Your complete itinerary</p>
      </motion.div>

      <div className="space-y-6">
        {itinerary.map((day, index) => (
          <DayCard key={day.day} day={day} index={index} />
        ))}
      </div>
    </section>
  );
}
