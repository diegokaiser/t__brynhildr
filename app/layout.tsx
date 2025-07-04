import { PrimeReactProvider } from 'primereact/api';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B R Y M H I L D R',
  description: 'by    t r a s c e n d i e n d o',
};

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang="es">
      <body className={`${inter.className} relative`}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
