import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { timelineProjects } from '../../data/dashboardData';

function ProjectTimeline() {
  const [hoveredId, setHoveredId] = useState(null);

  const allDates = timelineProjects.flatMap(p => [new Date(p.startDate), new Date(p.endDate)]);
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));
  minDate.setDate(minDate.getDate() - 3);
  maxDate.setDate(maxDate.getDate() + 3);
  const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);

  const today = new Date('2026-06-18');
  const todayPercent = ((today - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;

  const getBarStyle = (project) => {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    const left = ((start - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;
    const width = ((end - start) / (1000 * 60 * 60 * 24) / totalDays) * 100;
    return { left: `${left}%`, width: `${width}%` };
  };

  const getMonthLabels = () => {
    const labels = [];
    const current = new Date(minDate);
    while (current <= maxDate) {
      labels.push({
        label: current.toLocaleDateString('id-ID', { month: 'short' }),
        position: ((current - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100,
      });
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
    return labels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-1.5 bg-indigo-50 rounded-lg">
          <CalendarDays className="w-4 h-4 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Projects Timeline</h2>
          <p className="text-[10px] text-slate-500">Gantt overview</p>
        </div>
      </div>

      <div className="relative">
        {/* Month Labels */}
        <div className="relative h-5 mb-1 border-b border-slate-100">
          {monthLabels.map((m, i) => (
            <span key={i} className="absolute text-[9px] text-slate-400 -translate-x-1/2" style={{ left: m.position + '%' }}>
              {m.label}
            </span>
          ))}
        </div>

        {/* Today Line */}
        <div className="absolute top-5 bottom-0 w-px bg-red-400 z-10" style={{ left: `${todayPercent}%` }}>
          <div className="absolute -top-1 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </div>

        {/* Project Bars */}
        <div className="space-y-3 pt-2">
          {timelineProjects.map((project) => {
            const barStyle = getBarStyle(project);
            const isHovered = hoveredId === project.id;

            return (
              <div key={project.id} className="relative h-8"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute left-0 top-0 w-28 h-full flex items-center z-10">
                  <span className="text-[11px] font-medium text-slate-700 truncate pr-2">{project.name}</span>
                </div>

                <div className="absolute left-28 right-0 h-full flex items-center">
                  <div className="relative w-full h-5">
                    <div className="absolute h-5 rounded-md bg-slate-100 overflow-hidden" style={{ left: barStyle.left, width: barStyle.width }}>
                      <div className={`h-full ${project.color} opacity-80`} style={{ width: `${project.progress}%` }} />
                    </div>

                    {isHovered && (
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[9px] rounded-md whitespace-nowrap z-20">
                        {project.progress}% • {project.status}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
