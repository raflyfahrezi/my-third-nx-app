import { createBrowserRouter } from 'react-router-dom';

import { HomeModule } from '@my-third-app/contact/modules';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeModule />,
  },
]);
