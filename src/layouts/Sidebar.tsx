import { useNavigate, useLocation } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { title: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { title: "Categories", icon: "folder", path: "/categories" },
    { title: "Tasks", icon: "checklist", path: "/tasks" },
    { title: "Profile", icon: "group", path: "/profile" },
    { title: "Notifications", icon: "notifications", path: "/notifications" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      id="sidebar"
      className="fixed left-0 top-0 bottom-0 w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8 z-10"
    >
      {/* App Icon */}
      <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
        <span className="material-symbols-outlined text-sm">check</span>
      </div>

      {/* Menu Icons */}
      <div className="space-y-6">
        {menu.map((item) => (
          <div
            key={item.title}
            title={item.title}
            onClick={() => navigate(item.path)}
            className={`w-8 h-8 rounded-md flex items-center justify-center cursor-pointer transition-colors ${
              isActive(item.path)
                ? "text-primary bg-background"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Settings Icon */}
      <div className="mt-auto">
        <div
          title="Settings"
          onClick={() => navigate("/settings")}
          className={`w-8 h-8 rounded-md flex items-center justify-center cursor-pointer transition-colors ${
            isActive("/settings")
              ? "text-primary bg-background"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
