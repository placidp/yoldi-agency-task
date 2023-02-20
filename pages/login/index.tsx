import { useState } from 'react'

import { LoginForm } from '@/components'
import { withLayout } from '@/layout'

import styles from './Login.module.css'
import Head from 'next/head'

const Login = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<>
			<Head>
				<title>Yoldi Вход</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={styles.root}>
				<LoginForm setIsLoading={setIsLoading} />
			</div>
		</>
	)
}

export default withLayout(Login)
