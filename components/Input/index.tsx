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
	borderColor?: string
}

export const Input = ({
	iconLeft,
	iconRight,
	placeholder,
	type,
	name,
	onClick,
	borderColor,
	...props
}: InputProps): JSX.Element => {
	return (
		<div className={styles.root}>
			<input
				className={cn(styles.input, {
					[styles.red]: borderColor === 'red',
				})}
				placeholder={placeholder}
				type={type}
				name={name}
				{...props}
			/>
			{iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
			{iconRight && (
				<span className={styles.iconRight} onClick={onClick}>
					{iconRight}
					{}
				</span>
			)}
		</div>
	)
}
