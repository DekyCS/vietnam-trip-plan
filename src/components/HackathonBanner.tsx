import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { SourceCodeIcon } from '@hugeicons/core-free-icons';

export default function HackathonBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-4 flex items-center gap-3 mb-3 border-2 border-violet-200"
    >
      <div className="w-10 h-10 bg-violet-200/70 rounded-xl flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={SourceCodeIcon} size={20} strokeWidth={2.5} className="text-violet-600" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-extrabold text-sm text-gray-900">Hackathon Day</h4>
        <p className="text-xs text-gray-500 font-medium mt-0.5">Building something awesome in Saigon</p>
      </div>
    </motion.div>
  );
}
