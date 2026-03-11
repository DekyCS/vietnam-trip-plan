import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, CalendarDays, Plane, MapPin } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', target: 'top' },
  { icon: CalendarDays, label: 'Timeline', target: 'day-1' },
  { icon: Plane, label: 'Flights', target: 'day-1' },
  { icon: MapPin, label: 'Da Nang', target: 'day-8' },
];

export default function Navigation() {
  const [active, setActive] = useState('Home');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (target: string, label: string) => {
    setActive(label);
    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xl shadow-lg shadow-black/10 rounded-2xl px-2 py-2 border border-gray-100">
            {navItems.map((item) => {
              const isActive = active === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target, item.label)}
                  className={`
                    flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
