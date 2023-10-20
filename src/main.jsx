import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/store.js';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DigimonList from './features/digimon/DigimonList.jsx';
import DigimonDetails from './features/digimon/DigimonDetails.jsx';
import Root from './layout/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <DigimonList />,
        children: [{ path: '/:id', element: <DigimonDetails /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
