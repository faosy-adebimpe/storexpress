import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import QueryProvider from './providers/QueryProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'StoreXpress App',
    description: 'Description on StoreXpress',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <QueryProvider>
                    <>
                        <Navbar />
                        <Hero />
                        <div className="container">{children}</div>
                        <Footer />
                    </>
                </QueryProvider>
            </body>
        </html>
    );
}

// <ReactQueryDevtools initialIsOpen={false} />
