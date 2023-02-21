import { useRef, useState } from 'react'

import { Avatar, AvatarProps } from '@/ui-kit/Avatar'

interface UploadableAvatarProps extends AvatarProps {}

export const UploadableAvatar = ({ fullname, size, uploadable, ...props }: UploadableAvatarProps): JSX.Element => {
	const [image, setImage] = useState<File | null>(null)
	const inputFileRef = useRef<HTMLInputElement | null>(null)

	const handleAvatarClick = (): void => {
		if (!image) {
			inputFileRef.current?.click()
		}
	}

	return (
		<>
			<Avatar fullname={fullname} size={size} uploadable={uploadable} {...props} onClick={handleAvatarClick} />
			<input type='file' accept='image/*' ref={inputFileRef} style={{ display: 'none' }} />
		</>
	)
}
