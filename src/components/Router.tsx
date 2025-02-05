import { createBrowserRouter, Outlet } from 'react-router';
import Recipies from './Recipies';
import Menu from './Menu';
import AddRecipe from './AddRecipe';
import HomePage from './HomePage';

const Router = createBrowserRouter([{
    path: '/',
    element: <><Menu /><Outlet /></>,
    children: [
        { path: 'recipies', element: <Recipies /> },
        { path: 'addRecipe', element: <AddRecipe /> },
        { path: 'homePage', element: <HomePage/>}
    ]
    }]); 

export default Router;