import Link from 'next/link'

import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
import { P } from '@/ui-kit'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const isLoggedMock = false
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={styles.wrapper}>
				{/* {isLoggedMock ? (
					<p>
						<span className='text-gray'>Уже есть аккаунт? </span>
						<Link href={'/login'}>Войти</Link>
					</p>
				) : (
					<p>
						<span className='text-gray'>Еще нет аккаунта? </span>
						<Link href={'/register'}>Зарегистрироваться</Link>
					</p>
				)} */}
				<P size='s'>
					<span className='text-gray'>Еще нет аккаунта? </span>
					<Link href={'/register'}>Зарегистрироваться</Link>
					{' / '}
					<Link href={'/login'}>Войти</Link>
				</P>
			</div>
		</footer>
	)
}
