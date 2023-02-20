import { withLayout } from '@/layout'
import { Avatar } from '@/components'

import styles from './Accounts.module.css'
import Head from 'next/head'

const accounts = [
	{ name: 'Владислав', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example@gmail.com' },
	{ name: 'Евгений', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Андрей', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Анна', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example@gmail.com' },
	{ name: 'Михаил', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Глеб', imageUrl: null, email: 'example@gmail.com' },
	{ name: 'Иван', imageUrl: null, email: 'example@gmail.com' },
]

const AccountsList = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Yoldi Accounts List</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
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
		</>
	)
}

export default withLayout(AccountsList)
