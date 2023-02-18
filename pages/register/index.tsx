import { FC, useState } from 'react'

import { LayoutWithFooter } from '@/layouts/LayoutWithFooter'
import { Button, Input } from '@/components'
import { User, Lock, Envelope, Eye } from '@/public/assets/icons'

import styles from './Register.module.css'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
	const [completed, setCompleted] = useState(false)

	return (
		<LayoutWithFooter>
			<div className={styles.root}>
				<h2 className={styles.title}>
					Регистрация <br /> в Yoldi Agency
				</h2>
				<form className={styles.form}>
					<div className={styles.inputGroup}>
						<span className={styles.icon}>
							<User />
						</span>
						<Input placeholder='Имя' type='text' />
					</div>
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
						Создать аккаунт
					</Button>
				</form>
			</div>
		</LayoutWithFooter>
	)
}

export default Register
