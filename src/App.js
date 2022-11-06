import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Eror from './Components/Eror';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import ManageInventory from './Components/ManageInventory';
import Orders from './Components/Orders';
import Shops from './Components/Shop/Shops';
import SignUp from './Components/SignUp';
import { productAndCard } from './Components/utilities/Loder';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute';
import Shiping from './Shiping';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [

        { path: '/', element: <Home></Home> },
        { path: 'order', loader: productAndCard, element: <Orders></Orders> },
        { path: 'shop', element: <Shops></Shops> },
        { path: 'manageinventory', loader: productAndCard, element: <PrivateRoute><ManageInventory></ManageInventory></PrivateRoute> },
        { path: 'login', element: <Login></Login> },
        { path: 'shiping', element: <PrivateRoute><Shiping></Shiping></PrivateRoute> },
        { path: 'registration', element: <SignUp></SignUp> },
        { path: '*', element: <Eror></Eror> }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
