import { Plus, FolderKanban } from 'lucide-react';

function Projects() {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 75 },
    { id: 2, name: 'Mobile App v2.0', status: 'Planning', progress: 20 },
    { id: 3, name: 'API Integration', status: 'Completed', progress: 100 },
    { id: 4, name: 'Database Migration', status: 'In Progress', progress: 45 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Planning': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Projects</h2>
          <p className="text-slate-500 mt-1">Kelola semua project Anda.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary-50 rounded-lg">
                <FolderKanban className="w-6 h-6 text-primary-600" />
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{project.name}</h3>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-slate-500 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;