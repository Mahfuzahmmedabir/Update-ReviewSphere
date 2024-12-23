import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layout/Main';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import AddService from '../page/AddService';
import DetailsService from '../page/DetailsService';

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
      // {
      //   path: '/seedetails/:id',
      //   element:
      //   // loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      // },
      {
        path: '/seedetails/:id',
        element: <DetailsService></DetailsService>,
        loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
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
