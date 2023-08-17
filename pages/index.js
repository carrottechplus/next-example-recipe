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
				<Title url={'/abc'} className={clsx(styles.txt, styles.logo)} style={{ color: 'violet', hoverColor: 'green' }}>
					{/* 
          컬러값 inline으로 넣으려면,,
          - style에 color 적용시 hover 까지 덮어써짐
          - 아예 hover 값까지 같이 그룹으로 전달
          - style 객체로 color 값 자체를 전달하지 않게되면 module.scss에 있는 style 적용됨.
           */}
					Hello
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
