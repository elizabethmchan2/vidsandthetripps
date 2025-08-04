import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InfiniteRecord from './screens/InfiniteRecord/InfiniteRecord.tsx';
import Home from './screens/Home/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AskVids from './screens/AskVids/AskVids.tsx';
import Bio from './screens/Bio/Bio.tsx';
import Writings from './screens/Writings/Writings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <InfiniteRecord />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'ask-vids',
    element: <AskVids />,
  },
  {
    path: 'bio',
    element: <Bio />,
  },
  {
    path: 'writings',
    element: <Writings />,
  },
  // TODO: add 404 screen
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
