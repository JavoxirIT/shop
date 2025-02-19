'use client';

import Header from '@/components/organisms/header';
import HomeSwiper from '@/components/organisms/home_swiper';
import styles from '@/style/page.module.css';
import Priority from '@/components/organisms/priority';
import dataSlider from './_data/slider_data.json';
import priorityData from './_data/priority.json';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementsByClassName(
                'loading-wave'
            )[0] as HTMLElement;
            if (loader) loader.style.display = 'none';
        }
    }, []);
    return (
        <div>
            <div className={styles.home}>
                <Header />

                <div className={styles.home__block__grid}>
                    <div className={styles.grid__item__one}>
                        <HomeSwiper data={dataSlider} />
                    </div>
                    <div className={styles.grid__item__two}>
                        <HomeSwiper data={dataSlider} />
                    </div>
                    <div className={styles.grid__item__three}>
                        <HomeSwiper data={dataSlider} />
                    </div>
                </div>
            </div>
            <Priority data={priorityData} />
            <div style={{ height: 500 }} className='container'>
                <HomeSwiper data={dataSlider} />
            </div>
        </div>
    );
}
