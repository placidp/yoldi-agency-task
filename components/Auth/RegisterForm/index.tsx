import { SyntheticEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Input } from '@/components'
import { User, Lock, Envelope, Eye } from '@/public/assets/icons'

import styles from './RegisterForm.module.css'

interface RegistrFormProps {
	setIsLoading: (arg: boolean) => void
}

export const RegisterForm = ({ setIsLoading }: RegistrFormProps): JSX.Element => {
	// form validation
	const [name, setName] = useState('')
	const [nameDirty, setNameDirty] = useState(false)
	const [nameError, setNameError] = useState('Please enter your name')
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

	useEffect(() => {
		if (nameError || emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [nameError, emailError, passwordError])

	function toggleShowPassword(): void {
		setPasswordType(passwordType === 'password' ? 'text' : 'password')
		setIsPasswordVisible(!isPasswordVisible)
	}

	function blurHandler(e: SyntheticEvent<HTMLInputElement>): void {
		const target = e.target as HTMLInputElement
		switch (target.name) {
			case 'name':
				setNameDirty(true)
				break
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

	function nameHandler(e: SyntheticEvent<HTMLInputElement>): void {
		const target = e.target as HTMLInputElement
		setName(target.value)

		if (target.value.length < 2 || target.value.length > 80) {
			setNameError('Name must be at least 2 characters long')
		} else {
			setNameError('')
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

	async function onSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		setIsLoading(true)

		// implement later

		router.push('/login')
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<h2 className={styles.title}>
				Регистрация <br /> в Yoldi Agency
			</h2>
			<div className={styles.inputGroup}>
				{nameError && nameDirty && <div style={{ color: 'red' }}>{nameError}</div>}
				<Input
					onChange={(e) => nameHandler(e)}
					onBlur={(e) => blurHandler(e)}
					value={name}
					placeholder='Имя'
					type='text'
					name='name'
					iconLeft={<User />}
				/>
			</div>
			<div className={styles.inputGroup}>
				{emailError && emailDirty && <div style={{ color: 'red' }}>{emailError}</div>}
				<Input
					onChange={(e) => emailHandler(e)}
					onBlur={(e) => blurHandler(e)}
					value={email}
					placeholder='E-mail'
					type='email'
					name='email'
					iconLeft={<Envelope />}
				/>
			</div>
			<div className={styles.inputGroup}>
				{passwordError && passwordDirty && <div style={{ color: 'red' }}>{passwordError}</div>}
				<Input
					onChange={(e) => passwordHandler(e)}
					onBlur={(e) => blurHandler(e)}
					value={password}
					placeholder='Пароль'
					type={passwordType}
					name='password'
					iconLeft={<Lock />}
					iconRight={<Eye />}
					onClick={toggleShowPassword}
				/>
			</div>

			<Button className={styles.button} appearance={!formValid ? 'disabled' : 'primary'} size='large'>
				Создать аккаунт
			</Button>
		</form>
	)
}
