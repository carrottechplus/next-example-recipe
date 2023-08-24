import Header from '../organisms/Header/Header';
import clsx from 'clsx';
import styles from './Layout.module.scss';

function Layout() {
	return (
		<main className={clsx(styles.main)}>
			<Header />
		</main>
	);
}

export default Layout;
