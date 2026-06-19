import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

function DashboardHeader() {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Selamat Pagi');
    else if (hour < 15) setGreeting('Selamat Siang');
    else if (hour < 18) setGreeting('Selamat Sore');
    else setGreeting('Selamat Malam');

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{greeting}!</h1>
        <p className="text-slate-500 mt-1">
          {currentTime.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <Link
        to="/projects/new"
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium
          hover:bg-primary-700 active:scale-[0.98] transition-all duration-200 shadow-sm shadow-primary-500/20
          self-start sm:self-auto"
      >
        <Plus className="w-4 h-4" />
        New Project
      </Link>
    </div>
  );
}

export default DashboardHeader;
