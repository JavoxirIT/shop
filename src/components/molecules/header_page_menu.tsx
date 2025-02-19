import { useState } from 'react';

export default function HeaderPageMenu() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const menuItems = [
        'Hot offers',
        'Popular Item',
        'All',
        'About',
        'Contact',
        'Blog',
    ];

    return (
        <nav style={css.nav}>
            {menuItems.map((item, index) => (
                <div key={index}>
                    <a
                        key={index}
                        href=''
                        style={
                            hoveredIndex === index
                                ? { ...css.last, ...css.lastHover }
                                : css.last
                        }
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        {item}
                    </a>
                </div>
            ))}
        </nav>
    );
}

const css: { [key: string]: React.CSSProperties } = {
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
    },
    last: {
        fontSize: '18px',
        color: 'var(--color9)',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-montserrat)',
        letterSpacing: '2px',
        transition: 'all 0.3s',
    },
    lastHover: {
        color: 'var(--color6)',
    },
};
