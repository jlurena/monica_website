import { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import styles from './index.module.scss'
import restaurantAppImg from '../../assets/images/work/restaurant-app.png'
import nutritionAppImg from '../../assets/images/work/nutrition-app.png'

function Portfolio (): ReactElement {
  return (
    <div className={styles.container}>
      <Swiper
        mousewheel={{ releaseOnEdges: true }}
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide>
          <div className='slide-inner'><img src={restaurantAppImg} alt='Restaurant App project' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-inner'><img src={nutritionAppImg} alt='Kids Nutrition App project' /></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
