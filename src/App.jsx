import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing-page';
import AuthPage from './pages/auth-page';
import DashboardPage from './pages/dashboard-page';
import LinkPage from './pages/link-page';
import RedirectLink from './pages/redirect-link';
import UrlProvider from './context/UrlContext';
import RequireAuth from './components/require-auth';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/auth",
        element:
          <AuthPage />
      },
      {
        path: "/dashboard",
        element: (<RequireAuth>
          <DashboardPage />
        </RequireAuth>)
      },
      {
        path: "/link/:id",
        element: (<RequireAuth>
          <LinkPage />
        </RequireAuth>)
      },
      {
        path: "/:id",
        element: <RedirectLink />
      }
    ]
  }
]);


function App() {

  return (
    <UrlProvider>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </UrlProvider>
  );
}

export default App;
