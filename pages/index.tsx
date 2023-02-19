import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home(): JSX.Element {
	const router = useRouter()

	useEffect(() => {
		const { pathname } = router
		if (pathname === '/') {
			router.push('/accounts-list/1')
		}
	}, [router])

	return <></>
}
