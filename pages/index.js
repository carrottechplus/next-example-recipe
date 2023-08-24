import Head from 'next/head';
import axios from 'axios';
import Layout from '@/components/template/Layout/Layout';
import SwiperWrap from '@/components/organisms/Swiper/Swiper';

export default function Home({ meals, category }) {
	// idMeal
	// strMeal
	// strMealThumb

	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>
			<SwiperWrap recipe={meals} category={category} />
		</>
	);
}

// revalidate 시간마다 다시 페이지를 재빌드해서 pre-render 처리 시 가져올 카테고리명을 변경해서 새로운 데이터 패칭
export async function getStaticProps() {
	const list = [];
	const { data: obj } = await axios.get('/categories.php');
	const items = obj.categories;
	items.forEach((el) => list.push(el.strCategory));
	const newList = list.filter((el) => el !== 'Goat' && el !== 'Vegan' && el !== 'Starter');

	const randomNum = Math.floor(Math.random() * newList.length);
	const { data } = await axios.get(`/filter.php?c=${newList[randomNum]}`);

	// console.log('data fetching on Server', data);
	return {
		props: { ...data, category: newList[randomNum] },
		revalidate: 10,
	};
}
