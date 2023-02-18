import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Avatar, Button } from '../'

import styles from './Header.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	const [isLogged, setIsLogged] = useState(true)
	const [name, setname] = useState('Владислав')

	return (
		<header className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.logoGroup}>
					<Link href='/register'>
						<Image className={styles.logo} src='/yoldi.svg' alt='Yoldi Logo' width={80} height={50} priority />
					</Link>
					<p>Разрабатываем и запускаяем сложные веб проекты</p>
				</div>

				{/* TEMP */}
				<Link
					href='/accounts-list/1'
					style={{ fontWeight: 500, margin: '0 auto', borderBottom: '1px solid var(--grey-2)', padding: '8px' }}>
					Accounts list
				</Link>
				{/* TEMP */}

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
