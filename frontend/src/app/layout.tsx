import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import { NavBar } from './component/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hypertube',
	description: 'Movie streaming website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + ' dark'}>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
