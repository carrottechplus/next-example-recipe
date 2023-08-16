import Head from 'next/head';
import styles from './Home.module.scss';
import clsx from 'clsx';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

export default function Home({ meals }) {
	console.log(meals);
	return (
		<>
			<Head>
				<title>NEXT Recipe</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={clsx(styles.main)}>
				<h1>MAIN PAGE</h1>
			</main>
		</>
	);
}

export async function getStaticProps() {
	// props로 데이터를 넘길때에는, data안쪽의 값까지 뽑아낸 다음에 전달!!
	const { data } = await axios.get('/filter.php?c=Seafood');
	console.log('data fetching on Server', data);
	return {
		props: data,
		revalidate: 60 * 60 * 24, //이 부분 없으면 ssg
	};
}
