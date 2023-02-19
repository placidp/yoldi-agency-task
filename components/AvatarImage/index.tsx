import Image from 'next/image'
import React from 'react'

const AvatarImage = ({ size }) => {
	return (
		<Image
			src={`/assets/avatars/vladislav-${size}.png`}
			width={size === 'large' ? '100' : '50'}
			height={size === 'large' ? '100' : '50'}
			alt={'Avatar Image'}
		/>
	)
}

export default AvatarImage
