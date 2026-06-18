import { Link } from 'react-router-dom';
import { FolderKanban } from 'lucide-react';
import { recentProjects } from '../../data/dashboardData';

function getStatusColor(status) {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
    case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Planning': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}

function ProjectsList() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FolderKanban className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Projects</h2>
            <p className="text-xs text-slate-500">{recentProjects.length} active</p>
          </div>
        </div>
        <Link to="/projects" className="text-xs font-medium text-primary-600 hover:text-primary-700">See all</Link>
      </div>

      <div className="flex-1 divide-y divide-slate-100 overflow-y-auto">
        {recentProjects.map((project) => (
          <div key={project.id} className="p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-slate-800">{project.name}</h4>
              <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-2">{project.description}</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`} style={{ width: `${project.progress}%` }} />
              </div>
              <span className="text-xs text-slate-500 font-medium">{project.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;