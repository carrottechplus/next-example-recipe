import clsx from 'clsx';
import styles from './Card.module.scss';
import { Pic } from '@/components/atoms/pic/Pic';

function Card({ imgSrc }) {
	return (
		<article className={clsx(styles.card)}>
			<Pic imgSrc={imgSrc} />
		</article>
	);
}

export default Card;
