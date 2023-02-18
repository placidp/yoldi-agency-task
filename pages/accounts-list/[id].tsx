import { FC } from 'react'

import { MainLayout } from '@/layouts/MainLayout'
import { Avatar } from '@/components'

import styles from './AccountsList.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AccountsListProps {}

const accounts = [
	{ name: 'Владислав', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example@gmail.com' },
	{ name: 'Евгений', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Андрей', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Анна', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example@gmail.com' },
	{ name: 'Михаил', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Глеб', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Иван', imageUrl: null, email: 'example@gmail.com' },
]

const AccountsList: FC<AccountsListProps> = () => {
	return (
		<MainLayout>
			<div className={styles.root}>
				<h2 className={styles.title}>Список аккаунтов</h2>
				<div className={styles.list}>
					{accounts.map((a) => (
						<div className={styles.row} key={a.name}>
							<Avatar fullname={a.name} size={'small'} />
							<span className={styles.name}>{a.name}</span>
							<span className={styles.email}>{a.email}</span>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	)
}

export default AccountsList
