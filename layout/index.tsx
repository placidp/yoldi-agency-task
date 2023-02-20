import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import cn from 'classnames'

import { Footer, Header } from '../components'

import { FunctionComponent } from 'react'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
