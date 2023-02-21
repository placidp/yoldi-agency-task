import Head from 'next/head'
import { withMainLayout } from '@/layouts/MainLayout'
import { Avatar, Htag } from '@/ui-kit'

import styles from './Accounts.module.css'

const accounts = [
	{ name: 'Владислав', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example@gmail.com' },
	{ name: 'Евгений', imageUrl: null, email: 'examplemail@gmail.com' },
	{ name: 'Андрей', imageUrl: null, email: 'examplemaimai@gmail.com' },
	{ name: 'Анна', imageUrl: '/assets/avatars/vladislav-mini.png', email: 'example232@gmail2.com' },
	{ name: 'Михаил', imageUrl: null, email: 'examplegmaitest@gmail.com' },
	{ name: 'Глеб', imageUrl: null, email: 'example77777@gmail.com' },
	{ name: 'Иван', imageUrl: null, email: 'example1123123@gmail.com' },
]

const AccountsList = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Yoldi Accounts List</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={styles.wrapper}>
				<Htag className={styles.heading} tag='h2'>
					Список аккаунтов
				</Htag>
				<div className={styles.list}>
					{accounts.map((a, i) => (
						<div className={styles.row} key={i}>
							<Avatar className={styles.avatar} fullname={a.name} size={'small'} uploadable={false} />
							<span className={styles.name}>{a.name}</span>
							<span className={styles.email}>{a.email}</span>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default withMainLayout(AccountsList)
