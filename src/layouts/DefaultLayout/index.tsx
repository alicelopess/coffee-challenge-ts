import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, LayoutMainContentContainer } from './style'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutMainContentContainer>
        <Outlet />
      </LayoutMainContentContainer>
    </LayoutContainer>
  )
}
