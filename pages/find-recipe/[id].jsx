import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id, name, url } = router.query;
	return (
		<section>
			<h2>{name}</h2>
			<p>{url}</p>
		</section>
	);
}

export default Detail;
