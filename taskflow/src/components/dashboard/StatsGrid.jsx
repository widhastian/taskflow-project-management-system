import { Briefcase, FolderKanban, CheckCircle2, PauseCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { stats } from '../../data/dashboardData';

const iconMap = {
  Briefcase,
  FolderKanban,
  CheckCircle2,
  PauseCircle,
};

function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon];
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;

        if (stat.gradient) {
          return (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-2xl p-4 text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 bg-gradient-to-br ${stat.gradient}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium bg-white/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <TrendIcon className="w-3 h-3" />
                    {stat.change}
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  {stat.showTotal && <span className="text-sm text-white/70">/ {stat.total}</span>}
                </div>
                <p className="text-sm text-white/80 mt-0.5">{stat.label}</p>
              </div>
            </div>
          );
        }

        return (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.lightColor} p-1.5 rounded-lg`}>
                <Icon className={`w-4 h-4 ${stat.textColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                <TrendIcon className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
