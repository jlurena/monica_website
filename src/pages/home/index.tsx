import type { ReactElement } from 'react'
import styles from './index.module.scss'
import { cloudAssets } from '../../assets/images/clouds'
import { randomNumberBetween, sampleArray } from '../../lib/utilities'
import BlurredCircles from '../../components/blurred_circles'
import MonicaPortrait from '../../assets/images/monica-portrait.png'
import Navbar from '../../components/navbar'
import PinkButton from '../../components/pink-button'
import ArrowsDown from '../../components/arrows-down'
import logo from '../../assets/images/logo.png'
import MobileNavBar from '../../components/mobile-navbar'

function Home (): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles['nav-wrapper']}>
        <Navbar />
      </div>

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
        <MobileNavBar />
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
          <PinkButton className={styles['resume-button']}>Resume</PinkButton>
        </div>
        <div className={styles.circleWrapper}>
          <BlurredCircles />
        </div>
      </div>
      <div className={styles.arrows}>
        <ArrowsDown />
      </div>
    </div>
  )
}

export default Home
