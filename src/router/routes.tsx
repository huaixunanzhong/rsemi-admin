import { Navigate } from 'react-router-dom'
import { Layout } from '@/layout'

const routes = [
  {
    path: '/',
    element: <div>home</div>,
  },
]
const rootRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes,
      {
        path: '*',
        element: <Navigate to="/exception/404" replace />,
      },
    ],
  },
]

export default rootRoutes
