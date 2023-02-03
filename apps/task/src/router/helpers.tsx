import { createBrowserRouter } from 'react-router-dom';

import { HomeModule, AboutModule } from '@my-third-app/task/modules';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeModule />,
  },
  {
    path: '/about',
    element: <AboutModule />,
  },
]);
