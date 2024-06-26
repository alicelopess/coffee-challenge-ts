import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Cart/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart">
          <Route path="" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
