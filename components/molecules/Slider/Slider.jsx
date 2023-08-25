import clsx from 'clsx';
import styles from './Slider.module.scss';
import { Pic } from '@/components/atoms/pic/Pic';

function Slider({ data, index }) {
	return (
		<article className={clsx(styles.slider)}>
			{data.map((el, idx) => (
				<Pic
					key={el.idMeal}
					imgSrc={el.strMealThumb}
					className={clsx(idx === index ? styles.on : '')}
				/>
			))}
		</article>
	);
}
export default Slider;
