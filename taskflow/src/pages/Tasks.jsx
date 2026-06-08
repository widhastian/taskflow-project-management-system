import { Plus, ListTodo, Calendar, Flag } from 'lucide-react';

function Tasks() {
  const tasks = [
    { id: 1, title: 'Design Homepage', project: 'Website Redesign', priority: 'High', due: '2026-06-10' },
    { id: 2, title: 'Setup CI/CD Pipeline', project: 'Mobile App v2.0', priority: 'Medium', due: '2026-06-15' },
    { id: 3, title: 'Write API Documentation', project: 'API Integration', priority: 'Low', due: '2026-06-20' },
    { id: 4, title: 'User Testing', project: 'Website Redesign', priority: 'High', due: '2026-06-12' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Tasks</h2>
          <p className="text-slate-500 mt-1">Kelola dan tracking tugas harian.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Task
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <ListTodo className="w-5 h-5 text-primary-600" />
                      <span className="font-medium text-slate-800">{task.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{task.project}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                      <Flag className="w-3 h-3" />
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      {task.due}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tasks;