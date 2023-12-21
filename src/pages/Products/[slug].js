import { useRouter } from 'next/router'

export default function Slug() {
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}