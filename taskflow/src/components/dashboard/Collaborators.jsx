import { User } from 'lucide-react';
import { collaborators } from '../../data/dashboardData';

function Collaborators() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-green-50 rounded-lg">
            <User className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Collaborators</h2>
            <p className="text-[10px] text-slate-500">{collaborators.length} members</p>
          </div>
        </div>
        <button className="text-[10px] font-medium text-primary-600 hover:text-primary-700">Invite</button>
      </div>

      <div className="flex-1 divide-y divide-slate-100">
        {collaborators.map((person) => (
          <div key={person.id} className="p-3 hover:bg-slate-50 transition-colors flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                {person.avatar}
              </div>
              <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${person.status === 'online' ? 'bg-green-500' : person.status === 'away' ? 'bg-yellow-500' : 'bg-slate-400'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-800">{person.name}</p>
              <p className="text-[10px] text-slate-500">{person.role}</p>
            </div>
            <p className="text-[10px] font-medium text-primary-600 truncate max-w-[200px]">{person.project}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collaborators;
