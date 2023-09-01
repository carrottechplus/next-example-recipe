import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 서버에서 가져오는게 아니라 클라이언트 쪽에서
const getRecipeByCategory = async ({ queryKey }) => {
	const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
	// 해당 커스텀훅으로 호출되는 fetching 함수가 만약 컴포넌트가 마운트 되자마자 호출된다면,
	// data값 자체가 없기 때문에 meals에서 undefined 오류 발생을 피하기 위함
	return data?.meals || [];
};

//useRecipeByCategory (자주활용되는 리액트 기능을 패키징해서 hook형태로 만들어놓은 함수)
//인수가 전달되면 해당값을 활용해서 react-query를 이용하여 비동기서버데이터를 호출하고 해당 결과값을 객체형태로 리턴하는 함수
export const useRecipeByCategory = (SelectedCategory) => {
	return useQuery(['RecipeByCategory', SelectedCategory], getRecipeByCategory, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 0,
		staleTime: 0,
	});
};
