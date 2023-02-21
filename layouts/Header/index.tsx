import Link from 'next/link'
import { Avatar, Button, P } from '@/ui-kit'
import { Logo } from '@/components'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const name = 'Владислав'
	const isLogged = true
	const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
		if (e.code === 'Space') {
			// 32 is the key code for spacebar
			e.preventDefault()
			e.currentTarget.click()
		}
	}

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Link href='/accounts' passHref className={styles.logoLink} onKeyDown={handleKeyDown}>
				<Logo src='/yoldi.svg' />
			</Link>
			<P size='s' className={styles.motto}>
				Разрабатываем и запускаяем сложные веб проекты
			</P>

			<div className={styles.userGroup}>
				{isLogged ? (
					<>
						<p className={styles.name}>{name}</p>
						<Link
							style={{ margin: '15px 29.5px 15px 20px' }}
							href={'/account/owner/1'}
							onKeyDown={handleKeyDown}
							tabIndex={-1}>
							<Avatar className={styles.avatar} size='small' fullname={name} />
						</Link>
					</>
				) : (
					<>
						<Button appearance='secondary' size='medium'>
							Войти
						</Button>
					</>
				)}
			</div>
		</header>
	)
}
