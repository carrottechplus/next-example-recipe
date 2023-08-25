import styles from './Swiper.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Title from '@/components/atoms/text/Title';

//npm i swiper@9
function SwiperWrap({ recipe, category }) {
	console.log('recipe!!', recipe);
	console.log('category!!', category);

	return (
		<figure className={clsx(styles.visual)}>
			<Swiper className={clsx(styles.swiper)}>
				{recipe.map((item) => (
					<SwiperSlide key={item.idMeal} className={clsx(styles.swiperSlide)}>
						<div>
							<Title tag={'h3'} url={'/'} type={'slogan'}>
								{item.strMeal}
							</Title>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</figure>
	);
}

export default SwiperWrap;
