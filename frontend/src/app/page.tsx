'use client';
import { Navbar, NavbarBrand, NavbarContent, Link } from '@nextui-org/react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between border-2 ">
			<Navbar>
				<NavbarContent>
					<NavbarBrand>
						<Link href="/">Home</Link>
					</NavbarBrand>
				</NavbarContent>
			</Navbar>
		</main>
	);
}
