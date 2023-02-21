import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	src: string
}
