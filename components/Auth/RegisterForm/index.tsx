import { Button, Input } from '@/components'
import { User, Lock, Envelope, Eye } from '@/public/assets/icons'
import { useState } from 'react'

import styles from './RegisterForm.module.css'

interface RegistrFormProps {
	setIsLoading: (arg: boolean) => void
}

export const RegisterForm = ({ setIsLoading }: RegistrFormProps): JSX.Element => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const [passwordType, setPasswordType] = useState<string>('password')
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

	function toggleShowPassword(): void {
		setPasswordType(passwordType === 'password' ? 'text' : 'password')
		setIsPasswordVisible(!isPasswordVisible)
	}

	return (
		<form className={styles.form}>
			<h2 className={styles.title}>
				Регистрация <br /> в Yoldi Agency
			</h2>
			<div className={styles.inputGroup}>
				<Input placeholder='Имя' type='text' name='name' iconLeft={<User />} />
			</div>
			<div className={styles.inputGroup}>
				<Input placeholder='E-mail' type='email' name='email' iconLeft={<Envelope />} />
			</div>
			<div className={styles.inputGroup}>
				<Input
					placeholder='Пароль'
					type={passwordType}
					name='password'
					iconLeft={<Lock />}
					iconRight={<Eye />}
					onClick={toggleShowPassword}
				/>
			</div>

			<Button className={styles.button} appearance={isDisabled ? 'disabled' : 'primary'} size='large'>
				Создать аккаунт
			</Button>
		</form>
	)
}
