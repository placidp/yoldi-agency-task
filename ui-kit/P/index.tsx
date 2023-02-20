import { PProps } from './P.props'
import styles from './P.module.css'
import cn from 'classnames'

export const P = ({ size = 's', className, children, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(className, styles.p, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
			})}
			{...props}>
			{children}
		</p>
	)
}
