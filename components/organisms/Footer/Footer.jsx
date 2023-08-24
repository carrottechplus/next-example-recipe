import clsx from 'clsx';
import styles from './Footer.module.scss';
import Title from '@/components/atoms/text/Title';
import Text from '@/components/atoms/text/Text';

function Footer() {
	return (
		<footer className={clsx(styles.footer)}>
			<Title style={{ fontSize: '16px', color: '#777' }}>DCODELAB</Title>
			<Text type={'util'} style={{ letterSpacing: 1 }}>
				2023 DCODELAB &copy; All rights reserved
			</Text>
		</footer>
	);
}

export default Footer;
