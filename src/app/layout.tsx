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
      </head>
      <body className={Styles.Layout}
      >
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
