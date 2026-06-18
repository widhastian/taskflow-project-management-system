import { CalendarDays } from 'lucide-react';
import { timelineProjects } from '../../data/dashboardData';

function ProjectTimeline() {
  // Hitung range tanggal (dari project paling awal sampai paling akhir)
  const allDates = timelineProjects.flatMap(p => [new Date(p.startDate), new Date(p.endDate)]);
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));
  
  // Tambah buffer 5 hari di kiri & kanan
  minDate.setDate(minDate.getDate() - 5);
  maxDate.setDate(maxDate.getDate() + 5);
  
  const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);
  
  // Generate label bulan
  const getMonthLabels = () => {
    const labels = [];
    const current = new Date(minDate);
    while (current <= maxDate) {
      labels.push({
        label: current.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }),
        position: ((current - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100,
      });
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
    return labels;
  };

  const getBarStyle = (project) => {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    const left = ((start - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;
    const width = ((end - start) / (1000 * 60 * 60 * 24) / totalDays) * 100;
    return { left: `${left}%`, width: `${width}%` };
  };

  const getProgressWidth = (project) => {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    const totalDuration = (end - start) / (1000 * 60 * 60 * 24);
    const progressDays = (totalDuration * project.progress) / 100;
    return (progressDays / totalDuration) * 100;
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <CalendarDays className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Project Timeline</h2>
            <p className="text-xs text-slate-500">Gantt overview</p>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Month Labels */}
        <div className="relative h-6 mb-2 border-b border-slate-100">
          {monthLabels.map((m, i) => (
            <span
              key={i}
              className="absolute text-[10px] text-slate-400 font-medium -translate-x-1/2"
              style={{ left: m.position + '%' }}
            >
              {m.label}
            </span>
          ))}
        </div>

        {/* Today Line */}
        <div 
          className="absolute top-6 bottom-0 w-px bg-red-400 z-10"
          style={{ 
            left: `${((new Date('2026-06-18') - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100}%` 
          }}
        >
          <div className="absolute -top-1 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
          <span className="absolute -top-5 -translate-x-1/2 text-[9px] text-red-500 font-medium">Today</span>
        </div>

        {/* Project Bars */}
        <div className="space-y-4 pt-2">
          {timelineProjects.map((project) => {
            const barStyle = getBarStyle(project);
            const progressWidth = getProgressWidth(project);
            
            return (
              <div key={project.id} className="relative h-10">
                {/* Project Name (kiri, fixed width) */}
                <div className="absolute left-0 top-0 w-36 h-full flex items-center z-10">
                  <span className="text-xs font-medium text-slate-700 truncate pr-2">{project.name}</span>
                </div>

                {/* Bar Container */}
                <div className="absolute left-36 right-0 h-full flex items-center">
                  <div className="relative w-full h-7">
                    {/* Background track */}
                    <div 
                      className="absolute h-7 rounded-lg bg-slate-100 overflow-hidden"
                      style={{ left: barStyle.left, width: barStyle.width }}
                    >
                      {/* Progress fill */}
                      <div 
                        className={`h-full ${project.color} opacity-80`}
                        style={{ width: `${progressWidth}%` }}
                      />
                    </div>

                    {/* Start & End date labels */}
                    <span 
                      className="absolute text-[9px] text-slate-400 -bottom-4"
                      style={{ left: barStyle.left }}
                    >
                      {new Date(project.startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>
                    <span 
                      className="absolute text-[9px] text-slate-400 -bottom-4"
                      style={{ left: `calc(${barStyle.left} + ${barStyle.width})`, transform: 'translateX(-100%)' }}
                    >
                      {new Date(project.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>

                    {/* Progress tooltip on hover */}
                    <div 
                      className="absolute h-7 rounded-lg opacity-0 hover:opacity-100 transition-opacity cursor-pointer group"
                      style={{ left: barStyle.left, width: barStyle.width }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded-lg whitespace-nowrap">
                        {project.progress}% • {project.status}
                      </div>
                    </div>
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