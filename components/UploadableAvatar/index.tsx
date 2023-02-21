import cn from 'classnames'
import { ChangeEvent, createRef, useRef, useState } from 'react'

import { Avatar, AvatarProps } from '@/ui-kit/Avatar'
import Camera from '../../public/assets/icons/camera.svg'

import styles from './UploadableAvatar.module.css'

interface UploadableAvatarProps extends AvatarProps {
	onImageUpload?: (image: File) => void
}

export const UploadableAvatar = ({ fullname, size, onImageUpload, ...props }: UploadableAvatarProps): JSX.Element => {
	const [image, setImage] = useState<File | null>(null)
	const initials = fullname
		.split(' ')
		.map((n) => n[0])
		.join('')

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setImage(file)
			onImageUpload?.(file)
		}
	}

	const handleAvatarClick = () => {
		if (!image) {
			inputFileRef.current?.click()
		}
	}

	const inputFileRef = createRef<HTMLInputElement>()

	return (
		<>
			<Avatar data-show={true} fullname={fullname} size={size} {...props} onClick={handleAvatarClick}></Avatar>
			<input type='file' accept='image/*' ref={inputFileRef} onChange={handleImageUpload} style={{ display: 'none' }} />
		</>
	)
}
