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
        loader: async () => {
          await new Promise((resolve) => {
            const timeout = setTimeout(() => {
              console.log('loader delay 1s')

              resolve()
              clearTimeout(timeout)
            }, 100)
          })
          return 'hhhhh'
        },
      },
      {
        path: '*',
        element: <Navigate to="/exception/404" replace />,
      },
    ],
  },
]

export default rootRoutes
