import { Link } from 'react-router-dom';
import { Inbox, CheckCircle2 } from 'lucide-react';
import { todayTasks } from '../../data/dashboardData';

function getPriorityDot(priority) {
  switch (priority) {
    case 'high': return 'bg-red-500';
    case 'medium': return 'bg-yellow-500';
    case 'low': return 'bg-green-500';
    default: return 'bg-slate-400';
  }
}

function TodayTasks() {
  const completedCount = todayTasks.filter(t => t.completed).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-orange-50 rounded-lg">
            <Inbox className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Today's Tasks</h2>
            <p className="text-[10px] text-slate-500">{completedCount}/{todayTasks.length} done</p>
          </div>
        </div>
        <Link to="/tasks" className="text-[10px] font-medium text-primary-600 hover:text-primary-700">See all</Link>
      </div>

      <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[300px] pr-1">
        {todayTasks.map((task) => (
          <div key={task.id} className={`flex items-start gap-2 p-2 rounded-lg transition-colors ${task.completed ? 'bg-green-50/50' : 'hover:bg-slate-50'}`}>
            <button className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${task.completed ? 'bg-green-500 border-green-500' : 'border-slate-300 hover:border-primary-500'}`}>
              {task.completed && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>{task.title}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-slate-500">{task.project}</span>
                <span className={`w-1 h-1 rounded-full ${getPriorityDot(task.priority)}`} />
              </div>
            </div>
            <span className="text-[10px] text-slate-400 flex-shrink-0">{task.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayTasks;