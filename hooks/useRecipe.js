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
		retry: 3, // 데이터 요청 시도 횟수 (디폴트 3, 네트워크 상황이 안좋을때 재시도 횟수 늘림)

		// enabled값에는 truthy, falsy 값이 적용안되고, 직접 boolean값을 생성해서 지정
		// 지금 상황에서는 ssg방식으로 초기 데이터를 호출하고 있기 때문에, 아래 구문을 지정 안해도 잘 동작됨,
		// csr 방식으로 호출할 때에는 초기값이 undefined이기 때문에 발생하는 에러를 미리 방지
		// useQuery 호출 유무, true 실행(default), false 실행안함
		enabled: SelectedCategory !== undefined,
	});
};
