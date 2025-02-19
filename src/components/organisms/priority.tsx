import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import css from '@/style/components_style/priority.module.css';
import Link from 'next/link';
interface Priority {
    id: number;
    icons: string;
    title: string;
    icon_cn: string;
}

interface PriorityProps {
    data: Priority[];
}

const ic: { [key: string]: IconDefinition } = {
    faStar: faStar,
};

export default function Priority({ data }: PriorityProps) {
    console.log(css);

    return (
        <div className={css.priority}>
            <div className='container'>
                <h1 className={css.priority__title}>Priority</h1>
                <div className={css.priority__content}>
                    {data.map(({ id, title, icons, icon_cn }) => {
                        console.log(`${css}.${icon_cn}`);
                        return (
                            <div key={id} className={css.priority__item}>
                                <FontAwesomeIcon
                                    icon={ic[icons]}
                                    className={css[icon_cn]}></FontAwesomeIcon>
                                <div className={css.priority__card__title}>
                                    {title}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={css.saler}>
                    <h4 className={css.saler__title}>Become a saller</h4>
                    <p className={css.saler__text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi voluptate deserunt minus. Quasi asperiores
                        libero aspernatur, sed odio animi debitis nostrum
                        molestias beatae quos dignissimos, magnam natus. At, ut
                        nam?
                    </p>
                    <Link href='#'>Register</Link>
                </div>
            </div>
        </div>
    );
}
