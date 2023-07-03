import type { ReactElement } from 'react'
import styles from './styles.module.scss'

function BlurredCircles (): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={styles.row}>
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  )
};

export default BlurredCircles
