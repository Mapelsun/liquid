import logoFullRed from '../../assets/logo-full-red.svg'
import './index.scss'

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer row'>
        <img className='menu-image' src={logoFullRed} alt='logo' />
      </div>
    </div>
  )
}

export default Footer
