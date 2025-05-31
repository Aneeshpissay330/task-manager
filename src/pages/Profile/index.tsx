
const Profile = () => {
  return (
    <main id="user-profile-main" className="py-8 px-4 sm:px-8 max-w-3xl mx-auto">
      <section
        id="profile-header-section"
        className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <div>
          <h2 className="text-2xl font-bold text-accent mb-1">User Profile</h2>
          <p className="text-gray-500 text-sm font-medium">
            Update your personal details, preferences, and security settings.
          </p>
        </div>
      </section>
      <div
        id="profile-cards-grid"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Personal Details Card */}
        <div
          id="card-personal-details"
          className="bg-white border border-grayborder rounded-2xl p-6 shadow-sm flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="relative">
              <img
                id="avatar-preview"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                className="w-20 h-20 rounded-full object-cover border-4 border-secondary shadow"
                alt="Profile Avatar"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-accent transition-colors"
              >
                <span className="text-sm material-symbols-outlined">photo_camera</span>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <div className="font-semibold text-lg text-accent mb-1">
                Change Avatar
              </div>
              <div className="text-xs text-gray-400">JPEG, PNG. Max 2MB.</div>
            </div>
          </div>
          <form id="personal-details-form" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="John Doe"
                defaultValue="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="you@email.com"
                defaultValue="john.doe@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="+1 234 567 8901"
                defaultValue="+1 234 567 8901"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-primary text-white rounded-md py-2 font-semibold hover:bg-accent transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
        {/* Security Card */}
        <div
          id="card-security"
          className="bg-white border border-grayborder rounded-2xl p-6 shadow-sm flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary text-lg material-symbols-outlined">
              lock
            </span>
            <div className="font-semibold text-lg text-accent">
              Change Password
            </div>
          </div>
          <form id="change-password-form" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="current-password"
                className="text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                id="current-password"
                type="password"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="Enter current password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="new-password"
                className="text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                className="px-4 py-2 rounded-md border border-grayborder focus:ring-2 focus:ring-primary/30 focus:outline-none text-sm"
                placeholder="Confirm new password"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-primary text-white rounded-md py-2 font-semibold hover:bg-accent transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>
        {/* Preferences Card */}
        <div
          id="card-preferences"
          className="bg-white border border-grayborder rounded-2xl p-6 shadow-sm flex flex-col gap-6 md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary text-lg material-symbols-outlined">
              tune
            </span>
            <div className="font-semibold text-lg text-accent">Preferences</div>
          </div>
          <form id="preferences-form" className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-secondary material-symbols-outlined">
                    notifications
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Enable Notifications
                  </span>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="notifications-toggle"
                    className="sr-only peer"
                    defaultChecked={true}
                  />
                  <div className="w-10 h-5 bg-gray-200 peer-checked:bg-primary rounded-full transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-200 rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-secondary material-symbols-outlined">
                    font_download
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Font Size
                  </span>
                </div>
                <select
                  id="font-size-select"
                  className="px-3 py-2 text-sm rounded-md border border-grayborder focus:ring-primary/30 focus:outline-none bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="md" selected={true}>
                    Medium
                  </option>
                  <option value="lg">Large</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-secondary material-symbols-outlined">
                    language
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Language
                  </span>
                </div>
                <select
                  id="language-select"
                  className="px-3 py-2 text-sm rounded-md border border-grayborder focus:ring-primary/30 focus:outline-none bg-background"
                >
                  <option value="en" selected={true}>
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6 pt-4 md:pt-0">
              <div className="flex items-center gap-2">
                <span className="text-secondary material-symbols-outlined">
                  info
                </span>
                <span className="text-sm text-gray-500">
                  Customize how you receive updates and adjust your experience.
                </span>
              </div>
            </div>
          </form>
          <div className="flex justify-end">
            <button
              type="submit"
              form="preferences-form"
              className="bg-primary text-white rounded-md px-6 py-2 font-semibold hover:bg-accent transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile