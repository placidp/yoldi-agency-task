import { AuthLayoutProps } from './AuthLayout.props'
import styles from './AuthLayout.module.css'
import cn from 'classnames'

import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Header, Footer } from '@/layouts'

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
	const { asPath } = useRouter()

	return (
		<div className={cn(styles.wrapper)}>
			<Header className={styles.header} />
			<div className={cn(styles.body)}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}

export const withAuthLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withAuthLayoutComponent(props: T): JSX.Element {
		return (
			<AuthLayout>
				<Component {...props} />
			</AuthLayout>
		)
	}
}
