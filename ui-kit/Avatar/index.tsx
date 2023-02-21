import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import cn from 'classnames'
import { Initials } from '@/components/Initials'

import styles from './Avatar.module.css'
import { AvatarImage } from '@/components'

export interface AvatarProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	fullname: string
	size: 'small' | 'large'
	src?: string
	uploadable: boolean
}

export const Avatar = ({ className, fullname, size, src, uploadable, ...props }: AvatarProps): JSX.Element => {
	const [hovered, setHovered] = useState(false)
	const handleMouseEnter = (): void => {
		uploadable && setHovered(true)
	}
	const handleMouseLeave = (): void => {
		uploadable && setHovered(false)
	}

	return (
		<button
			className={cn(className, styles.root, {
				[styles.small]: size == 'small',
				[styles.large]: size == 'large',
				[styles.hovered]: hovered,
			})}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}>
			{!src && <Initials className={styles.initials} fullname={fullname} />}
			{src && (
				<AvatarImage
					className={cn({
						[styles.avatarImage]: uploadable,
					})}
					src={src}
					size={size}
				/>
			)}
		</button>
	)
}
