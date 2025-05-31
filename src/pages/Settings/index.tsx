
const Settings = () => {
  return (
    <main id="settings-main" className="py-10 px-4 sm:px-8 max-w-3xl mx-auto">
      <section
        id="settings-header-section"
        className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <div>
          <h2 className="text-2xl font-bold text-accent mb-1">Settings</h2>
          <p className="text-gray-500 text-sm font-medium">
            Customize your Task Manager experience and integrations.
          </p>
        </div>
      </section>
      <div
        id="settings-tabs-block"
        className="bg-white border border-grayborder rounded-2xl shadow-sm"
      >
        <div
          id="settings-tabs-header"
          className="flex border-b border-grayborder px-6 pt-4"
        >
          <button
            id="tab-general-btn"
            className="tab-btn text-accent font-semibold px-4 py-2 border-b-2 border-primary transition-all -mb-px"
            data-tab="general"
          >
            <span className="mr-2 material-symbols-outlined">
              settings
            </span>
            General
          </button>
          <button
            id="tab-notifications-btn"
            className="tab-btn text-gray-500 font-medium px-4 py-2 border-b-2 border-transparent hover:text-primary transition-all -mb-px"
            data-tab="notifications"
          >
            <span className="mr-2 material-symbols-outlined">
              notifications
            </span>
            Notifications
          </button>
          <button
            id="tab-appearance-btn"
            className="tab-btn text-gray-500 font-medium px-4 py-2 border-b-2 border-transparent hover:text-primary transition-all -mb-px"
            data-tab="appearance"
          >
            <span className="mr-2 material-symbols-outlined">
              palette
            </span>
            Appearance
          </button>
          <button
            id="tab-sync-btn"
            className="tab-btn text-gray-500 font-medium px-4 py-2 border-b-2 border-transparent hover:text-primary transition-all -mb-px"
            data-tab="sync"
          >
            <span className="mr-2 material-symbols-outlined">
              cloud_upload
            </span>
            Sync
          </button>
        </div>
        <div id="settings-tabs-contents" className="p-6">
          {/* General Tab */}
          <div id="settings-tab-general" className="settings-tab-content block">
            <form className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    person
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Show completed tasks
                    </div>
                    <div className="text-xs text-gray-400">
                      Display tasks marked as complete in your lists.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"

                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    shield
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Require password on sensitive actions
                    </div>
                    <div className="text-xs text-gray-400">
                      Extra layer of security when editing or deleting.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    language
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Language
                    </div>
                    <div className="text-xs text-gray-400">
                      Choose your preferred language for the app.
                    </div>
                  </div>
                </div>
                <select className="px-3 py-2 text-sm rounded-md border border-grayborder focus:ring-primary/30 focus:outline-none bg-background">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                  <option>Deutsch</option>
                </select>
              </div>
            </form>
            <div className="flex justify-end pt-6">
              <button className="bg-primary text-white rounded-md px-6 py-2 font-semibold hover:bg-accent transition-colors">
                Save Changes
              </button>
            </div>
          </div>
          {/* Notifications Tab */}
          <div
            id="settings-tab-notifications"
            className="settings-tab-content hidden"
          >
            <form className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    notifications
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Enable notifications
                    </div>
                    <div className="text-xs text-gray-400">
                      Receive reminders for tasks and deadlines.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"

                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    mail
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Email notifications
                    </div>
                    <div className="text-xs text-gray-400">
                      Weekly summary &amp; important updates.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    smartphone
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Push notifications
                    </div>
                    <div className="text-xs text-gray-400">
                      For real-time alerts on your device.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"

                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Notify me about:
                </label>
                <div className="flex flex-col gap-2 pl-2">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="rounded border-grayborder accent-primary"

                    />
                    Task due dates
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="rounded border-grayborder accent-primary"

                    />
                    Overdue tasks
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="rounded border-grayborder accent-primary"
                    />
                    Project changes
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="rounded border-grayborder accent-primary"
                    />
                    New comments
                  </label>
                </div>
              </div>
            </form>
            <div className="flex justify-end pt-6">
              <button className="bg-primary text-white rounded-md px-6 py-2 font-semibold hover:bg-accent transition-colors">
                Save Changes
              </button>
            </div>
          </div>
          {/* Appearance Tab */}
          <div id="settings-tab-appearance" className="settings-tab-content hidden">
            <form className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    dark_mode
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Dark mode
                    </div>
                    <div className="text-xs text-gray-400">
                      Toggle between light and dark themes.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    id="theme-toggle"
                    type="checkbox"
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    text_fields
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Font size
                    </div>
                    <div className="text-xs text-gray-400">
                      Adjust interface text size for readability.
                    </div>
                  </div>
                </div>
                <select className="px-3 py-2 text-sm rounded-md border border-grayborder focus:ring-primary/30 focus:outline-none bg-background">
                  <option>Small</option>
                  <option >Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    format_paint
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Accent color
                    </div>
                    <div className="text-xs text-gray-400">
                      Choose the highlight color for the interface.
                    </div>
                  </div>
                </div>
                <select className="px-3 py-2 text-sm rounded-md border border-grayborder focus:ring-primary/30 focus:outline-none bg-background">
                  <option >Blue</option>
                  <option>Green</option>
                  <option>Orange</option>
                  <option>Purple</option>
                </select>
              </div>
            </form>
            <div className="flex justify-end pt-6">
              <button className="bg-primary text-white rounded-md px-6 py-2 font-semibold hover:bg-accent transition-colors">
                Save Changes
              </button>
            </div>
          </div>
          {/* Sync Tab */}
          <div id="settings-tab-sync" className="settings-tab-content hidden">
            <form className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    cloud_upload
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Cloud sync
                    </div>
                    <div className="text-xs text-gray-400">
                      Automatically sync tasks to the cloud.
                    </div>
                  </div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"

                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-secondary">
                    link
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Integrations
                    </div>
                    <div className="text-xs text-gray-400">
                      Connect with your favorite tools.
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-primary font-medium hover:bg-primary hover:text-white transition"
                >
                  <span className="material-symbols-rounded text-secondary">
                    cloud_upload
                  </span>{" "}
                  Google Drive
                </button>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Manage Integrations:
                </label>
                <div className="flex flex-col gap-3 pl-2">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-rounded text-accent text-lg">
                      cloud_sync
                    </span>
                    <span className="text-sm text-gray-700 flex-1">Dropbox</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-rounded text-accent text-lg">
                      forum
                    </span>
                    <span className="text-sm text-gray-700 flex-1">Slack</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"

                      />
                      <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-rounded text-accent text-lg">
                      view_kanban
                    </span>
                    <span className="text-sm text-gray-700 flex-1">Trello</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-end pt-6">
              <button className="bg-primary text-white rounded-md px-6 py-2 font-semibold hover:bg-accent transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Settings