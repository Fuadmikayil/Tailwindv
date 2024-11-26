import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers'
import "./i18n"
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}/>
)
