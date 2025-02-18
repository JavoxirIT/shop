'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from '../components_style/swiper.module.css';
import { SliderButtons } from '../atoms/swiper_buttoms';

interface Slide {
    id: number;
    title: string;
    tagline: string;
    image: string;
    buttons: ButtonProps[];
}

interface ButtonProps {
    id: number;
    text: string;
    link: string;
    type: string;
}

interface HomeSwiperProps {
    data: Slide[];
}

export default function HomeSwiper({ data }: HomeSwiperProps) {
    return (
        <Swiper
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            autoplay={false}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}>
            {data.map(({ id, image, tagline, title, buttons }) => (
                <SwiperSlide key={id}>
                    <div
                        style={{
                            background: `url(${image}) center center / cover scroll no-repeat`,
                            height: '100%',
                        }}>
                        <div className={style.element1}></div>
                        <div className={style.swiper_content}>
                            <div className={style.swiper_content_container}>
                                {tagline && (
                                    <p className={style.swiper_tagline}>
                                        {tagline}
                                    </p>
                                )}
                                <p className={style.swiper_title}>{title}</p>
                                {buttons.length > 0 ? (
                                    <p className={style.swiper_buttons}>
                                        <SliderButtons buttons={buttons} />
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
