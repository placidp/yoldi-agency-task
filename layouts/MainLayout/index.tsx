import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import cn from 'classnames'

import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Header, Footer } from '@/layouts'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const { asPath } = useRouter()

	return (
		<div
			className={cn(styles.wrapper, {
				// [styles.auth]: asPath === '/login' || asPath === '/signup',
			})}>
			<Header className={styles.header} />
			<div className={cn(styles.body)}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}

export const withMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withMainLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
