import { Router } from 'next/router';

export const keepStyle = (delay) => {
	Router.events.on('beforeHistoryChange', () => {
		// 모든 스타일 노드 ( head에 들어가는 스타일과, tag에 inline-style)
		const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])');
		// true: nodes 자식요소까지 모두 복사 (deep copy)
		const copies = [...nodes].map((el) => el.cloneNode(true));

		// next가 복사한 스타일 노드를 제거하지 못하도록 전용 속성명을 제거
		for (let copy of copies) {
			copy.removeAttribute('data-n-p'); //static하게 연결되는 스타일
			copy.removeAttribute('data-n-href'); //dynamic하게 연결되는 스타일

			document.head.appendChild(copy);
		}

		// 일정 시간 뒤에 복사된 스타일 노드를 제거하는 함수
		const handler = () => {
			// 해당 함수가 실행되면 다시 이벤트 핸들러 제거
			Router.events.off('routeChangeComplete', handler);
			window.setTimeout(() => {
				for (let copy of copies) {
					document.head.removeChild(copy);
				}
			}, delay);
		};

		// 해당 함수를 라우터 변경이 끝나고 delay시간 이후에 실행됨
		Router.events.on('routeChangeComplete', handler);
	});
};
