import { MainLayout } from '@/layouts/MainLayout'
import { FC } from 'react'
import styles from './Guest.module.css'

interface GuestProps {}

const Guest: FC<GuestProps> = () => {
  return <MainLayout className={styles.root}>Guest</MainLayout>
}

export default Guest
