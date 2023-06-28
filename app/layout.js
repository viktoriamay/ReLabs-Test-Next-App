'use client'

import { Header } from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Provider } from 'react-redux'
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ReLabs Test | Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* provider redux here */}
      <Provider store={store}>

        <Header />
        {children}
        <Footer />
      {/* provider redux here */}

      </Provider>
      </body>
    </html>
  );
}
