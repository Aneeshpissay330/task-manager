
const Dashboard = () => {
  return (
    <main id="dashboard-main" className="p-8 max-w-6xl mx-auto">
      {/* Greeting */}
      <section id="greeting-section" className="mb-8">
        <div>
          <h2 className="text-2xl font-bold text-accent mb-1">
            Good morning, John!
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Here's a snapshot of your productivity for today.
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section
        id="summary-cards-section"
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
      >
        {/* Tasks Due Today */}
        <div
          id="card-today"
          className="bg-white rounded-xl p-5 flex items-center shadow-sm border border-gray-100"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mr-4 text-xl">
            <span className="material-symbols-outlined">today</span>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-medium">Tasks Due Today</p>
            <span className="text-2xl font-bold text-accent">4</span>
          </div>
        </div>

        {/* Overdue Tasks */}
        <div
          id="card-overdue"
          className="bg-white rounded-xl p-5 flex items-center shadow-sm border border-gray-100"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-500 mr-4 text-xl">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-medium">Overdue Tasks</p>
            <span className="text-2xl font-bold text-red-500">1</span>
          </div>
        </div>

        {/* Completed Tasks */}
        <div
          id="card-completed"
          className="bg-white rounded-xl p-5 flex items-center shadow-sm border border-gray-100"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/40 text-primary mr-4 text-xl">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-medium">
              Completed Tasks
            </p>
            <span className="text-2xl font-bold text-primary">17</span>
          </div>
        </div>
      </section>

      {/* Analytics and Upcoming Deadlines */}
      <section
        id="analytics-deadlines-section"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Productivity Chart */}
        <div
          id="analytics-card"
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 col-span-1 lg:col-span-2 flex flex-col min-h-[340px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-accent">
              Productivity Overview
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              <span>This week</span>
            </div>
          </div>
          <div className="h-56 flex items-center justify-center">
            <canvas
              id="productivity-bar-chart"
              className="w-full max-w-[95%] h-[224px] box-border block"
            ></canvas>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div
          id="upcoming-deadlines-card"
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col min-h-[340px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-accent">
              Upcoming Deadlines
            </h3>
            <button className="text-xs font-medium text-primary hover:text-accent">
              View All
            </button>
          </div>
          <ul className="divide-y divide-gray-100 flex-grow">
            <li className="flex items-center py-3">
              <div className="flex-grow">
                <span className="text-gray-900 font-medium">
                  Submit Project Proposal
                </span>
                <div className="flex items-center text-xs text-gray-500 mt-0.5">
                  <span className="material-symbols-outlined mr-1 text-base">
                    schedule
                  </span>
                  Today, 5:00 PM
                </div>
              </div>
              <span className="bg-secondary/50 text-accent text-xs font-semibold px-2 py-0.5 rounded ml-3">
                High
              </span>
            </li>
            <li className="flex items-center py-3">
              <div className="flex-grow">
                <span className="text-gray-900 font-medium">Team Meeting</span>
                <div className="flex items-center text-xs text-gray-500 mt-0.5">
                  <span className="material-symbols-outlined mr-1 text-base">
                    schedule
                  </span>
                  Tomorrow, 10:00 AM
                </div>
              </div>
              <span className="bg-secondary/50 text-accent text-xs font-semibold px-2 py-0.5 rounded ml-3">
                Medium
              </span>
            </li>
            <li className="flex items-center py-3">
              <div className="flex-grow">
                <span className="text-gray-900 font-medium">
                  Review Client Feedback
                </span>
                <div className="flex items-center text-xs text-gray-500 mt-0.5">
                  <span className="material-symbols-outlined mr-1 text-base">
                    schedule
                  </span>
                  In 2 days
                </div>
              </div>
              <span className="bg-secondary/50 text-accent text-xs font-semibold px-2 py-0.5 rounded ml-3">
                Low
              </span>
            </li>
            <li className="flex items-center py-3">
              <div className="flex-grow">
                <span className="text-gray-900 font-medium">
                  Finalize Slides
                </span>
                <div className="flex items-center text-xs text-gray-500 mt-0.5">
                  <span className="material-symbols-outlined mr-1 text-base">
                    schedule
                  </span>
                  In 3 days
                </div>
              </div>
              <span className="bg-secondary/50 text-accent text-xs font-semibold px-2 py-0.5 rounded ml-3">
                High
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
