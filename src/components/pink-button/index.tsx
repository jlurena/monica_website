import type { ReactElement, HTMLProps } from 'react'
import styles from './styles.module.scss'

export default function PinkButton ({ onClick, children, className }: HTMLProps<HTMLButtonElement>): ReactElement {
  return (
    <button className={`${styles.button} ${className ?? ''}`} onClick={onClick}>{children}</button>
  )
}
