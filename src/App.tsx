import './App.css'
import Router from './components/Router'
import { RouterProvider } from 'react-router'
import MyUserContext from './components/MyUserContext'
import Login from './components/Login';

function App() {
  return (
    <MyUserContext>
      <Login/>
      <RouterProvider router={Router} />
    </MyUserContext>
  );
}

export default App;
