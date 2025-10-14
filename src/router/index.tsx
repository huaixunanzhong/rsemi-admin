import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import rootRoutes from './routes.tsx'

export default function Router() {
  const router = createBrowserRouter(rootRoutes)

  return <RouterProvider router={router} />
}
