import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { reminders } from '../../data/dashboardData';

function NextReminder() {
  const urgentReminder = reminders.slice().sort((a, b) => a.time.localeCompare(b.time))[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="p-1.5 bg-red-50 rounded-lg">
          <Clock className="w-4 h-4 text-red-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Next Reminder</h2>
          <p className="text-[10px] text-slate-500">Most urgent</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-red-50 border border-red-100">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800">{urgentReminder.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{urgentReminder.project}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <Clock className="w-3 h-3 text-red-500" />
              <span className="text-xs font-bold text-red-600">{urgentReminder.time}</span>
              <span className="text-[10px] text-red-400 ml-1">(in 2h 15m)</span>
            </div>
          </div>
        </div>
      </div>

      <Link to="/tasks" className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 bg-red-600 text-white rounded-xl text-xs font-medium hover:bg-red-700 active:scale-[0.98] transition-all">
        View All Reminders
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

export default NextReminder;