import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderContact() {
    return (
        <div style={style.header__info}>
            <div style={style.header__info__icon}>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </div>
            <div style={style.header__info__text}>contact us 24/7</div>
            <div style={style.header__info__number}>+998 (90) 123-45-67</div>
        </div>
    );
}

const style: { [key: string]: React.CSSProperties } = {
    header__info: {
        display: 'grid',
        gridTemplate: '1fr 1fr / 40px 1fr',
    },
    header__info__icon: {
        gridArea: '1/1/3/2',
        color: 'var(--color9)',
        fontSize: 'xx-large',
    },
    header__info__text: {
        gridArea: '1/2/2/3',
        color: 'var(--color9)',
    },
    header__info__number: {
        gridArea: '2/2/3/3',
        color: 'var(--color9)',
        fontSize: '16px',
        fontWeight: '900',
        fontFamily: 'var(--font-montserrat)',
    },
};
