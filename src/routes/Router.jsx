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
import MyReview from '../components/reviews/MyReview';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<h2>Not found page 404</h2>,
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
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
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
