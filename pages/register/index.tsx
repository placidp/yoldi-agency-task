import Head from 'next/head'
import { useState } from 'react'

import { RegisterForm } from '@/components'

import styles from './Register.module.css'
import { withLayout } from '@/layout'

const Register = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	return (
		<>
			<Head>
				<title>Yoldi Регистрация</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.root}>
				<RegisterForm setIsLoading={setIsLoading} />
			</div>
		</>
	)
}

export default withLayout(Register)
