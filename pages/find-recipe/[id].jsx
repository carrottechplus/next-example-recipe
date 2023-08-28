import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id, name } = router.query;
	return (
		<section>
			<h2>{name}</h2>
		</section>
	);
}

export default Detail;
