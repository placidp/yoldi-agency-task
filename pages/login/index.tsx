import { FC, useState } from 'react'

import { LoginForm } from '@/components'
import { LayoutWithFooter } from '@/layouts/LayoutWithFooter'

import styles from './Login.module.css'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<>
			<Head>
				<title>Yoldi Регистрация</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LayoutWithFooter>
				<div className={styles.root}>
					<LoginForm setIsLoading={setIsLoading} />
				</div>
			</LayoutWithFooter>
		</>
	)
}

export default Login
