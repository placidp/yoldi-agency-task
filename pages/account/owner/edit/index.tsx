import { withLayout } from '@/layout'
import Head from 'next/head'

import styles from './Edit.module.css'

const Edit = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Yoldi Account Edit</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
		</>
	)
}

export default withLayout(Edit)
