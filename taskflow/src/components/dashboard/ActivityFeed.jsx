import { Activity, CheckCircle2, Plus, TrendingUp, FolderKanban } from 'lucide-react';
import { activities } from '../../data/dashboardData';

function getActivityIcon(type) {
  switch (type) {
    case 'complete': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    case 'create': return <Plus className="w-4 h-4 text-blue-500" />;
    case 'comment': return <Activity className="w-4 h-4 text-yellow-500" />;
    case 'move': return <TrendingUp className="w-4 h-4 text-purple-500" />;
    case 'upload': return <FolderKanban className="w-4 h-4 text-pink-500" />;
    default: return <Activity className="w-4 h-4 text-slate-500" />;
  }
}

function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Activity className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Activity</h2>
            <p className="text-xs text-slate-500">Recent updates</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-0 overflow-y-auto max-h-[320px]">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-3 p-4 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              {index !== activities.length - 1 && <div className="w-px h-full bg-slate-200 mt-2" />}
            </div>
            <div className="flex-1 pb-2">
              <p className="text-sm text-slate-800">
                <span className="font-medium">{activity.user}</span>{' '}
                <span className="text-slate-500">{activity.action}</span>{' '}
                <span className="font-medium text-primary-600">{activity.target}</span>
              </p>
              {activity.project && <p className="text-xs text-slate-400 mt-0.5">in {activity.project}</p>}
              <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;