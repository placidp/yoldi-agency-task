import Link from 'next/link'

import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const mock = true
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={styles.wrapper}>
				{mock ? (
					<p>
						<span className='text-gray'>Уже есть аккаунт? </span>
						<Link href={'/login'}>Войти</Link>
					</p>
				) : (
					<p>
						<span className='text-gray'>Еще нет аккаунта? </span>
						<Link href={'/register'}>Зарегистрироваться</Link>
					</p>
				)}
			</div>
		</footer>
	)
}
