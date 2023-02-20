import React, { useState, useRef } from 'react'

import Camera from '../../public/assets/icons/camera.svg'

import styles from './UploadImage.module.css'

interface UploadImageProps {
	show: boolean
}

export const UploadImage = ({ show }: UploadImageProps): JSX.Element => {
	const filePicker = useRef<HTMLInputElement>(null)
	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	return (
		<>
			<input accept='image/*,.png,.jpg' type='file' ref={filePicker} className={styles.root} />
			<div data-show={show} className={styles.iconBox}>
				<Camera />
			</div>
		</>
	)
}
