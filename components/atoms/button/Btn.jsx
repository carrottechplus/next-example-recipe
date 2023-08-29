import clsx from 'clsx';
import styles from './Btn.module.scss';

function Btn({ type, style, className, children }) {
	return (
		<button type={type} style={style} className={clsx(styles.btn, className)}>
			{children}
		</button>
	);
}

export default Btn;
