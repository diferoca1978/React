
import { RouterProvider} from 'react-router-dom'
import {router} from './router/AppRouter'




export const HeroesApp = () => {
  return (
      <RouterProvider router = {router} />
  )
}
