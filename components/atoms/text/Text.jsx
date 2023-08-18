import React from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { Nanum_Myeongjo, Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'], weight: ['400', '600'], preload: true, variable: '--font-mont' });
const nanum = Nanum_Myeongjo({ subsets: ['latin'], weight: ['400', '700'], preload: true, variable: '--font-nanum' });

function Text({ children, url, style, className, type, tag = 'p' }) {
	return React.createElement(
		tag,
		{
			className: clsx(styles.txt, className, nanum.variable, mont.variable, styles[`txt_${type}`]),
			style: url ? style : { ...style, transitionDuration: '0.3s' },
			onMouseEnter: (e) => (e.target.style.color = style?.hoverColor),
			onMouseLeave: (e) => (e.target.style.color = style?.color),
		},
		url ? React.createElement(Link, { href: url, style: { transitionDuration: '0.5s' } }, children) : children
	);
}

export default Text;
