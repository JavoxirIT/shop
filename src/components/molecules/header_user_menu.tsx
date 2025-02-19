import {
    faArrowUpFromBracket,
    faHeart,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function HeaderUserMenu() {
    return (
        <div style={css.header__menu}>
            <Link href='' style={css.link}>
                <FontAwesomeIcon icon={faUser} /> Account
            </Link>
            <Link href='' style={css.link}>
                <FontAwesomeIcon icon={faHeart} /> Favorite
            </Link>

            <Link href='auth' style={css.link}>
                <FontAwesomeIcon
                    transform={{ rotate: 90 }}
                    icon={faArrowUpFromBracket}
                />{' '}
                Sing-in
            </Link>
            <Link href='' style={css.link}>
                <FontAwesomeIcon
                    transform={{ rotate: -90 }}
                    icon={faArrowUpFromBracket}
                />{' '}
                Log-out
            </Link>
        </div>
    );
}

const css: { [key: string]: React.CSSProperties } = {
    header__menu: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    link: {
        fontSize: '16px',
        color: 'var(--color9)',
        fontFamily: 'var(--font-montserrat)',
        letterSpacing: '2px',
    },
};
