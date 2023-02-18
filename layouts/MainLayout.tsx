import { Header } from '../components'

import styles from './MainLayout.module.css'

interface MainLayoutProps {
	children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<main className={styles.root}>
			<Header />
			<div className={styles.content}>{children}</div>
		</main>
	)
}
