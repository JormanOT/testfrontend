import { createBrowserRouter } from 'react-router-dom'
import {
    SignIn,
    SignUp,
  } from "@clerk/clerk-react";
  import App from '../App';

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/sign-up/*',
      element: <SignUp routing="path" path="/sign-up" />,
    },
    {
      path: '/sign-in/*',
      element: <SignIn routing="path" path="/sign-in" />,
    }
  ]);
  
  export default routes;