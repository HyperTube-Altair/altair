'use client';

import React from 'react';

import { NavBar } from '@/app/component/NavBar';

export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between bg-[url('/main.jpg')] bg-cover">
            <NavBar />
			
		</main>
	);
}
