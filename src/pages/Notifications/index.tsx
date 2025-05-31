
const Notifications = () => {
  return (
    <main id="notifications-main" className="p-8 max-w-2xl mx-auto">
      <section id="notifications-header" className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-1">
              Notifications &amp; Reminders
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Stay up to date with all your reminders and app notifications.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm font-medium">Reminders</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                id="main-reminder-toggle"
                className="sr-only peer"

              />
              <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
            </label>
          </div>
        </div>
      </section>
      <section id="notification-list-section" className="space-y-12">
        <div id="noti-group-today">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-primary text-lg material-symbols-outlined">
              today
            </span>
            <h3 className="text-lg font-semibold text-accent">Today</h3>
          </div>
          <div className="space-y-3">
            <div
              id="noti-card-1"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-primary text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">Task Reminder</span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded hover:bg-secondary transition-colors"
                    >
                      <span className="text-accent material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"

                      />
                      <div className="w-9 h-5 bg-gray-200 peer-checked:bg-primary/90 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-4" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-700 mt-1 mb-2 text-[16px]">
                  Submit project report before 6:00 PM today.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>
                  <span>Due 5:45 PM</span>
                </div>
              </div>
            </div>
            <div
              id="noti-card-2"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-primary text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">
                    App Notification
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded hover:bg-secondary transition-colors"
                    >
                      <span className="text-accent material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"

                      />
                      <div className="w-9 h-5 bg-gray-200 peer-checked:bg-primary/90 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-4" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-700 mt-1 mb-2 text-[16px]">
                  Your weekly productivity stats are ready.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  <span>Today, 9:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="noti-group-upcoming">
          <div className="flex items-center space-x-3 mb-4 mt-2">
            <span className="text-primary text-lg material-symbols-outlined">
              event_available
            </span>
            <h3 className="text-lg font-semibold text-accent">Upcoming</h3>
          </div>
          <div className="space-y-3">
            <div
              id="noti-card-3"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-primary text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">Task Reminder</span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded hover:bg-secondary transition-colors"
                    >
                      <span className="text-accent material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"

                      />
                      <div className="w-9 h-5 bg-gray-200 peer-checked:bg-primary/90 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-4" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-700 mt-1 mb-2 text-[16px]">
                  Prepare slides for Monday’s team meeting.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>
                  <span>Tomorrow, 8:00 AM</span>
                </div>
              </div>
            </div>
            <div
              id="noti-card-4"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-primary text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">
                    App Notification
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded hover:bg-secondary transition-colors"
                    >
                      <span className="text-accent material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-checked:bg-primary/90 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-4" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-700 mt-1 mb-2 text-[16px]">
                  System update scheduled for Sunday at 11:00 PM.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  <span>Sunday, 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="noti-group-past">
          <div className="flex items-center space-x-3 mb-4 mt-2">
            <span className="text-primary text-lg material-symbols-outlined">
              event_available
            </span>
            <h3 className="text-lg font-semibold text-accent">Past</h3>
          </div>
          <div className="space-y-3">
            <div
              id="noti-card-5"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group opacity-60"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-gray-300 text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-500">Task Reminder</span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded cursor-not-allowed"
                    >
                      <span className="text-gray-300 material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-not-allowed">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-100 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-400 mt-1 mb-2 text-[16px]">
                  Call with client finished yesterday.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>
                  <span>Yesterday, 4:00 PM</span>
                </div>
              </div>
            </div>
            <div
              id="noti-card-6"
              className="flex items-start bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-lg transition-shadow group opacity-60"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-gray-300 text-lg material-symbols-outlined">
                  notifications
                </span>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-500">
                    App Notification
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      title="Snooze"
                      className="px-2 py-1 rounded cursor-not-allowed"
                    >
                      <span className="text-gray-300 material-symbols-outlined">
                        schedule
                      </span>
                    </button>
                    <label className="inline-flex relative items-center cursor-not-allowed">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-100 rounded-full" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full" />
                    </label>
                  </div>
                </div>
                <div className="text-gray-400 mt-1 mb-2 text-[16px]">
                  Password changed successfully.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Notifications