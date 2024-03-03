

import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';

import Root from "./Routes/Root";
import LogIn from './Components/Auth/LogIn';
import SignUp from './Components/Auth/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Category",
        element: <Category />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
      
  },
 
]);
function App() {
  return (
    <>
   < RouterProvider router={router} />
    </>
  );
}

export default App;
