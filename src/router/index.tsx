import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Game } from "../pages/Game/Game";
import { Result } from "../pages/Result/Result";
import { Statistics } from "../pages/Statistics/Statistics";
import { ContentContainer } from "../features/ContentContainer/ContentContainer";

const home = {
    path: '/',
    element: <Home />,
}

const game = {
    path: '/game',
    element: <Game />,
}

const result = {
    path: '/result',
    element: <Result />,
}

const statistics = {
    path: '/statistics',
    element: <Statistics />,
}

const root = [{
    path: '/',
    element: <ContentContainer />,
    children: [ home, game, result, statistics ]
}]

export const ROUTER = createBrowserRouter(root)