import styles from './Visual.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

export function Visual({ imgSrc, style, imgTtl, children, priority = false }) {
	return (
		<div className={clsx(styles.pic)} style={style}>
			<Image
				src={imgSrc}
				alt={imgSrc}
				priority={priority}
				fill
				sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
			/>
			{imgTtl && <h2>{imgTtl}</h2>}
			{children && { children }}
		</div>
	);
}
