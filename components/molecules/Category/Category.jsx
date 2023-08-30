import clsx from 'clsx';
import styles from './Category.module.scss';
import Btn from '@/components/atoms/Button/Btn';

function Category({ items }) {
	return (
		<>
			<nav className={clsx(styles.category)}>
				{items.map((el) => (
					<Btn key={el.idCategory}>{el.strCategory}</Btn>
				))}
			</nav>
		</>
	);
}

export default Category;
