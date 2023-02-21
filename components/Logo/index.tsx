import Image from 'next/image'

import { forwardRef, ForwardedRef } from 'react'

import { LogoProps } from './Logo.props'
import styles from './Logo.module.css'

export const Logo = forwardRef(function Logo({ src }: LogoProps, ref: ForwardedRef<HTMLImageElement>): JSX.Element {
	return <Image className={styles.logo} src={src} alt='Logo' width={80} height={50} priority ref={ref} />
})

Logo.displayName = 'Logo'
