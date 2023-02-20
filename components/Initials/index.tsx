import { useCallback } from 'react'

interface InitialsProps {
	fullname: string
}

export const Initials = ({ fullname }: InitialsProps): JSX.Element => {
	const getInitials = useCallback(
		(name: string): string => {
			return name
				.split(' ')
				.map((w) => w[0])
				.join('')
		},
		[fullname],
	)

	return <div>{getInitials(fullname)}</div>
}
