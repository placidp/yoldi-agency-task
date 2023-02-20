import Link from 'next/link'
import Image from 'next/image'

import { Avatar, Button } from '../../components'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const name = 'Владислав'
	const isLogged = true

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Link href='/accounts'>
				<Image className={styles.logo} src='/yoldi.svg' alt='Yoldi Logo' width={80} height={50} priority />
			</Link>
			<p className={styles.motto}>Разрабатываем и запускаяем сложные веб проекты</p>

			<div className={styles.userGroup}>
				{isLogged ? (
					<>
						<p className={styles.name}>{name}</p>
						<Link href={'/account/owner/1'}>
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
