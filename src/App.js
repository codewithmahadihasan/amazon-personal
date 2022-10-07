import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Eror from './Components/Eror';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import ManageInventory from './Components/ManageInventory';
import Orders from './Components/Orders';
import Shops from './Components/Shop/Shops';
import { productAndCard } from './Components/utilities/Loder';
import Main from './Main/Main';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [

        { path: '/', element: <Home></Home> },
        { path: 'order', loader: productAndCard, element: <Orders></Orders> },
        { path: 'shop', loader: () => fetch('products.json'), element: <Shops></Shops> },
        { path: 'manageinventory', loader: productAndCard, element: <ManageInventory></ManageInventory> },
        { path: 'login', element: <Login></Login> },
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
