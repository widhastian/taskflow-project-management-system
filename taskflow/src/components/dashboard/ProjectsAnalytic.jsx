import { useState } from 'react';
import { BarChart3, AlertCircle, CheckCircle2 } from 'lucide-react';
import { projectAnalytics } from '../../data/dashboardData';

function ProjectsAnalytic() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-cyan-50 rounded-lg">
          <BarChart3 className="w-4 h-4 text-cyan-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Projects Analytic</h2>
          <p className="text-[10px] text-slate-500">Completion & overdue</p>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {projectAnalytics.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Project Name */}
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[11px] font-medium truncate transition-colors ${isHovered ? 'text-slate-800' : 'text-slate-600'}`}>
                  {item.label}
                </span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] font-medium text-slate-600">{item.completionRate}%</span>
                  {item.overdueTasks > 0 && (
                    <div className="flex items-center gap-0.5">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      <span className="text-[10px] font-bold text-red-500">{item.overdueTasks}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${item.color} transition-all duration-500`}
                  style={{ 
                    width: `${item.completionRate}%`,
                    opacity: hoveredIndex === null || isHovered ? 1 : 0.4
                  }}
                />
              </div>

              {/* Hover Tooltip */}
              {isHovered && (
                <div className="absolute -top-6 right-0 px-2 py-0.5 bg-slate-800 text-white text-[9px] rounded-md z-20 whitespace-nowrap">
                  {item.completionRate}% done • {item.overdueTasks} overdue
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsAnalytic;