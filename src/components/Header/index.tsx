import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/logo-white.svg'
import logoRed from '../../assets/logo-red.svg'
import logoFull from '../../assets/logo-full.svg'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import exit from '../../assets/exit.svg'
import home from '../../assets/home.svg'
import user from '../../assets/user.svg'
import settings from '../../assets/settings.svg'
import './index.scss'

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    console.log(navRef.current?.classList.toggle('active'))
    setIsActive(!isActive)
  }

  return (
    <div className='wrapper' ref={navRef}>
      <nav className='nav'>
        <div className='nav__left'>
          <div className='nav__logo'>
            <img src={isActive ? logoRed : logoWhite} alt='logo' />
          </div>
          <p className='nav__text'>
            Hallo, <span>LIQID!</span>
          </p>
        </div>
        <div className='nav__right'>
          <img
            className='nav__toggle'
            src={isActive ? close : hamburger}
            alt=''
            onClick={handleClick}
          />
        </div>
      </nav>

      <nav className='subNav'>
        <Link to='/' className='subNav__link'>
          <img src={exit} alt='logout icon' />
          <span>Logout</span>
        </Link>
        <Link to='/' className='subNav__link'>
          <img src={home} alt='home icon' />
          <span>Home</span>
        </Link>
        <Link to='/profile' className='subNav__link'>
          <img src={user} alt='profile icon' />
          <span>Profile</span>
        </Link>
        <Link to='/settings' className='subNav__link'>
          <img src={settings} alt='settings icon' />
          <span>Settings</span>
        </Link>
      </nav>

      <img className='menu-image' src={logoFull} alt='logo' />
    </div>
  )
}

export default Header

