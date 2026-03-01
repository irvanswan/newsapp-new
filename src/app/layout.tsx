import Layout from '@/components/layout';
import Styles from './layout.module.css';
import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default async function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const { locale } = params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={Styles.Layout}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
