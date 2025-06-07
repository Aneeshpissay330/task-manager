import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router'; // use `react-router-dom` for web apps
import { useAppSelector } from './app/hooks';
import Layout from './layouts/Layout';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import Welcome from './pages/WelcomeScreen'; // 💡 new welcome screen
import Register from './pages/Register';
import AccountVerified from './pages/AccountVerified';
import VerifyAccount from './pages/VerifyAccount';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Main (authenticated) routes
const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'categories', element: <Categories /> },
      { path: 'tasks', element: <Tasks /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

// Auth (unauthenticated) routes — no layout
const authRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Welcome /> }, // 🌟 now shows welcome screen
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'register/verify', element: <VerifyAccount /> },
      { path: 'verify/:token', element: <AccountVerified /> },
      { path: 'forgot', element: <ForgotPassword /> },
      { path: 'reset/:token', element: <ResetPassword /> },
    ],
  },
]);

const App = () => {
  const token = useAppSelector((state) => state.user.token);
  return <RouterProvider router={token ? mainRouter : authRouter} />;
};

export default App;
