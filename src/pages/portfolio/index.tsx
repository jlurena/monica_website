import { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Navigation } from 'swiper/modules'
import styles from './index.module.scss'
import restaurantAppImg from '../../assets/images/work/restaurant-app.png'
import nutritionAppImg from '../../assets/images/work/nutrition-app.png'

function Portfolio (): ReactElement {
  return (
    <Swiper
      className={styles.swiper}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 0.5
      }}
      navigation={{
        disabledClass: styles['disabled-nav']
      }}
      pagination={{
        clickable: true
      }}
      modules={[Mousewheel, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={restaurantAppImg} alt='Restaurant App project' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={nutritionAppImg} alt='Kids Nutrition App project' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Portfolio
