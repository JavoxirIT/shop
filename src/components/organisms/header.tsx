'use client';
import Link from 'next/link';
import css from '../components_style/header.module.css';
export default function Header() {
    return (
        <header className={css.header}>
            <div className='container'>
                <div className={css.header__block}>
                    <div className={css.header__block__first}>
                        <div className={css.header__info}>
                            <div>contact number</div>
                            <div className={css.header__info__number}>
                                +998 (90) 123-45-67
                            </div>
                        </div>
                        <div className={css.header__logo}>
                            <Link href='/'>LOGO</Link>
                        </div>
                        <div className={css.header__menu}>
                            <Link href=''>Account</Link>
                            <a href='#'>Favorite</a>
                            <div className={css.header__auth__block}>
                                <Link href='auth'>Auth</Link>/
                                <Link href=''>Sing-in</Link>
                            </div>
                        </div>
                    </div>
                    <div className={css.header__block__last}>
                        <nav className={css.header__block__last__menu}>
                            <a href=''>Hot offers</a>
                            <a href=''>Popular Item</a>
                            <a href=''>All</a>
                            <a href=''>About</a>
                            <a href=''>Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
