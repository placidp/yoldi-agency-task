import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Htag, Input } from '@/components'
import { Lock, Envelope, Eye } from '@/public/assets/icons'

import styles from './LoginForm.module.css'

interface LoginFormProps {
	setIsLoading: (arg: boolean) => void
}

export const LoginForm = ({ setIsLoading }: LoginFormProps): JSX.Element => {
	// form validation
	const [email, setEmail] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [emailError, setEmailError] = useState('"Please enter a valid email address')
	const [password, setPassword] = useState('')
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [passwordError, setPasswordError] = useState('Password must not be empty')
	const [formValid, setFormValid] = useState(false)

	// toggle password visibility
	const [passwordType, setPasswordType] = useState<string>('password')
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

	const router = useRouter()
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	function toggleShowPassword(): void {
		setPasswordType(passwordType === 'password' ? 'text' : 'password')
		setIsPasswordVisible(!isPasswordVisible)
	}

	function blurHandler(e: SyntheticEvent<HTMLInputElement>): void {
		const target = e.target as HTMLInputElement
		switch (target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
			default:
				break
		}
	}

	function emailHandler(e: SyntheticEvent<HTMLInputElement>): void {
		const target = e.target as HTMLInputElement
		setEmail(target.value)

		const regex = /^\S+@\S+\.\S+$/

		if (!regex.test(String(target.value).toLowerCase())) {
			setEmailError('Please enter a valid email address')
		} else {
			setEmailError('')
		}
	}

	function passwordHandler(e: SyntheticEvent<HTMLInputElement>): void {
		const target = e.target as HTMLInputElement
		setPassword(target.value)

		if (target.value.length < 8 || target.value.length > 80) {
			setPasswordError('Password must be at least 8 characters')
			if (!String(target.value)) {
				setPasswordError('Password must not be empty')
			}
		} else {
			setPasswordError('')
		}
	}

	async function handleSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		setIsLoading(true)

		// implement later

		router.push('/login')
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Htag tag='h2' className={styles.title}>
				Вход в Yoldi Agency
			</Htag>

			<div className={styles.inputGroup}>
				<Input
					onChange={(e) => emailHandler(e)}
					onBlur={(e) => blurHandler(e)}
					onFocus={() => setEmailDirty(true)}
					value={email}
					placeholder='E-mail'
					type='email'
					name='email'
					borderColor={emailError && emailDirty ? 'red' : 'currentColor'}
					iconLeft={<Envelope color={emailError && emailDirty ? 'red' : 'currentColor'} />}
				/>
			</div>
			<div className={styles.inputGroup}>
				<Input
					onChange={(e) => passwordHandler(e)}
					onBlur={(e) => blurHandler(e)}
					onFocus={() => setPasswordDirty(true)}
					value={password}
					placeholder='Пароль'
					type={passwordType}
					name='password'
					borderColor={passwordError && passwordDirty ? 'red' : 'currentColor'}
					iconLeft={<Lock color={passwordError && passwordDirty ? 'red' : 'currentColor'} />}
					iconRight={<Eye color={isPasswordVisible ? 'black' : 'currentColor'} />}
					onClick={toggleShowPassword}
				/>
			</div>

			<Button className={styles.button} appearance={!formValid ? 'disabled' : 'primary'} size='large'>
				Войти
			</Button>
		</form>
	)
}
