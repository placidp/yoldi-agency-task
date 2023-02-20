import { useState } from 'react'

import { LoginForm } from '@/components'
import { withLayout } from '@/layout'
import Head from 'next/head'

import styles from './Login.module.css'
import cn from 'classnames'

const Login = ({ ...props }): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<>
			<Head>
				<title>Yoldi Вход</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={cn(styles.wrapper)} {...props}>
				<LoginForm setIsLoading={setIsLoading} />
			</div>
		</>
	)
}

export default withLayout(Login)
