import clsx from 'clsx';
import styles from './Input.module.scss';

function Input({ type = 'text', placeholder = 'text', value, onChange, style, className }) {
	return <input type={type} className={clsx(styles.input, className)} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} style={style} />;
}

export default Input;
