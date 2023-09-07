import clsx from 'clsx';
import styles from './SearchBar.module.scss';
import Input from '@/components/atoms/form/Input';
import Btn from '@/components/atoms/Button/Btn';
// Btn이 없을때도 있음

function SearchBar({ isBtn = true, btnText = 'button', inputType, placeholder, value, onChange }) {
	return (
		<div className={clsx(styles.searchBar)}>
			<Input type={inputType} placeholder={placeholder} value={value} onChange={onChange} />
			{isBtn && <Btn>{btnText}</Btn>}
		</div>
	);
}

export default SearchBar;
