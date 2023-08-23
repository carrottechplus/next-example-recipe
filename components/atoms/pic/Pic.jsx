import styles from './Pic.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

export function Pic({ imgSrc, style, imgTtl, children, priority = false, className, url }) {
	const [IsLoaded, setIsLoaded] = useState(false);

	return (
		// 해당 아톰 컴포넌트가 호출되는 위치에서의 className props를 내부로 전달
		<div className={clsx(styles.pic, className)} style={style}>
			<Image
				src={imgSrc}
				alt={imgTtl}
				priority={priority}
				fill
				sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
				onLoadingComplete={() => setIsLoaded(true)}
			/>
			{imgTtl && (
				<>
					<aside></aside>
					{url ? (
						<h2>
							<Link href={url}>{imgTtl}</Link>
						</h2>
					) : (
						<h2>{imgTtl}</h2>
					)}
				</>
			)}
			{children && (
				<>
					<aside></aside> {url ? <Link href={url}>{children}</Link> : { children }}
				</>
			)}
			{/* spinner로딩 */}
			<ScaleLoader
				cssOverride={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				size={150}
				color={'orange'}
				loading={!IsLoaded}
			/>
		</div>
	);
}
