import { Header, Footer } from '../components'

import styles from './LayoutWithFooter.module.css'

interface LayoutWithFooterProps {
	children: React.ReactNode
}

export const LayoutWithFooter: React.FC<LayoutWithFooterProps> = ({
	children,
}) => {
	return (
		<main className={styles.root}>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</main>
	)
}
