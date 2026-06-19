import { useState } from 'react';
import { PieChart } from 'lucide-react';
import { weeklyData } from '../../data/dashboardData';

function WeeklyOverview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const total = weeklyData.reduce((sum, item) => sum + item.value, 0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const gap = 4; // gap antar segment dalam pixel

  // Hitung total arc yang available (dikurangi gap)
  const totalGap = gap * weeklyData.length;
  const availableCircumference = Math.max(0, circumference - totalGap);
  
  let accumulated = 0;

  const segments = weeklyData.map((item) => {
    const percentage = total === 0 ? 0 : item.value / total;
    const arcLength = availableCircumference * percentage;
    
    // stroke-dasharray: [panjang arc, sisa circumference]
    const strokeDasharray = `${arcLength} ${circumference}`;
    const strokeDashoffset = -accumulated - (gap * 0.5); // offset + half gap
    
    accumulated += arcLength + gap;
    
    return { ...item, strokeDasharray, strokeDashoffset, percentage };
  });

  const hoveredItem = hoveredIndex !== null ? segments[hoveredIndex] : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-violet-50 rounded-lg">
          <PieChart className="w-4 h-4 text-violet-600" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">Task Overview</h2>
          <p className="text-[10px] text-slate-500">Weekly status</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Donut Chart */}
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="18"
            />
            {segments.map((segment, index) => (
              <circle
                key={index}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                strokeWidth="18"
                className={segment.color}
                strokeDasharray={segment.strokeDasharray}
                strokeDashoffset={segment.strokeDashoffset}
                strokeLinecap="butt"
                style={{ 
                  opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {hoveredItem ? (
              <>
                <span className={`text-lg font-bold ${hoveredItem.textColor}`}>{hoveredItem.value}</span>
                <span className="text-[9px] text-slate-500">{hoveredItem.label}</span>
              </>
            ) : (
              <>
                <span className="text-xl font-bold text-slate-800">{total}</span>
                <span className="text-[9px] text-slate-400">Total</span>
              </>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2">
          {segments.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-[11px] text-slate-600">{item.label}</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-700">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyOverview;