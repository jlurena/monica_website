import type { ReactElement } from 'react'
import styles from './home.module.scss'
import { cloudAssets } from '../../assets/images/clouds'
import { randomNumberBetween, sampleArray } from '../../lib/utilities'
import BlurredCircles from '../../components/blurred_circles'
import MonicaPortrait from '../../assets/images/monica-portrait.png'
import Navbar from '../../components/navbar'
import PinkButton from '../../components/pink-button'

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
        <div className={styles.about}>
          <img className={styles.portrait} src={MonicaPortrait} alt='Monica Portrait' />
          <div className={styles['contact-container']}>
            <PinkButton>Email</PinkButton>
            <PinkButton>LinkedIn</PinkButton>
          </div>
        </div>
        <div className={styles.circleWrapper}>
          <BlurredCircles />
        </div>
      </div>
    </div>
  )
}

export default Home
