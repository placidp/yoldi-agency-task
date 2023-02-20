import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import cn from 'classnames'
import { Initials } from '@/ui-kit/Initials'

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

	return (
		<button
			className={cn(className, styles.root, {
				[styles.small]: size == 'small',
				[styles.large]: size == 'large',
				[styles.uploadImage]: upload,
			})}
			{...props}>
			{imgUrl ? <AvatarImage size={size} /> : <Initials fullname={fullname} />}
		</button>
	)
}
