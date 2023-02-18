import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import { Inter } from '@next/font/google'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div className={inter.className}>
			<Head>
				<title>Yoldi App</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Component {...pageProps} />
		</div>
	)
}
