import Head from 'next/head';
import styles from './Home.module.scss';
import clsx from 'clsx';
import axios from 'axios';
import Title from '@/components/atoms/text/Title';

export default function Home({ meals }) {
	return (
		<>
			<Head>
				<title>NEXT Recipe</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={clsx(styles.main)}>
				<Title tag={'h3'} type={'logo'} url={'/abc'}>
					TEST
				</Title>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/filter.php?a=American');
	console.log('data fetching on Server', data);
	return {
		props: data,
		revalidate: 60 * 60 * 24,
	};
}
