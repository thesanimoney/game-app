import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import GamePage from "../pages/GamePage.tsx";
import GameDetailsPage from "../pages/GameDetailsPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <HomePage/>, errorElement: <ErrorPage/>, children: [
            {path: '', element: <GamePage/>},
            {path: 'games/:slug', element: <GameDetailsPage/>},
        ]}
])

export default routes