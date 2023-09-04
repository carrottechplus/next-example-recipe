import Head from 'next/head';
import styles from './style.module.scss';
import axios from 'axios';
import Category from '@/components/molecules/Category/Category';
import { useRecipeByCategory } from '@/hooks/useRecipe';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import Card from '@/components/molecules/Card/Card';

export default function Recipe({ categories }) {
	// console.log(categories);
	//react-query를 굳이 써야되는 이유 : 반환받은 서버 데이터를 캐싱처리해서 동일한 데이터 요청시 다시 refetching하지 않기 위함
	const [Selected, setSelected] = useState(categories[0].strCategory);

	//useDebounce는 컴포넌트의 재랜더링 자체를 막는 것이 아닌
	//특정 State가 변경될때마다 실행되는 무거운 함수의 호출 자체를 Debouncing하기 위함
	const DebouncedSelected = useDebounce(Selected);

	// 해당 State값이 바뀔때 마다 react-query 훅이 호출되면서 새로운 데이터 패칭
	const { data: dataByCategory, isSuccess: isCategory } = useRecipeByCategory(DebouncedSelected);
	console.log(dataByCategory);

	return (
		<>
			<Head>
				<title>Recipe Page</title>
			</Head>
			<section className={styles.recipePage}>
				<Category items={categories} onClick={setSelected} />
				{isCategory && dataByCategory.map((el) => <Card key={el.idMeal} imgSrc={el.strMealThumb} url={`/find-recipe/${el.idMeal}`} txt={el.strMeal} />)}
			</section>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/categories.php');
	return {
		props: { categories: data.categories },
	};
}
