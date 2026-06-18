import { User } from 'lucide-react';
import { collaborators } from '../../data/dashboardData';

function Collaborators() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <User className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Collaborators</h2>
            <p className="text-xs text-slate-500">{collaborators.length} members</p>
          </div>
        </div>
        <button className="text-xs font-medium text-primary-600 hover:text-primary-700">Invite</button>
      </div>

      <div className="flex-1 divide-y divide-slate-100 overflow-y-auto max-h-[320px]">
        {collaborators.map((person) => (
          <div key={person.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {person.avatar}
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${person.status === 'online' ? 'bg-green-500' : person.status === 'away' ? 'bg-yellow-500' : 'bg-slate-400'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800">{person.name}</p>
              <p className="text-xs text-slate-500">{person.role}</p>
            </div>
            <p className="text-xs font-medium text-primary-600 truncate max-w-[100px]">{person.project}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collaborators;