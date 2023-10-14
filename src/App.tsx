import type { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import Home from './pages/home'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

interface SwiperElement extends HTMLElement {
  progress: string
}

const interleaveOffset = 0.75

function App (): ReactElement {
  return (
    <Swiper
      direction='vertical'
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='mySwiper'
      onProgress={(swiper, progress) => {
        const swiperElements = swiper.slides as SwiperElement[]

        for (let i = 0; i < swiperElements.length; i++) {
          const currentSlide = swiperElements[i]
          const innerOffset = swiper.height * interleaveOffset
          const innerTranslate = progress * innerOffset
          currentSlide.style.transform = `translate3d(0, ${innerTranslate}px, 0)`
        }
      }}
      onSetTransition={(swiper, transitionSpeed) => {
        const swiperElements = swiper.slides as SwiperElement[]

        for (let i = 0; i < swiperElements.length; i++) {
          const transitionSpeedStr = transitionSpeed.toString()
          const currentSlide = swiperElements[i]
          currentSlide.style.transition = transitionSpeedStr + 'ms'
          currentSlide.style.transition = transitionSpeedStr + 'ms'
        }
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide><Home /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default App
