import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Home from './pages/home'
import React from 'react'

import 'swiper/css'
import 'swiper/css/navigation'

function App (): React.ReactElement {
  return (
    <Swiper
      direction='vertical'
      modules={[Pagination]}
    >
      <SwiperSlide><Home /></SwiperSlide>
      <SwiperSlide><p>Hello</p></SwiperSlide>
    </Swiper>
  )
}

export default App
