'use client';

import { Header } from '@/components/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const inter = Montserrat({ subsets: ['latin'] });

// export const metadata = {
//   title: 'ReLabs Test | Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body ${inter.className}`}>
        <Provider store={store}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
