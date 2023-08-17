import React from 'react';
import styles from './Title.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

function Title({ children, url, style, className }) {
	return (
		<h1 className={clsx(styles.ttl, className)} style={style}>
			{url ? <Link href={url}>{children}</Link> : children}
		</h1>
	);
}

export default Title;
