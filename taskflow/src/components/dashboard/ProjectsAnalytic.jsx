import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { projectAnalytics } from '../../data/dashboardData';

function ProjectsAnalytic() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const maxValue = Math.max(...projectAnalytics.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-1.5 bg-cyan-50 rounded-lg">
          <BarChart3 className="w-4 h-4 text-cyan-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Projects Analytic</h2>
          <p className="text-[10px] text-slate-500">Tasks per project</p>
        </div>
      </div>

      <div className="space-y-3">
        {projectAnalytics.map((item, index) => {
          const widthPercent = (item.value / maxValue) * 100;
          const isHovered = hoveredIndex === index;

          return (
            <div key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[11px] font-medium transition-colors ${isHovered ? 'text-slate-800' : 'text-slate-600'}`}>
                  {item.label}
                </span>
                <span className={`text-[11px] font-bold transition-all ${isHovered ? 'scale-110 text-slate-800' : 'text-slate-500'}`}>
                  {item.value}
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.color} transition-all duration-500`}
                  style={{ width: `${widthPercent}%`, opacity: hoveredIndex === null || isHovered ? 1 : 0.4 }}
                />
              </div>
              {isHovered && (
                <div className="absolute -top-6 right-0 px-2 py-0.5 bg-slate-800 text-white text-[9px] rounded-md">
                  {item.value} tasks
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
