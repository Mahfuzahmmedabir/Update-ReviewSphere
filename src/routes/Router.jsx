import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layout/Main';
import Home from '../page/Home';

import AddService from '../page/AddService';
import DetailsService from '../page/DetailsService';
import MyService from '../page/MyService';
import Private from './Private';
import Services from '../page/Services';
import ReviewForm from '../components/reviews/ReviewForm';
import MyReview from '../components/reviews/MyReview';
import NotFound from '../page/NotFound/NotFound';
import Login from '../socialPage/Login';
import Register from '../socialPage/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch('https://review-sphere-server.vercel.app/service'),
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
          fetch(
            `https://review-sphere-server.vercel.app/service/${params.id}`
          ),
      },

      {
        path: '/myservice',
        element: <MyService></MyService>,
      },

      {
        path: '/serivec',
        element: <Services></Services>,
        loader: () =>
          fetch('https://review-sphere-server.vercel.app/service'),
      },
      {
        path: '/myreviews',
        element: <MyReview></MyReview>,
      },
     
    ],
  },
  {
      path: '/register',
      element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
 
  {
    path: '/Details/:id',
    element: (
      <Private>
        <DetailsService></DetailsService>
      </Private>
    ),
    loader: ({ params }) =>
      fetch(
        `https://review-sphere-server.vercel.app/service/${params.id}`
      ),
  },
]);

export default router;
