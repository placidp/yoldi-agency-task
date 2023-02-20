import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import cn from 'classnames'

import { Footer, Header } from '../components'

import { FunctionComponent } from 'react'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div className={styles.root}>
				<div className={styles.content}>{children}</div>
			</div>
			<Footer />
		</>
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
