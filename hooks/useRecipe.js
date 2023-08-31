import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 서버에서 가져오는게 아니라 클라이언트 쪽에서
const getRecipeByCategory = async ({ queryKey }) => {
	const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
	// 해당 커스텀훅으로 호출되는 fetching 함수가 만약 컴포넌트가 마운트 되자마자 호출된다면,
	// data값 자체가 없기 때문에 meals에서 undefined 오류 발생을 피하기 위함
	return data?.meals || [];
};

export const useRecipeByCategory = (SelectedCategory) => {
	return useQuery(['RecipeByCategory', SelectedCategory], getRecipeByCategory, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 0,
		staleTime: 0,
	});
};
