import './index.scss'
import logo from '../../assets/logo.svg'
import toggle from '../../assets/hamburger.svg'

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav__left'>
        <div className='nav__logo'>
          <img src={logo} alt='logo' />
        </div>
        <p className='nav__text'>
          Hallo, <span>LIQID!</span>
        </p>
      </div>
      <div className='nav__right'>
        <img className='nav__toggle' src={toggle} alt='' />
      </div>
    </nav>
  )
}

export default Header

