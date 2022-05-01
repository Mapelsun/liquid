import { Link, NavLink } from 'react-router-dom'
import logoWhite from '../../../assets/logo-white.svg'
import exit from '../../../assets/exit.svg'
import { ReactComponent as HomeIcon } from '../../../assets/home.svg'
import { ReactComponent as UserIcon } from '../../../assets/user.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg'
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
          <Link to='/' className='nav__link'>
            <img src={exit} alt='logout icon' />
            <span>Logout</span>
          </Link>
        </div>
        <div className='nav__right'>
          <NavLink to='/' className='nav__link'>
            <HomeIcon />
            <span>Home</span>
          </NavLink>
          <NavLink to='/profile' className='nav__link'>
            <UserIcon />
            <span>Profile</span>
          </NavLink>
          <NavLink to='/settings' className='nav__link'>
            <SettingsIcon />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default DesktopNav

