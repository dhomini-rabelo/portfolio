import { Outfit } from 'next/font/google';
import './globals.css';

// compoenents
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Dhomini Rabelo - Portfolio',
  description: 'Dhomini Rabelo - Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/briefcase.svg' type='image/svg+xml' />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
