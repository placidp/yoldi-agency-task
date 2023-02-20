import Link from 'next/link'
import Image from 'next/image'

import { Avatar, Button } from '../../components'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	const name = 'Владислав'
	const isLogged = true

	return (
		<header className={styles.root} {...props}>
			<div className={styles.wrapper}>
				<div className={styles.logoGroup}>
					<Link href='/accounts'>
						<Image className={styles.logo} src='/yoldi.svg' alt='Yoldi Logo' width={80} height={50} priority />
					</Link>
					<p>Разрабатываем и запускаяем сложные веб проекты</p>
				</div>

				<div className={styles.userGroup}>
					{isLogged ? (
						<>
							<p className='name'>{name}</p>
							<Link href={'/account/owner/1'}>
								<Avatar size='small' fullname={name} />
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
			</div>
		</header>
	)
}
