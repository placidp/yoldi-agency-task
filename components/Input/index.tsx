import { DetailedHTMLProps, DetailedReactHTMLElement, FC, InputHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Input.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
	return <input className={cn(styles.root, {})} {...props} />
}
