import axios from 'axios';
import Head from 'next/head';
import clsx from 'clsx';
import styles from './style.module.scss';
import Category from '@/components/molecules/Category/Category';
import { useRecipeByCategory } from '@/hooks/useRecipe';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import Card from '@/components/molecules/Card/Card';
import Title from '@/components/atoms/text/Title';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';

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
				{/* 버튼활성화 순서1- category로 활성화여부를 구분할수 있는 정보값을 active라는 props로 전달 */}
				<Category items={categories} onClick={setSelected} active={DebouncedSelected} />
				<Title type={'slogan'} className={clsx(styles.ttlCategory)}>
					{DebouncedSelected}
				</Title>
				<SearchBar isBtn={false} placeholder={'search'} />
				<div className={clsx(styles.listFrame)}>
					{isCategory && dataByCategory.map((el) => <Card key={el.idMeal} imgSrc={el.strMealThumb} url={`/find-recipe/${el.idMeal}`} txt={el.strMeal} className={clsx(styles.card)} />)}
				</div>
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
