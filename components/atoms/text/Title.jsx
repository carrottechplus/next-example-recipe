import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

function Title({ children, url, style, className }) {
	return (
		<h1 className={clsx(styles.ttl, className)} style={url ? style : { ...style, transitionDuration: '0.3s' }}>
			{/*
       url 속성 유무로 자식에 링크가 있는지 파악 후
       자식으로 링크가 있으면 > 상위요소인 h1태그에 transition 속성 제거,
       자식으로 링크가 없으면 > transition 속성 추가
       */}
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
