import { PrivateLayoutProps } from './PrivateLayout.props'
import styles from './PrivateLayout.module.css'
import cn from 'classnames'

import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Header } from '@/layouts'

const PrivateLayout = ({ children }: PrivateLayoutProps): JSX.Element => {
	const { asPath } = useRouter()

	return (
		<div className={cn(styles.wrapper)}>
			<Header className={styles.header} />
			<div className={cn(styles.body)}>{children}</div>
		</div>
	)
}

export const withPrivateLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withPrivateLayoutComponent(props: T): JSX.Element {
		return (
			<PrivateLayout>
				<Component {...props} />
			</PrivateLayout>
		)
	}
}
