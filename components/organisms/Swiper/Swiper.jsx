import clsx from 'clsx';
import styles from './Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Title from '@/components/atoms/text/Title';
import { useState } from 'react';

//Next에서는 autoplay, pagination, navigation 기능을 활성화 하기 위해서는 아래 코드와 같이 SwiperCore.use 사용해야함.
SwiperCore.use([Autoplay]);

//npm i swiper@9
function SwiperWrap({ recipe, category }) {
	const [Index, setIndex] = useState(0);
	console.log(Index);

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
				onSlideChange={(el) => setIndex(el.realIndex)}
				// loop 기능 적용하면 슬라이드가 동적으로 추가되기 때문에 순번이 어그러짐! > 위와 같이 slideChange 이벤트 발생시 자동으로 전달되는 파라미터 객체의 realIndex 프로퍼티 활용
			>
				{recipe.map((item) => (
					//SwiperSlide 컴포넌트안쪽에서 자동으로 JSX리턴하는 함수 호출 가능
					//해당 함수에는 파라미터로 현재 컴포넌트 요소가 활성화되어있는 구분할 수 있는 객체가 전달
					<SwiperSlide key={item.idMeal} className={clsx(styles.swiperSlide)}>
						{({ isActive }) => {
							return (
								<div className={clsx(isActive && styles.on)}>
									<Title tag={'h3'} url={'/'} type={'slogan'}>
										{item.strMeal.length > 25 ? item.strMeal.substr(0, 25) : item.strMeal}
									</Title>
								</div>
							);
						}}
					</SwiperSlide>
				))}
			</Swiper>
		</figure>
	);
}

export default SwiperWrap;
