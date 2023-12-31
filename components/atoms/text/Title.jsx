import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { Nanum_Myeongjo, Montserrat } from 'next/font/google';

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
// variable: '--font-nanum' : 직접 사용할 변수명 등록, 해당 변수명을 활용할 경우엔 클래스에 등록하면 안됨.

// React.createElement(’elementType’, props, children)
// 'elementType' : string , props: object, children: React Node
function Title({ children, url, style, className, type, tag = 'h1' }) {
	return React.createElement(
		tag, //elementType
		{
			//props
			className: clsx(styles.ttl, className, nanum.variable, mont.variable, styles[`ttl_${type}`]),
			style: url ? style : { ...style, transitionDuration: '0.3s' },
			onMouseEnter: (e) => (e.target.style.color = style?.hoverColor),
			onMouseLeave: (e) => (e.target.style.color = style?.color),
		},
		// children (React Node)
		url
			? React.createElement(Link, { href: url, style: { transitionDuration: '0.5s' } }, children)
			: children
	);
}

export default Title;
