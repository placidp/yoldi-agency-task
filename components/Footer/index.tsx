import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const [mock, setMock] = useState(true)
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        {mock ? (
          <p>
            <span className='text-gray'>Уже есть аккаунт?</span>{' '}
            <Link href={'/login'}>Войти</Link>
          </p>
        ) : (
          <p>
            <span className='text-gray'>Еще нет аккаунта? </span>
            <Link href={'/register'}>Зарегистрироваться</Link>
          </p>
        )}
      </div>
    </footer>
  )
}
