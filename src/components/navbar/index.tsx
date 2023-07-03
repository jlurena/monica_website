import type { ReactElement } from 'react'
import styles from './styles.module.scss'

export default function Navbar (): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>
          <a href='https://example.com'>About</a>
          <a href='https://example.com'>Work</a>
        </div>
      </div>
    </div>
  )
}
