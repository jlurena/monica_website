import type { ReactElement } from 'react'
import logo from '../../assets/images/logo.png'
import styles from './styles.module.scss'

export default function Navbar (): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <div className={styles.menu}>
          <a href='https://example.com'>Work</a>
        </div>
      </div>
    </div>
  )
}
