import { useCallback } from 'react'

import styles from './Initials.module.css'
import cn from 'classnames'

interface InitialsProps {
	fullname: string
	hidden: boolean
}

export const Initials = ({ fullname, hidden, className }: InitialsProps): JSX.Element => {
	const getInitials = useCallback(
		(name: string): string => {
			return name
				.split(' ')
				.map((w) => w[0])
				.join('')
		},
		[fullname],
	)

	return (
		<div
			className={cn(className, styles.initials, {
				[styles.hidden]: hidden,
			})}>
			{getInitials(fullname)}
		</div>
	)
}
