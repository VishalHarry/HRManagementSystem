import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Dashboard from './Components/Employee/Dasboard.jsx';
import EmployeeProjectEngagement from './Components/Employee/EmployeeProjectEngagement .jsx';
import ViewPayslip from './Components/Employee/ViewPaySlip.jsx';
import EmpPerformance from './Components/EmpPerformance .jsx';
import AdminDashboard from './Components/AdminInfo/AdminDashboard.jsx';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element:<Login/>
       
      },
      {
        path: '/dashboard', 
        element: <Dashboard />
      },
      {
        path:'/employee-engagement',
        element:<EmployeeProjectEngagement/>
      },
      {
        path:'/empPerformance',
        element:<EmpPerformance/>
      },
      {
        path:'/admindash',
        element:<AdminDashboard/>
      }
      
    ]
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
