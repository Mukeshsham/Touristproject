import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Packages from './Packages';
import TuristRegister from './TuristRegister';
import Update from './Update';
import Login from './Login';
import Register from './Register';


const routerConfig = createBrowserRouter(
  [
    {path:'/Home',element:<Home/>},
    {path:'/About',element:<About/>},
    {path:'/Services',element:<Services/>},
    {path:'/Packages',element:<Packages/>},
    {path:'/TuristRegister',element:<TuristRegister/>},
    {path:'/Update',element:<Update/>},
    {path:'/Login',element:<Login/>},
    {path:'Register',element:<Register/>}


  ]
)
function App() {
  return (
   <RouterProvider router= {routerConfig}/>
  )
}

export default App;
