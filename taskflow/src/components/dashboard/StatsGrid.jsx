import { Briefcase, CheckCircle2, PauseCircle, Flame, TrendingUp, TrendingDown } from 'lucide-react';
import { stats } from '../../data/dashboardData';

const iconMap = {
  Briefcase,
  CheckCircle2,
  PauseCircle,
  Flame,
};

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon];
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;

        if (stat.gradient) {
          return (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 bg-gradient-to-br ${stat.gradient}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    <TrendIcon className="w-3.5 h-3.5" />
                    {stat.change}
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-5xl font-bold">{stat.value}</p>
                  {stat.showTotal && (
                    <span className="text-lg font-medium text-white/70">/ {stat.total}</span>
                  )}
                </div>
                <p className="text-lg text-white/80 mt-1 font-medium">{stat.label}</p>
              </div>
            </div>
          );
        }

        return (
          <div
            key={stat.label}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.lightColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                <TrendIcon className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-5xl font-bold text-slate-800">{stat.value}</p>
              {stat.showTotal && <span className="text-lg font-medium text-slate-400">/ {stat.total}</span>}
            </div>
            <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            {stat.showProgress && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{stat.completed}/{stat.total} completed</span>
                  <span>{Math.round((stat.completed / stat.total) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${(stat.completed / stat.total) * 100}%` }} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;