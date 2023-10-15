import type { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import gsap from 'gsap'

import Home from './pages/home'
import Portfolio from './pages/portfolio'

import styles from './app.module.scss'

interface SwiperElement extends HTMLElement {
  progress: number
}

const interleaveOffset = 0.75
const getBulletIcons = (index: number, className: string): string => {
  return [
    `<svg tabindex="0" aria-label="Portfolio" class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`,
    `<svg tabindex="0" aria-label="Portfolio" class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>`
  ][index]
}

function App (): ReactElement {
  return (
    <Swiper
      className={styles.swiper}
      speed={800}
      direction='vertical'
      watchSlidesProgress
      mousewheel={{ releaseOnEdges: true }}
      pagination={{
        bulletClass: styles['swiper-pagination-bullet'],
        bulletActiveClass: styles['swiper-pagination-bullet-active'],
        clickable: true,
        el: '#app-pagination',
        renderBullet: (index, className) => getBulletIcons(index, className)
      }}
      modules={[Mousewheel, Pagination]}
      onProgress={(swiper, _) => {
        const swiperElements = swiper.slides as SwiperElement[]

        for (let i = 0; i < swiperElements.length; i++) {
          const currentSlide = swiperElements[i]
          const progress = currentSlide.progress
          const innerOffset = swiper.height * interleaveOffset
          const innerTranslate = progress * innerOffset
          gsap.set(currentSlide.querySelector('.slide-inner'), { y: innerTranslate })
        }
      }}
      onSetTransition={(swiper, transitionSpeed) => {
        const swiperElements = swiper.slides as SwiperElement[]

        for (let i = 0; i < swiperElements.length; i++) {
          const transitionSpeedStr = transitionSpeed.toString()
          const currentSlide = swiperElements[i]
          currentSlide.style.transition = transitionSpeedStr + 'ms'
          const innerSlide = currentSlide.querySelector('.slide-inner') as HTMLElement
          if (innerSlide != null) innerSlide.style.transition = transitionSpeedStr + 'ms'
        }
      }}
    >
      <SwiperSlide>
        <div className='slide-inner'><Home /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-inner'><Portfolio /></div>
      </SwiperSlide>
      <div
        id='app-pagination'
        className={`swiper-pagination swiper-pagination-vertical swiper-pagination-bullets ${styles['swiper-pagination-vertical']}`}
      />
    </Swiper>
  )
}

export default App
