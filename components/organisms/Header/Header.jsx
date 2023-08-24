import clsx from 'clsx';
import styles from './Header.module.scss';
import Title from '@/components/atoms/text/Title';
import Navbar from '@/components/molecules/Navbar';

function Header() {
	return (
		<header className={clsx(styles.header)}>
			<Title url={'/'} type={'logo'}>
				LOGO
			</Title>
			<Navbar names={['Find Recipe', 'My Favorite']} gap={50} />
		</header>
	);
}

export default Header;
