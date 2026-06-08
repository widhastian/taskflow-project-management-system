import { BarChart3, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

function Dashboard() {
  const stats = [
    { label: 'Total Projects', value: 12, icon: BarChart3, color: 'bg-blue-500' },
    { label: 'Completed Tasks', value: 48, icon: CheckCircle2, color: 'bg-green-500' },
    { label: 'In Progress', value: 15, icon: Clock, color: 'bg-yellow-500' },
    { label: 'Overdue', value: 3, icon: AlertCircle, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Selamat Datang di TaskFlow!</h2>
        <p className="text-slate-500 mt-1">Ringkasan aktivitas project management Anda.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-100 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;