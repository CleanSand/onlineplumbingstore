import Shop from './pages/Shop'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from './utils/const'
import ProductPage from './pages/ProductPage'
import Basket from './pages/Basket'
import Profile from './pages/Profile'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />
  },
  {
    path: PROFILE_ROUTE,
    Component: <Profile />
  },
]
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop />
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: <ProductPage />
  }
]