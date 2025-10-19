import { Navigate } from 'react-router-dom'
import { Layout } from '@/layout'
import Home from '@/pages/Home'

const rootRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // 匹配根路径 '/'
        element: <Navigate to="/auction-vehicle-current-auctions" replace />,
      },
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: '*',
        element: <Navigate to="/exception/404" replace />,
      },
    ],
  },
]

export default rootRoutes
