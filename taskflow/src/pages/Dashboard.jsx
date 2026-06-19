import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import ProjectsList from '../components/dashboard/ProjectsList';
import ProjectTimeline from '../components/dashboard/ProjectTimeline';
import Collaborators from '../components/dashboard/Collaborators';
import ProjectsAnalytic from '../components/dashboard/ProjectsAnalytic';
import WeeklyOverview from '../components/dashboard/WeeklyOverview';
import NextReminder from '../components/dashboard/NextReminder';
import TodayTasks from '../components/dashboard/TodayTasks';
import ActivityFeed from '../components/dashboard/ActivityFeed';

function Dashboard() {
  return (
    <div className="h-[calc(100vh-4rem)] max-w-7xl mx-auto flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 mb-4">
        <DashboardHeader />
      </div>

      {/* Main Content - 2 Columns Scrollable */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-0">
        
        {/* Kolom Kiri (2/3) - Scrollable */}
        <div className="lg:col-span-3 overflow-y-auto pr-1 space-y-4 pb-4">
          <StatsGrid />
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
            <div className="lg:col-span-2">
              <ProjectsList />
            </div>
            <div className="lg:col-span-1">
              <WeeklyOverview />
            </div>
          </div>
          
          <ProjectTimeline />

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
            <div className="lg:col-span-2">
              <Collaborators />
            </div>
            <div className="lg:col-span-1">
              <ProjectsAnalytic />
            </div>
          </div>
        </div>

        {/* Kolom Kanan (1/3) - Scrollable */}
        <div className="lg:col-span-1 overflow-y-auto pr-1 space-y-4 pb-4">
          <NextReminder />
          <TodayTasks />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;