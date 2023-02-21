import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import cn from 'classnames'
import { Initials } from '@/components/Initials'

import styles from './Avatar.module.css'
import { UploadImage } from '@/components'
import AvatarImage from '@/components/AvatarImage'

export interface AvatarProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	fullname: string
	size: 'small' | 'large'
	upload?: boolean
}

export const Avatar = ({ className, fullname, size, upload, ...props }: AvatarProps): JSX.Element => {
	const imgUrl = ''
	const [hovered, setHovered] = useState(false)

	return (
		<button
			className={cn(className, styles.root, {
				[styles.small]: size == 'small',
				[styles.large]: size == 'large',
				[styles.uploadImage]: upload,
				[styles.hovered]: hovered,
			})}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			{...props}>
			{imgUrl && !hovered ? (
				<AvatarImage size={size} imgUrl={imgUrl} />
			) : (
				<Initials className={styles.initials} fullname={fullname} />
			)}
		</button>
	)
}
