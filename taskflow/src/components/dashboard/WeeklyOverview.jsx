import { weeklyData } from '../../data/dashboardData';

function WeeklyOverview() {
  const maxValue = 48;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-800">Weekly Task Overview</h2>
          <p className="text-xs text-slate-500 mt-0.5">Task status this week</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-400" /><span className="text-slate-600">To Do</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-slate-600">In Progress</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-slate-600">Review</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-slate-600">Done</span></div>
        </div>
      </div>

      <div className="h-48 flex items-end justify-around gap-4">
        {weeklyData.map((item) => {
          const barHeight = Math.round((item.value / maxValue) * 100);
          return (
            <div key={item.label} className="flex-1 flex flex-col items-center h-full justify-end group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap z-10">
                <div className="font-semibold">{item.label}</div>
                <div className="text-white/80">{item.value} tasks</div>
              </div>
              <div className={`w-full max-w-16 rounded-2xl ${item.bgClass} hover:opacity-80 transition-opacity cursor-pointer`} style={{ height: `${barHeight}%` }} />
              <span className="text-[10px] font-medium text-slate-400 uppercase mt-2">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyOverview;