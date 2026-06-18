import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import ProjectsList from '../components/dashboard/ProjectsList';
import NextReminder from '../components/dashboard/NextReminder';
import TodayTasks from '../components/dashboard/TodayTasks';
import Collaborators from '../components/dashboard/Collaborators';
import WeeklyOverview from '../components/dashboard/WeeklyOverview';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import ProjectTimeline from "../components/dashboard/ProjectTimeline";

function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <DashboardHeader />

      {/* Stats Grid */}
      <StatsGrid />

      {/* ROW 1: 3 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom 1 (2/3): Projects List */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <WeeklyOverview />
          <ProjectTimeline />
          <ProjectsList />

        </div>

        {/* Kolom 2 (1/3): Next Reminder + Today's Tasks */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <NextReminder />
          <TodayTasks />
          <Collaborators />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;