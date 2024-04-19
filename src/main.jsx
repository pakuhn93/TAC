// boiler plate react stuff
import React from 'react' ;
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// router stuff 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages included on the website
import Home from './pages/Home/Home.jsx';
import GameSignup from './pages/GameSignup/GameSignup.jsx';
import Information from './pages/Information/Information.jsx';
import Lore from './pages/Lore/Lore.jsx';
import Map from './pages/Map/Map.jsx';
import Merch from './pages/Merch/Merch.jsx';
import CharacterCreation from './pages/Information/CharacterCreation/CharacterCreation.jsx';
import Announcements from './pages/Announcements/Announcements.jsx';

// initialize the router (similar to express)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/announcements',
        element: <Announcements />
      },
      {
        path: '/gamesignup',
        element: <GameSignup />
      },
      {
        path: '/information',
        element: <Information />
      },
      {
        path: '/charactercreation',
        element: <CharacterCreation />
      },
      {
        path: '/lore',
        element: <Lore />
      },
      {
        path: '/map',
        element: <Map />
      },
      {
        path: '/merch',
        element: <Merch />
      },
    ]
  }
]);

// renders the current HTML document with the appropriate ReactDOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
);