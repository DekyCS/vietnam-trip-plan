import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&q=80"
          alt="Vietnam landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 pb-12 pt-20 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Plane className="w-4 h-4" />
            <span>Upcoming Trip</span>
          </div>

          <h1 className="text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
            Vietnam
            <span className="block text-orange-300">Adventure</span>
          </h1>

          <p className="text-white/70 text-lg mb-8 font-medium">
            From bustling Saigon streets to the golden sands of Da Nang
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-2xl">
              <Calendar className="w-4 h-4 text-orange-300" />
              <span>Mar 16 – 27, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-2xl">
              <MapPin className="w-4 h-4 text-orange-300" />
              <span>HCMC · Da Nang · Hoi An</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
