import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import cn from 'classnames'

import { Initials } from '@/ui-kit/Initials'

import styles from './Avatar.module.css'

interface AvatarProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	fullname: string
	size: 'small' | 'large'
	uploadImage?: boolean
}

export const Avatar = ({ fullname, size, uploadImage = false, ...props }: AvatarProps) => {
	return (
		<button
			className={cn(styles.root, {
				[styles.small]: size == 'small',
				[styles.large]: size == 'large',
				[styles.uploadImage]: uploadImage == true,
			})}
			{...props}>
			<Initials fullname={fullname} />
			{/* {uploadImage && <UploadImage show={false} />} */}
		</button>
	)
}
