import React, { FC, useState, useRef, ChangeEvent } from 'react'

import styles from './UploadImage.module.css'
import Camera from '../../public/assets/icons/camera.svg'

interface UploadImageProps {
	show: boolean
}
const hostUrl = 'http://localhost:3000/account/owner/1'

export const UploadImage: FC<UploadImageProps> = ({ show }) => {
	const filePicker = useRef<HTMLInputElement>(null)
	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		const file = e.target.files?.[0]
		if (file) {
			setSelectedFile(file)
		}
	}

	function handlePick() {
		filePicker.current?.click()
		console.log()
	}

	async function handleUpload() {
		if (!selectedFile) return

		const formData = new FormData()
		formData.append('avatar', selectedFile)

		const res = await fetch(hostUrl, {
			method: 'POST',
			body: formData,
		})
		const data = await res.json()
	}

	return (
		<>
			<div data-show={show} className={styles.iconBox}>
				<Camera />
			</div>
			<input type='file' ref={filePicker} onChange={handleChange} className={styles.root} />
		</>
	)
}
