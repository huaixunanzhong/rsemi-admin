import { Navigate } from 'react-router-dom'
import { Layout } from '@/layout'
import Home from '@/pages/Home'

const rootRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
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
