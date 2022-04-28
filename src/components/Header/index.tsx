import React, { useLayoutEffect, useState } from 'react'
import DesktopNav from '../Navbar/DesktopNav'
import MobileNav from '../Navbar/MobileNav'

const Header = () => {
  const [screenWidth, setScreenWidth] = useState<number | 0>(0)

  const handler = () => setScreenWidth(window.innerWidth)

  useLayoutEffect(() => {

    window.addEventListener('load', handler)
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('load', handler)
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <div>
    {screenWidth < 620 ? <MobileNav /> : <DesktopNav />}
    </div>
  )
}

export default Header

