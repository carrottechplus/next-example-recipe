import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

function Title({ children, url, style, className, type }) {
	return (
		<h1
			className={clsx(styles.ttl, className, type)}
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
