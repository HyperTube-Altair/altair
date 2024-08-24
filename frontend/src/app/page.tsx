'use client';

import React from 'react';

import { NavBar } from '@/app/component/NavBar';
import { RectangleGroupIcon } from '@heroicons/react/16/solid';
import { VideoCard } from './component/VideoCard';

export default function Home() {
	return (
		<main className=" flex  min-h-screen flex-col items-center  bg-[url('/main.jpg')] bg-top bg-contain bg-no-repeat -mt-16">
			{/* <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" /> */}
			<div className="flex  items-center justify-center w-full h-1/2 min-h-[400px] max-h-[436px] mt-16">test</div>
			<div className="flex flex-col w-full p-4 space-y-2">
				<h1 className="text-xl font-bold text-center flex gap-2  ">
					<RectangleGroupIcon className="w-7 h-7 text-secondary" />
					Recommended
				</h1>
				<div className="flex gap-4 flex-wrap justify-center">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</div>
			</div>
		</main>
	);
}
