import { FC, useState } from 'react'

import { Button, Input } from '@/components'
import { LayoutWithFooter } from '@/layouts/LayoutWithFooter'

import styles from './Login.module.css'
import { Envelope, Lock, Eye } from '@/public/assets/icons'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const [completed, setCompleted] = useState(false)

	return (
		<LayoutWithFooter>
			<div className={styles.root}>
				<h2 className={styles.title}>Войти в Yoldi Agency</h2>
				<form className={styles.form}>
					<div className={styles.inputGroup}>
						<span className={styles.icon}>
							<Envelope />
						</span>
						<Input placeholder='E-mail' type='email' />
					</div>
					<div className={styles.inputGroup}>
						<span className={styles.icon}>
							<Lock />
						</span>
						<Input placeholder='Пароль' type='password' />
						<span className={styles.iconCustom}>
							<Eye />
						</span>
					</div>
					<Button appearance={completed ? 'primary' : 'disabled'} size='large'>
						Войти
					</Button>
				</form>
			</div>
		</LayoutWithFooter>
	)
}

export default Login
