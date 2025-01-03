import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Dashboard from './Components/Employee/Dasboard.jsx';
import EmployeeProjectEngagement from './Components/Employee/EmployeeProjectEngagement .jsx';

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
