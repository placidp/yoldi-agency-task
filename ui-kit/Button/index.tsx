import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'secondary' | 'disabled'
	size: 'small' | 'medium' | 'large'
	children: ReactNode
}

export const Button: FC<ButtonProps> = ({ appearance, size, children, className, ...props }) => {
	return (
		<button
			disabled={appearance === 'disabled'}
			className={cn(styles.root, className, {
				[styles.primary]: appearance == 'primary',
				[styles.secondary]: appearance == 'secondary',
				[styles.disabled]: appearance == 'disabled',
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.large]: size == 'large',
			})}
			{...props}>
			{children}
		</button>
	)
}
