import clsx from 'clsx';
import styles from './Counter.module.scss';
import Text from '@/components/atoms/text/Text';

function Counter({ index, len }) {
	return (
		<div className={clsx(styles.counter)}>
			<Text type={'menu'} tag={'strong'}>
				{index < 10 ? '0' + (index + 1) : index + 1}
			</Text>
			<Text type={'menu'} tag={'span'}>
				/ {len < 10 ? '0' + len : len}
			</Text>
		</div>
	);
}

export default Counter;
