import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layout/Main';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import AddService from '../page/AddService';
import DetailsService from '../page/DetailsService';
import MyService from '../page/MyService';
import Private from './Private';
import Services from '../page/Services';
import ReviewForm from '../components/reviews/ReviewForm';

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
        element: (
          <Private>
            <AddService></AddService>
          </Private>
        ),
      },
      {
        path: '/review/:id',
        element: <ReviewForm></ReviewForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },

      {
        path: '/myservice',
        element: <MyService></MyService>,
      },

      {
        path: '/serivec',
        element: <Services></Services>,
        loader: () => fetch('http://localhost:5000/service'),
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
  {
    path: '/seedetails/:id',
    element: (
      <Private>
        <DetailsService></DetailsService>
      </Private>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
  },
]);

export default router;
