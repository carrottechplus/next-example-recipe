import styles from './Visual.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

export function Visual({ imgSrc, style }) {
	return (
		<div className={clsx(styles.pic)} style={style}>
			<Image src={imgSrc} alt={imgSrc} priority fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' />
		</div>
	);
}

export function VisualWithText({ imgSrc, style, imgTtl }) {
	return (
		<div className={clsx(styles.picWithTxt)} style={style}>
			<Image src={imgSrc} alt={imgSrc} priority fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' />
			<h2>{imgTtl}</h2>
		</div>
	);
}

export function VisualWithContent({ imgSrc, style, children }) {
	return (
		<div className={clsx(styles.picWithContent)} style={style}>
			<Image src={imgSrc} alt={imgSrc} priority fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' />
			{children}
		</div>
	);
}
