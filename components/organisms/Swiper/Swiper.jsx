import styles from './Swiper.module.scss';
import clsx from 'clsx';
import Title from '@/components/atoms/text/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay]);

//npm i swiper@9
function SwiperWrap({ recipe, category }) {
	console.log('recipe!!', recipe);
	console.log('category!!', category);

	return (
		<figure className={clsx(styles.visual)}>
			<Title
				style={{ position: 'absolute', top: '20vh', left: '10vw', fontSize: 50, color: 'orange' }}
				tag={'h2'}
			>
				{category}
			</Title>
			<Swiper
				className={clsx(styles.swiper)}
				modules={[Autoplay]}
				autoplay={{ delay: 2000, disableOnInteraction: true }}
				loop={true}
				grabCursor={true}
				slidesPerView={3}
				spaceBetween={100}
				centeredSlides={true}
			>
				{recipe.map((item) => (
					<SwiperSlide key={item.idMeal} className={clsx(styles.swiperSlide)}>
						<div>
							<Title tag={'h3'} url={'/'} type={'slogan'}>
								{item.strMeal.length > 25 ? item.strMeal.substr(0, 25) : item.strMeal}
							</Title>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</figure>
	);
}

export default SwiperWrap;
