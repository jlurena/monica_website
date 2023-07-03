import type { ReactElement, HTMLProps } from 'react'
import styles from './styles.module.scss'

export default function PinkButton ({ onClick, children }: HTMLProps<HTMLButtonElement>): ReactElement {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}
