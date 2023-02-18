import { FC } from 'react'
import Image from 'next/image'

import { MainLayout } from '@/layouts/MainLayout'
import { Button, Avatar } from '@/components'

import styles from './Owner.module.css'
import { Cover, Upload } from '@/public/assets/icons'

const Owner = () => {
	return (
		<MainLayout>
			<div className={styles.root}>
				<header className={styles.cover}>
					<Button appearance='secondary' size='small' className={`${styles.button} ${styles.buttonCover}`}>
						<Cover />
						<span>Загрузить</span>
						<Upload />
					</Button>
				</header>
				<main className={styles.main}>
					<div className={styles.wrapper}>
						<div className={styles.avatar}>
							<Avatar fullname={'Владислав'} size={'large'} uploadImage={true} />
						</div>
						<div className={styles.personalInfo}>
							<span className={styles.name}>{'Владислав'}</span>
							<span className={styles.email}>example@gmail.com</span>
							<div className={styles.edit}>
								<Button appearance='secondary' size='small' className={styles.button}>
									<Image src={'/assets/icons/pen.svg'} width='20' height='20' alt='Edit' />
									<span>Редактировать</span>
								</Button>
							</div>
							<p className={styles.about}>
								Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить
								макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь
								показать наличие самого текста или продемонстрировать типографику в деле.
							</p>
						</div>
						<div className={styles.signout}>
							<Button appearance='secondary' size='small' className={styles.button}>
								<Image src={'/assets/icons/signout.svg'} width='20' height='20' alt='Sign Out' />
								<span>Выйти</span>
							</Button>
						</div>
					</div>
				</main>
			</div>
		</MainLayout>
	)
}

export default Owner