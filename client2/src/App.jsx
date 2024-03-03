import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import User from './Components/User';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import Login from './Components/Login';
import Graph from './Components/Graph';

function App() {

  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/',
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/edit/:id",
      element: <UpdateUser />,
    },
    
    {
      path:"/stocks",
      element:<Graph/>
    }
    
    // {
    //   path: "/delete",
    //   element: "Delete user",
    // }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}>
      
        
      </RouterProvider>

    </div>
  );
}

export default App;
