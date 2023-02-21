import Image from 'next/image'

interface AvatarImageProps {
	className: string
	src: string
	size: string
}

export const AvatarImage = ({ className, src, size }: AvatarImageProps): JSX.Element => {
	return (
		<Image
			className={className}
			src={src}
			width={size === 'large' ? '100' : '50'}
			height={size === 'large' ? '100' : '50'}
			alt={'Avatar Image'}
		/>
	)
}
