import { NavLink } from 'react-router-dom'
import logoWhite from '../../../assets/logo-white.svg'
import exit from '../../../assets/exit.svg'
import home from '../../../assets/home.svg'
import user from '../../../assets/user.svg'
import settings from '../../../assets/settings.svg'
import './index.scss'

const DesktopNav = () => {
  return (
    <div className='container'>
      <nav className='nav row'>
        <div className='nav__left'>
          <div className='nav__logo'>
            <img src={logoWhite} alt='logo' />
          </div>
          <p className='nav__text'>
            Hallo, <span>LIQID!</span>
          </p>
          <div className='nav__divider'></div>
          <NavLink to='/' className='nav__link'>
            <img src={exit} alt='logout icon' />
            <span>Logout</span>
          </NavLink>
        </div>
        <div className='nav__right'>
          <NavLink to='/' className='nav__link'>
            <img src={home} alt='home icon' />
            <span>Home</span>
          </NavLink>
          <NavLink to='/profile' className='nav__link'>
            <img src={user} alt='profile icon' />
            <span>Profile</span>
          </NavLink>
          <NavLink to='/settings' className='nav__link'>
            <img src={settings} alt='settings icon' />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default DesktopNav

