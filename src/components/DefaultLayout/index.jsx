import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
// import { useDefaultLayoutViewModel } from './useDefaultLayoutViewModel'

export const DefaultLayout = () => {
  // const {  } = useDefaultLayoutViewModel()

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
