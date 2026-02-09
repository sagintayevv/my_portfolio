import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
