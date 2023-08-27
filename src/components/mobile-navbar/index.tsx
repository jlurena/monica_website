import type { ReactElement } from 'react'
import styles from './index.module.scss'
import logo from '../../assets/images/logo.png'

export default function MobileNavBar (): ReactElement {
  return (
    <>
      <img src={logo} className={styles.logo} />
      <div className={styles.nav}>
        <div className={styles.links}>
          <a href='https://example.com'> Work </a>
        </div>
      </div>
    </>
  )
}
