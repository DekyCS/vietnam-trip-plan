import Hero from './components/Hero';
import TripOverview from './components/TripOverview';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Hero />
      <TripOverview />
      <Timeline />

      {/* Footer */}
      <footer className="text-center py-10 px-5">
        <p className="text-sm text-gray-400">
          Vietnam 2026 · Mar 16–27
        </p>
        <p className="text-xs text-gray-300 mt-1">
          Have an amazing trip!
        </p>
      </footer>
    </div>
  );
}

export default App;
