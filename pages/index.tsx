import { withLayout } from '@/layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Home(): JSX.Element {
	const router = useRouter()

	useEffect(() => {
		const { pathname } = router
		if (pathname === '/') {
			router.push('/accounts')
		}
	}, [router])

	return <></>
}

export default withLayout(Home)
