import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Router,
    Link,
} from "react-router-dom";
import Visit from './components/Visit/Visit';
import Eventos from './components/Eventos/Eventos';
import Comida from './components/Comida/Comida';
import Hotel from './components/Hotel/Hotel';
import Halloween from './components/Eventos/Hallowee/Halloween';
import Navidad from './components/Eventos/Navidad/Navidad';
import SemanaSanta from './components/Eventos/SemanaSanta/SemanaSanta';

const router = createBrowserRouter([
    {
        path: "/",
        element: ( <App/>
        ),
    },
    {
        path: "/lugar",
        element: <Visit/>,
    },
    {
        path: "/eventos",
        element: <Eventos/>,
    },
    {
        path: "/comida",
        element: <Comida/>,
    },
    {
        path: "/hoteles",
        element: <Hotel/>,
    },
    {
        path: "/eventos/brujas",
        element: <Halloween/>,
    },
    {
        path: "/eventos/navidad",
        element: <Navidad/>,
    },
    {
        path: "/eventos/santa",
        element: <SemanaSanta/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
