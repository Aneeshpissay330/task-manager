import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Main content area with left padding for sidebar */}
      <main className="pl-16 w-full min-h-screen">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
