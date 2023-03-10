import { withMainLayout } from '@/layouts/MainLayout'
import Head from 'next/head'

import styles from './Guest.module.css'

const Guest = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Yoldi Account Guest</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
		</>
	)
}

export default withMainLayout(Guest)
