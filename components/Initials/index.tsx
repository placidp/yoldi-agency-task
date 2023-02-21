import { useCallback } from 'react'

import styles from './Initials.module.css'
import cn from 'classnames'

interface InitialsProps {
	fullname: string
	className?: string
}

export const Initials = ({ fullname, className }: InitialsProps): JSX.Element => {
	const getInitials = useCallback(
		(name: string): string => {
			return name
				.split(' ')
				.map((w) => w[0])
				.join('')
		},
		[fullname],
	)

	return <div className={cn(styles.initials, className)}>{getInitials(fullname)}</div>
}
