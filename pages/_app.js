import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
Atomic Design Pattern
- 컴포넌트를 원자처럼 최소단위로 쪼개서 재활용 가능하도록 처리 

요리명을 검색어로 입력하면 해당 요리의 정보와 레시피를 확인하는 서비스
- 좋아하는 레시피를 즐겨찾기에 저장 ( localStorage )
-- 1. 메인 ( 특정 카테고리 요리들을 소개하는 intro )  -- 레시피 업로드 시기 확인했는데 빈번하진 않음 > ISR 시간 지정해서 
-- 2. 레시피 검색 페이지 ( 검색 창으로 검색어를 입력하면 debouncing을 적용해서 레시피 목록 결과 확인 페이지 (debouncing으로 실시간~)) -- CSR
-- 2-1. 레시피 상세 페이지 ( 검색화면에서 목록 클릭시 출력되는 상세 페이지, 즐겨찾기 기능 추가 ) -- CSR
-- 3. 즐겨찾기 페이지 ( 즐겨찾기 등록된 리스트를 한번에 확인 ) -- CSR

각각 페이지는 ssg, ssr, isr, csr 방식에 맞게 작업할 것
csr 빈 Html 동적으로 리액트 컴포넌트가 데이터 생성해서 렌더링
서버쪽에서 데이터 fetching 후 페이지 미리 만들어서 렌더링
ssr : 컴포넌트 접속 시 마다
ssg : 프로젝트 빌드 시 한번
isr : 일정 시간 지정, 시간 때 데이터 리팻칭 후 빌드
*/