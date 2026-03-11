import { motion } from 'framer-motion';
import { Code2, Zap } from 'lucide-react';

export default function HackathonBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-4 text-white flex items-center gap-3 mb-3"
    >
      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
        <Code2 className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold text-sm">Hackathon Day</h4>
          <Zap className="w-3.5 h-3.5 text-yellow-300" />
        </div>
        <p className="text-xs text-white/70 mt-0.5">Building something awesome in Saigon</p>
      </div>
    </motion.div>
  );
}
