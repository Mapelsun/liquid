import arrowRight from '../../assets/arrow-right.svg'
import './index.scss'

const Info = () => {
  return (
    <section className='info'>
      <div className='info__left'>
        <h2>Welcome to your personal area.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis. Aenean feugiat commodo quam,
          vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
          eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
          Nunc blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris
          ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis
          orci id dui consectetur elementum. Nulla et lacus massa.
        </p>
      </div>
      <div className='info__right'>
        <div className='info__box'>
          <h3>Investments</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum elit id auctor mollis. Aenean feugiat commodo quam,
            vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
            eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
          </p>
        </div>
        <div className='info__box'>
          <h3>Stocks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum elit id auctor mollis.
          </p>
          <button>
            <span>Explore</span>
            <img src={arrowRight} alt='' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Info

