'use client';
import Link from 'next/link';
import css from '@/style/components_style/header.module.css';
import Search from '../molecules/search';
import HeaderContact from '../molecules/header_contact';
import HeaderUserMenu from '../molecules/header_user_menu';
import HeaderPageMenu from '../molecules/header_page_menu';

export default function Header() {
    return (
        <header className={css.header}>
            <div className='container'>
                <div className={css.header__block}>
                    <div className={css.header__block__first}>
                        <div className={css.header__logo}>
                            <Link href='/'>LOGO</Link>
                        </div>
                        <Search />
                        <HeaderUserMenu />
                        <HeaderContact />
                    </div>
                    <div className={css.header__block__last}>
                        <HeaderPageMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
