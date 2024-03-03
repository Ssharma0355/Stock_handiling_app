import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import User from './Components/getUser/User';
import UpdateUser from "./Components/updateUser/UpdateUser"
import AddUser from "./Components/addUser/AddUser"
import Footer from './Components/Footer';
import Profile from './Components/Profile';

function App() {

  const route =createBrowserRouter([
  {
    path:'/',
    element:<User />,
  },
  {
    path:"/add",
    element:<AddUser/>,
  },
  {
    path:"/edit",
    element:<UpdateUser />,
  },
  {
    path:"/delete",
    element:"Delete user",
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}> 
      <Profile />
      <Footer />
      </RouterProvider>
      
    </div>
  );
}

export default App;
