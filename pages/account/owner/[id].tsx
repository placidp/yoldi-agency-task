import Image from 'next/image'

import {} from '@/layouts/MainLayout'
import { Button, Htag, P } from '@/ui-kit'
import { Cover, Upload } from '@/public/assets/icons'
import Head from 'next/head'

import styles from './Owner.module.css'
import { UploadableAvatar } from '@/components'
import { withPrivateLayout } from '@/layouts/PrivateLayout'

const fullname = 'Владислав'

const Owner = (): JSX.Element => {
	const handleImageUpload = (image: File): void => {
		console.log('Image uploaded:', image)
		// send the image to the server, etc.
	}

	return (
		<>
			<Head>
				<title>Yoldi Account Owner</title>
				<meta name='description' content='Разрабатываем и запускаяем сложные веб проекты' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={styles.root}>
				<header className={styles.cover}>
					<Button appearance='secondary' size='small' className={`${styles.button} ${styles.buttonCover}`}>
						<Cover />
						<span>Загрузить</span>
						<Upload />
					</Button>
				</header>
				<main className={styles.main}>
					<div className={styles.avatar}>
						<UploadableAvatar fullname={fullname} size='large' upload onImageUpload={handleImageUpload} />
					</div>
					<Htag className={styles.name} tag='h2'>
						{fullname}
					</Htag>
					<P size='m' className={styles.email}>
						example@gmail.com
					</P>
					<div className={styles.edit}>
						<Button appearance='secondary' size='small' className={styles.button}>
							<Image src={'/assets/icons/pen.svg'} width='20' height='20' alt='Edit' />
							<span>Редактировать</span>
						</Button>
					</div>
					<P size='s' className={styles.description}>
						Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты
						или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать
						наличие самого текста или продемонстрировать типографику в деле.
					</P>
					<div className={styles.signout}>
						<Button appearance='secondary' size='small' className={styles.button}>
							<Image src={'/assets/icons/signout.svg'} width='20' height='20' alt='Sign Out' />
							<span>Выйти</span>
						</Button>
					</div>
				</main>
			</div>
		</>
	)
}

export default withPrivateLayout(Owner)
