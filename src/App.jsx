import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider } from 'react-toast-notifications';
import AuthContext from "./components/context/AuthContext";
import SignIn from "./components/form/SignIn"
import SignUp from "./components/form/SignUp"
import Home from "./components/Home/Home"
import Layout from "./components/Layout/Layout"
import Manu from "./components/manu/Manu"
import Order from "./components/order/Order"
// import PrivertRoute from "./components/utility/PrivertRoute"

import DashBoardManu from "./components/dashboardUser/DashBoardManu";
import Cart from "./components/dashboardUser/cart/Cart";
import Reserve from "./components/dashboardUser/reservation/Reserve";
 import Payment from "./components/dashboardUser/payment/Payment";
import Review from "./components/dashboardUser/review/Review";
import Admin from "./components/dashboardAdmin/Admin/Admin";
import Alluser from "./components/dashboardAdmin/AllUser/Alluser";
import AddItems from "./components/dashboardAdmin/addItems/AddItems";
import ManageItems from "./components/dashboardAdmin/manageItem/ManageItems";
import PaymentHistory from "./components/dashboardUser/paymentHistory/PaymentHistory";



const queryClient = new QueryClient()


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'manu',
          element: <Manu />,
        },
        {
          path: 'order',
          element: <Order />,
        },
        {
          path: 'order/:category',
          element: <Order />
        }
      ]
    },

    {
      path: '/dashboard',
      element: <DashBoardManu />,
      children: [
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'reservation',
          element: <Reserve />
        },
        {
          path: "payment",
          element:<Payment/>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory/>
        },
        {
          path: 'review',
          element: <Review />
        },
        
        {
          path: 'adminHome',
          element:<Admin/>
        },
        {
          path: 'addItems',
          element:<AddItems/>
        },
        {
          path: 'allUser',
          element:<Alluser/>
        },
        {
          path: 'manageItems',
          element:<ManageItems/>
        },
      ]
    },

    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
  ])

  return (
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </QueryClientProvider>
    </AuthContext>
  )
}

export default App
