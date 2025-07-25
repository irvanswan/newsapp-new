import Layout from '@/components/layout';
import Styles from './layout.module.scss';
import "@/styles/globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getLocale } from "next-intl/server";
import { ReactNode } from 'react';

export default function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const messages = useMessages();
  return (
    <html lang={params.locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={Styles.Layout}
      >
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Layout>
            {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
