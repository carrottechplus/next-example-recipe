import React from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { Nanum_Myeongjo, Montserrat } from 'next/font/google';
import { useRouter } from 'next/router';

const mont = Montserrat({
	subsets: ['latin'],
	weight: ['400', '600'],
	preload: true,
	variable: '--font-mont',
});
const nanum = Nanum_Myeongjo({
	subsets: ['latin'],
	weight: ['400', '700'],
	preload: true,
	variable: '--font-nanum',
});

function Text({ children, url, style, className, type, tag = 'p', isOn = false }) {
	const router = useRouter(); // useRouter훅으로부터 객체를 반환받고
	const currentPath = router.pathname; // 해당객체에 있는 pathname값 가져오기 (현재 활성화되어있는 라우터명)

	return React.createElement(
		tag,
		{
			className: clsx(
				// 현재 라우터명과 url로 가져온 라우터명이 동일하면 on 클래스 추가
				currentPath === url ? styles.on : '',
				styles.txt,
				className,
				nanum.variable,
				mont.variable,
				styles[`txt_${type}`],
				isOn && styles.on
			),
			//전달되는 boolean값에 따라 고유클래스 on추가, module.sass가 자체적으로 고유클래스명으로 변환하기 때문에 부모의 클래스명을 내부 전용 css에 연결하는게 불가
			style: url ? style : { ...style, transitionDuration: '0.3s' },
			onMouseEnter: (e) => (e.target.style.color = style?.hoverColor),
			onMouseLeave: (e) => (e.target.style.color = style?.color),
		},
		url
			? React.createElement(Link, { href: url, style: { transitionDuration: '0.5s' } }, children)
			: children
	);
}

export default Text;
