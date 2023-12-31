import Layout from '@/components/template/Layout/Layout';
import '@/styles/globals.scss';
import axios from 'axios';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { keepStyle } from '@/libs/keepStyle';
keepStyle(2000);

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

const queryClient = new QueryClient(); // 인수값으로 공통적으로 들어가는 값
export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<QueryClientProvider client={queryClient}>
			<AnimatePresence mode='wait'>
				<motion.div key={router.pathname}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</motion.div>
				{/* 페이지가 바뀌기 시작할 때 나타날 프레임 */}
				<motion.div
					className='in'
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 1 }}
					transition={{ duration: 0.8, ease: [0.25, 0.1, 0.03, 0.99] }}
				></motion.div>
				{/* 페이지가 바뀌고 나서 사라질 프레임 */}
				<motion.div
					className='out'
					initial={{ scaleX: 1 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 0 }}
					transition={{ duration: 0.8, ease: [0.25, 0.1, 0.03, 0.99] }}
				></motion.div>
			</AnimatePresence>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
