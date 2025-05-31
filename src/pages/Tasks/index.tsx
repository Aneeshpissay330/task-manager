
const Tasks = () => {
  return (
    <div id="dashboard" className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-accent">Tasks</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-white rounded-md border border-gray-200 text-sm font-medium text-gray-600 flex items-center space-x-2 hover:bg-gray-50">
            <span className="material-symbols-outlined text-base">filter_list</span>
            <span>Filter</span>
          </button>
          <button className="px-3 py-2 bg-white rounded-md border border-gray-200 text-sm font-medium text-gray-600 flex items-center space-x-2 hover:bg-gray-50">
            <span className="material-symbols-outlined text-base">sort</span>
            <span>Sort</span>
          </button>
        </div>
      </div>

      <div id="task-input" className="bg-white rounded-lg shadow-sm mb-6 p-4">
        <div className="flex items-center">
          <input
            type="text"
            id="new-task"
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            id="add-task"
            className="ml-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors flex items-center"
          >
            <span className="material-symbols-outlined mr-2 text-base">add</span>
            Add
          </button>
        </div>
      </div>

      <div
        id="filter-tabs"
        className="flex space-x-1 mb-4 bg-white rounded-lg p-1 shadow-sm"
      >
        <button className="flex-1 py-2 px-4 rounded-md bg-primary text-white font-medium">
          All
        </button>
        <button className="flex-1 py-2 px-4 rounded-md text-gray-600 font-medium hover:bg-gray-100">
          Active
        </button>
        <button className="flex-1 py-2 px-4 rounded-md text-gray-600 font-medium hover:bg-gray-100">
          Completed
        </button>
      </div>

      <div id="task-list" className="space-y-3">
        {/* Task 1 */}
        <div
          id="task-1"
          className="bg-white rounded-lg shadow-sm p-4 flex items-center"
        >
          <div className="w-6 h-6 rounded-md border border-primary flex items-center justify-center mr-3">
            <span className="material-symbols-outlined text-transparent">check</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800 font-medium">Complete project proposal</p>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
              <span>Today</span>
              <span className="mx-2">•</span>
              <span className="bg-secondary/30 text-accent px-2 py-0.5 rounded text-xs">
                High Priority
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
            <button className="text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
        </div>

        {/* Task 2 */}
        <div
          id="task-2"
          className="bg-white rounded-lg shadow-sm p-4 flex items-center"
        >
          <div className="w-6 h-6 rounded-md border border-primary flex items-center justify-center mr-3 bg-primary/10">
            <span className="material-symbols-outlined text-primary text-base">check</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800 font-medium line-through">Schedule team meeting</p>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
              <span>Yesterday</span>
              <span className="mx-2">•</span>
              <span className="bg-secondary/30 text-accent px-2 py-0.5 rounded text-xs">
                Medium Priority
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
            <button className="text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
        </div>

        {/* Task 3 */}
        <div
          id="task-3"
          className="bg-white rounded-lg shadow-sm p-4 flex items-center"
        >
          <div className="w-6 h-6 rounded-md border border-primary flex items-center justify-center mr-3">
            <span className="material-symbols-outlined text-transparent">check</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800 font-medium">Review client feedback</p>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
              <span>Tomorrow</span>
              <span className="mx-2">•</span>
              <span className="bg-secondary/30 text-accent px-2 py-0.5 rounded text-xs">
                Low Priority
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
            <button className="text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
        </div>

        {/* Task 4 */}
        <div
          id="task-4"
          className="bg-white rounded-lg shadow-sm p-4 flex items-center"
        >
          <div className="w-6 h-6 rounded-md border border-primary flex items-center justify-center mr-3">
            <span className="material-symbols-outlined text-transparent">check</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800 font-medium">Prepare presentation slides</p>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
              <span>In 2 days</span>
              <span className="mx-2">•</span>
              <span className="bg-secondary/30 text-accent px-2 py-0.5 rounded text-xs">
                High Priority
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
            <button className="text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
        </div>
      </div>

      <div id="task-summary" className="mt-6 bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">3 tasks remaining</p>
          <button className="text-primary hover:text-accent text-sm font-medium">
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
