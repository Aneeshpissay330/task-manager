// src/types/dashboard.ts
export interface DeadlineItem {
  title: string;
  dueText: string;       // e.g. "Today, 5:00 PM" or "In 2 days"
  priority: "High" | "Medium" | "Low";
}

export interface DashboardStats {
  dueToday: number;
  overdue: number;
  completed: number;
}

export interface DashboardProps {
  userName: string;
  stats: DashboardStats;
  productivityPeriod: string;
  upcomingDeadlines: DeadlineItem[];
  // You could also pass in chart data or callbacks here if needed
}
