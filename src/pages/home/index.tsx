import type { ReactElement } from 'react'
import styles from './index.module.scss'
import { cloudAssets } from '../../assets/images/clouds'
import { randomNumberBetween, sampleArray } from '../../lib/utilities'
import BlurredCircles from '../../components/blurred_circles'
import MonicaPortrait from '../../assets/images/monica-portrait.png'
import PinkButton from '../../components/pink-button'
import ArrowsDown from '../../components/arrows-down'
import { useSwiper } from 'swiper/react'

function Home (): ReactElement {
  const swiper = useSwiper()

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.cloud}
        style={{
          backgroundImage: `url('${sampleArray(cloudAssets)}')`,
          top: '20%',
          left: `${randomNumberBetween(10, 90)}%`
        }}
      />
      <div
        className={styles.cloud}
        style={{
          backgroundImage: 'url(\'cloud-fixed2.png\')',
          bottom: '20%',
          left: `${randomNumberBetween(10, 90)}%`
        }}
      />
      {cloudAssets.map((cloud) => (
        <div
          key={cloud}
          className={styles.cloud}
          style={{
            backgroundImage: `url('${sampleArray(cloudAssets)}')`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * -200 - 200}px`
          }}
        />
      ))}
      <div className={styles.content}>
        <div className={styles['about-container']}>
          <img className={styles.portrait} src={MonicaPortrait} alt='Monica Portrait' />
          <div className={styles['contact-container']}>
            <PinkButton>Email</PinkButton>
            <PinkButton>LinkedIn</PinkButton>
          </div>
          <div className={styles.about}>
            <p className={styles.title}>About Me</p>
            <p>
              Hello, I'm Monica, a passionate emerging UX Designer. Through several engaging user interface projects, I've discovered my true love for crafting seamless design experiences. To me, UX design is an exhilarating journey, allowing me to shape remarkable user interactions and create a harmonious flow that truly resonates.
            </p>
          </div>
        </div>
        <div className={styles.circleWrapper}>
          <BlurredCircles />
        </div>
      </div>
      <div className={styles.arrows}>
        <ArrowsDown onClick={() => swiper.slideNext()} />
      </div>
    </div>
  )
}

export default Home
