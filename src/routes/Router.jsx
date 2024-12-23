import { createBrowserRouter, Route } from 'react-router-dom';
import Main from '../components/layout/Main';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import AddService from '../page/AddService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/service'),
      },
      {
        path: '/addservice',
        element: <AddService></AddService>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
]);

export default router;
