import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import {Metrika} from '@/components/Metrika'
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-pneumonia.vercel.app'),
    title: 'Лечение пневмонии в Москве — платно, без ожидания, под контролем врачей',
    description: 'Лечение пневмонии в клиниках Москвы: круглосуточное наблюдение, современные методы, помощь пожилым пациентам. Платная госпитализация без ОМС.',
    keywords: ['лечение пневмонии у пожилых, застойная пневмония лечение, пневмония у пожилых людей, лечение пневмонии в Москве, терапия застойной пневмонии, госпитализация при пневмонии, пневмония у стариков, лечение застойной пневмонии в Москве, реабилитация после пневмонии, платная госпитализация при пневмонии'],
    other: {
        // ['yandex-verification']: '63b15477d46dd1f6', // https://pneumonia.mskdoctor.ru
        ['yandex-verification']: 'cdd8c1906b6fe76e', // https://msk-pneumonia.vercel.app
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Лечение пневмонии у пожилых в Москве — диагностика и терапия застойной пневмонии. Звоните! 8 (499) 719-81-00, 24/7',
        description: 'Эффективное лечение пневмонии у пожилых людей в Москве. Диагностика, терапия и реабилитация при застойной пневмонии. Круглосуточная помощь, опытные врачи.',
        images: ['/images/banner.webp'],
        url: 'https://msk-pneumonia.vercel.app',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
