import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Home from './pages/home'

import 'swiper/css'
import 'swiper/css/navigation'

function App (): React.ReactElement {
  return (
    // <Swiper
    //   direction='vertical'
    //   modules={[Pagination]}
    // >
    //   <SwiperSlide><Work /></SwiperSlide>
    //   <SwiperSlide><p>Hello</p></SwiperSlide>
    // </Swiper>
    <Home />
  )
}

export default App
