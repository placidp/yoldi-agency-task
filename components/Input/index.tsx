import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react'

import cn from 'classnames'
import styles from './Input.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	iconLeft?: ReactElement<SVGElement>
	iconRight?: ReactElement<SVGElement>
	placeholder: string
	type: string
	name: string
	onClick?: () => void
}

export const Input = (props: InputProps): JSX.Element => {
	const { iconLeft, iconRight, placeholder, type, name, onClick } = props

	return (
		<div className={styles.root}>
			<input className={cn(styles.input, {})} placeholder={placeholder} type={type} name={name} />
			{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
			{iconRight && (
				<span className={styles.iconRight} onClick={onClick}>
					{iconRight}
				</span>
			)}
		</div>
	)
}
