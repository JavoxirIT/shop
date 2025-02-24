import type { Metadata } from 'next';
import { Chewy, Geist, Geist_Mono, Montserrat } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '@/style/globals.css';
import loader from './loadet';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});
const chewySans = Chewy({
    weight: '400', // Укажите доступный вес шрифта
    variable: '--font-chewy',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});
const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'SALE | SHOP',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <style dangerouslySetInnerHTML={{ __html: loader }} />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${chewySans.variable} ${montserrat.variable}`}>
                <div className='loading-wave'>
                    <div className='loading-bar'></div>
                    <div className='loading-bar'></div>
                    <div className='loading-bar'></div>
                    <div className='loading-bar'></div>
                </div>
                {children}
            </body>
        </html>
    );
}
