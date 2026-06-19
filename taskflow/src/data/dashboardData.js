// Data dummy untuk Dashboard

export const stats = [
  {
    label: 'Active Projects',
    value: 8,
    total: 12,
    change: '+3',
    trend: 'up',
    icon: 'Briefcase',
    gradient: 'from-blue-500 to-blue-700',
    textColor: 'text-blue-600',
    lightColor: 'bg-blue-50',
    isGradient: true,
    showTotal: true,
  },
  {
    label: 'Total Projects',
    value: 24,
    change: '+5',
    trend: 'up',
    icon: 'FolderKanban',
    textColor: 'text-indigo-600',
    lightColor: 'bg-indigo-50',
    isGradient: false,
  },
  {
    label: 'Projects Completed',
    value: 16,
    change: '+2',
    trend: 'up',
    icon: 'CheckCircle2',
    textColor: 'text-green-600',
    lightColor: 'bg-green-50',
    isGradient: false,
  },
  {
    label: 'Pending Projects',
    value: 4,
    change: '-1',
    trend: 'down',
    icon: 'PauseCircle',
    textColor: 'text-amber-600',
    lightColor: 'bg-amber-50',
    isGradient: false,
  },
];

export const recentProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Redesign UI/UX company profile',
    progress: 75,
    status: 'In Progress',
    dueDate: '2026-06-15',
    members: 4,
    tasks: { completed: 12, total: 16 },
  },
  {
    id: 2,
    name: 'Mobile App v2.0',
    description: 'Development fitur baru mobile app',
    progress: 30,
    status: 'In Progress',
    dueDate: '2026-07-01',
    members: 6,
    tasks: { completed: 5, total: 20 },
  },
  {
    id: 3,
    name: 'API Integration',
    description: 'Integrasi API payment gateway',
    progress: 100,
    status: 'Completed',
    dueDate: '2026-05-20',
    members: 3,
    tasks: { completed: 8, total: 8 },
  },
  {
    id: 4,
    name: 'Database Migration',
    description: 'Migrasi ke PostgreSQL',
    progress: 45,
    status: 'In Progress',
    dueDate: '2026-06-30',
    members: 2,
    tasks: { completed: 6, total: 14 },
  },
];

export const todayTasks = [
  { id: 1, title: 'Review PR #42', project: 'Website Redesign', priority: 'high', completed: false, time: '09:00' },
  { id: 2, title: 'Update API Documentation', project: 'API Integration', priority: 'medium', completed: false, time: '11:30' },
  { id: 3, title: 'Fix Login Bug', project: 'Mobile App v2.0', priority: 'high', completed: true, time: '08:00' },
  { id: 4, title: 'Design Meeting', project: 'Website Redesign', priority: 'low', completed: false, time: '14:00' },
  { id: 5, title: 'Deploy to Staging', project: 'Database Migration', priority: 'medium', completed: false, time: '16:00' },
  { id: 6, title: 'Code Review', project: 'Mobile App v2.0', priority: 'high', completed: false, time: '10:00' },
  { id: 7, title: 'Write Test Cases', project: 'API Integration', priority: 'low', completed: true, time: '07:30' },
];

export const activities = [
  { id: 1, user: 'John Doe', action: 'completed task', target: 'Design Homepage', project: 'Website Redesign', time: '5 menit yang lalu', type: 'complete' },
  { id: 2, user: 'Jane Smith', action: 'created project', target: 'Mobile App v2.0', project: null, time: '1 jam yang lalu', type: 'create' },
  { id: 3, user: 'Mike Johnson', action: 'commented on', target: 'API Documentation', project: 'API Integration', time: '2 jam yang lalu', type: 'comment' },
  { id: 4, user: 'Sarah Wilson', action: 'moved task to', target: 'In Progress', project: 'Database Migration', time: '3 jam yang lalu', type: 'move' },
  { id: 5, user: 'John Doe', action: 'uploaded file', target: 'Mockup v2.fig', project: 'Website Redesign', time: '5 jam yang lalu', type: 'upload' },
];

export const reminders = [
  { id: 1, title: 'Client Presentation', project: 'Website Redesign', time: '14:00', priority: 'high' },
  { id: 2, title: 'Team Standup Meeting', project: 'Mobile App v2.0', time: '09:00', priority: 'medium' },
  { id: 3, title: 'Sprint Review', project: 'API Integration', time: '16:00', priority: 'high' },
  { id: 4, title: 'Design Review', project: 'Website Redesign', time: '11:00', priority: 'medium' },
];

export const collaborators = [
  { id: 1, name: 'John Doe', role: 'Frontend Dev', project: 'Website Redesign', avatar: 'JD', status: 'online' },
  { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', project: 'Mobile App v2.0', avatar: 'JS', status: 'online' },
  { id: 3, name: 'Mike Johnson', role: 'Backend Dev', project: 'API Integration', avatar: 'MJ', status: 'offline' },
  { id: 4, name: 'Sarah Wilson', role: 'Project Manager', project: 'Database Migration', avatar: 'SW', status: 'online' },
  { id: 5, name: 'Alex Brown', role: 'DevOps', project: 'Website Redesign', avatar: 'AB', status: 'away' },
];

export const timelineProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    startDate: '2026-05-01',
    endDate: '2026-06-15',
    progress: 75,
    status: 'In Progress',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Mobile App v2.0',
    startDate: '2026-05-20',
    endDate: '2026-07-01',
    progress: 30,
    status: 'In Progress',
    color: 'bg-purple-500',
  },
  {
    id: 3,
    name: 'API Integration',
    startDate: '2026-04-15',
    endDate: '2026-05-20',
    progress: 100,
    status: 'Completed',
    color: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Database Migration',
    startDate: '2026-05-10',
    endDate: '2026-06-30',
    progress: 45,
    status: 'In Progress',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    name: 'Cloud Infrastructure',
    startDate: '2026-06-01',
    endDate: '2026-07-15',
    progress: 10,
    status: 'Planning',
    color: 'bg-slate-400',
  },
];

export const weeklyData = [
  { label: 'To Do', value: 8, color: 'bg-slate-400', textColor: 'text-slate-500' },
  { label: 'In Progress', value: 15, color: 'bg-blue-500', textColor: 'text-blue-600' },
  { label: 'In Review', value: 5, color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  { label: 'Done', value: 48, color: 'bg-green-500', textColor: 'text-green-600' },
];

export const projectAnalytics = [
  {
    label: 'Website Redesign',
    completionRate: 75,
    overdueTasks: 2,
    color: 'bg-blue-500',
    textColor: 'text-blue-600'
  },
  {
    label: 'Mobile App v2.0',
    completionRate: 30,
    overdueTasks: 5,
    color: 'bg-purple-500',
    textColor: 'text-purple-600'
  },
  {
    label: 'API Integration',
    completionRate: 100,
    overdueTasks: 0,
    color: 'bg-green-500',
    textColor: 'text-green-600'
  },
  {
    label: 'Database Migration',
    completionRate: 45,
    overdueTasks: 1,
    color: 'bg-orange-500',
    textColor: 'text-orange-600'
  },
];
