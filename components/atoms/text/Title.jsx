import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { Nanum_Myeongjo, Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'], weight: ['400', '600'], preload: true, variable: '--font-mont' });
const nanum = Nanum_Myeongjo({ subsets: ['latin'], weight: ['400', '700'], preload: true, variable: '--font-nanum' });
// variable: '--font-nanum' : 직접 사용할 변수명 등록, 해당 변수명을 활용할 경우엔 클래스에 등록하면 안됨.

function Title({ children, url, style, className, type }) {
	return (
		<h1
			// nanum.className : 폰트 객체의 클래스명을 지정하면 안쪽의 모든 폰트는 해당 폰트가 디폴트로 적용됨
			// nanum.variable  : 변수명을 활용해서 선별적으로 쓰고 싶을 때
			className={clsx(styles.ttl, className, nanum.variable, mont.variable, styles[`ttl_${type}`])}
			style={url ? style : { ...style, transitionDuration: '0.3s' }}
			onMouseEnter={(e) => (e.target.style.color = style?.hoverColor)}
			onMouseLeave={(e) => (e.target.style.color = style?.color)}
			//style객체가 넘어오지 않을때를 대비해서 옵셔널 체이닝
		>
			{url ? (
				<Link href={url} style={{ transitionDuration: '0.3s' }}>
					{children}
				</Link>
			) : (
				children
			)}
		</h1>
	);
}

export default Title;
