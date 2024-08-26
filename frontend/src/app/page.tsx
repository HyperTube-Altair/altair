'use client';

import React from 'react';

import { RectangleGroupIcon } from '@heroicons/react/16/solid';
import { VideoCard } from './component/VideoCard';
import { Button, Spacer } from '@nextui-org/react';
import { PlusCircleIcon, TicketIcon } from '@heroicons/react/24/outline';
import { CardSilder } from './component/CardSilder';

export default function Home() {
	return (
		<main className="flex  min-h-screen max-w-[1920px] flex-col items-center  bg-[url('/main.jpg')] bg-secondary-200/30 bg-top bg-blend-hard-light bg-contain bg-no-repeat -mt-16 m-auto">
			<div className="absolute z-[1] inset-0 bg-gradient-to-bl from-transparent via-black/15  to-secondary-200/30 h-screen" />
			<div className="flex flex-col z-10 items-start justify-center  h-1/2 w-2/5 min-h-[400px] max-h-[436px] mt-16  self-start p-4 gap-3">
				<h1 className=" text-6xl font-bold text-start text-white capitalize">big movies name here</h1>
				<div className="felx gap-4 mt-8">
					<span className=" ml-2 text-gray-300 pr-3"> Remarks Here </span>
					<span className="text-green-500 text-md font-bold">92% Match </span>
					<span className="text-white text-md font-bold">2021</span>
				</div>
				<div className="flex gap-4 self-start items-center w-full ">
					<Button color="secondary" size="lg" className="bg-secondary-300 w-40" radius="full">
						<span className=" capitalize font-bold">PLAY</span>
					</Button>
					<Button size="lg" radius="full" isIconOnly className="bg-transparent">
						<PlusCircleIcon className="w-14  text-gray-100" />
					</Button>
				</div>
			</div>
			<div className="flex z-10 flex-col w-full p-4 space-y-2">
				<h1 className="text-xl font-bold text-center flex gap-2  ">
					<RectangleGroupIcon className="w-7 h-7 text-secondary" />
					Recommended
				</h1>
				<CardSilder>
					{Array.from({ length: 10 }).map((_, i) => (
						<VideoCard key={i} />
					))}
				</CardSilder>
				<Spacer y={2} />
				<h1 className="text-xl font-bold text-center flex gap-2  ">
					<TicketIcon className="w-7 h-7 text-secondary" />
					New Releases
				</h1>
				<div className="flex flex-wrap gap-6">
					{Array.from({ length: 13 }).map((_, i) => (
						<VideoCard key={i} />
					))}
				</div>
			</div>
		</main>
	);
}
