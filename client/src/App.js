import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

function App() {

const route = createBrowserRouter([
  {
    path:"/",
    element: <User/>
  },
  {
    path:"/add",
    element: <Add/>
  },
  {
    path:"/edit/:id",
    element: <Edit/>
  },
  

])

  return (
   <RouterProvider router={route}>
     <div className="App">
      <h1>hello</h1>
    </div>
   </RouterProvider>
  );
}

export default App;
