import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          // do something async, eg: fetch data from an API
          return {
            title: 'Home',
          };
        },
      },
      {
        path: '/about',
        element: <About />,
        action: async ({ params, request }) => {
          // do something sync, eg: read form data from request and request API then return data
          const formData = await request.formData();
          return {
            title: 'About',
            comment: formData.get('comment'),
          };
        },
      },
    ],
  },
]);

export default router;
