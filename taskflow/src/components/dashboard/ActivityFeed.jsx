import { Activity, CheckCircle2, Plus, TrendingUp, FolderKanban } from 'lucide-react';
import { activities } from '../../data/dashboardData';

function getActivityIcon(type) {
  switch (type) {
    case 'complete': return <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />;
    case 'create': return <Plus className="w-3.5 h-3.5 text-blue-500" />;
    case 'comment': return <Activity className="w-3.5 h-3.5 text-yellow-500" />;
    case 'move': return <TrendingUp className="w-3.5 h-3.5 text-purple-500" />;
    case 'upload': return <FolderKanban className="w-3.5 h-3.5 text-pink-500" />;
    default: return <Activity className="w-3.5 h-3.5 text-slate-500" />;
  }
}

function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-2 p-4 border-b border-slate-100">
        <div className="p-1.5 bg-yellow-50 rounded-lg">
          <Activity className="w-4 h-4 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Activity</h2>
          <p className="text-[10px] text-slate-500">Recent updates</p>
        </div>
      </div>

      <div className="flex-1 space-y-0 overflow-y-auto">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-2.5 p-3 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              {index !== activities.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-1" />}
            </div>
            <div className="flex-1 pb-1">
              <p className="text-[11px] text-slate-800">
                <span className="font-medium">{activity.user}</span>{' '}
                <span className="text-slate-500">{activity.action}</span>{' '}
                <span className="font-medium text-primary-600">{activity.target}</span>
              </p>
              {activity.project && <p className="text-[9px] text-slate-400 mt-0.5">in {activity.project}</p>}
              <p className="text-[9px] text-slate-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
