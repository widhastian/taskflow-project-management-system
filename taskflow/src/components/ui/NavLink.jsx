import { NavLink as RouterNavLink } from 'react-router-dom'; // ✅ dari react-router-dom

function NavLink({ to, children, icon: Icon, collapsed }) {
  return (
    <RouterNavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-sidebar-active text-white shadow-sm'
            : 'text-slate-300 hover:bg-sidebar-hover hover:text-white'
        } ${collapsed ? 'justify-center px-2' : ''}`
      }
    >
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
      {!collapsed && <span className="whitespace-nowrap">{children}</span>}
    </RouterNavLink>
  );
}

export default NavLink;