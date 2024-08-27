'use client';

import { StarIcon } from '@heroicons/react/16/solid';
import { ClockIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardFooter, Image, Tooltip } from '@nextui-org/react';

export const VideoCard = () => {
	const rating = 4;

	const getRating = (rating: number) => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<StarIcon key={i} className={` w-3 h-3 ${rating < i + 1 ? 'text-gray-300' : 'text-yellow-400'}`} />,
			);
		}
		return stars;
	};
	return (
		<Card isFooterBlurred fullWidth={false} radius="sm" className=" relative h-64 w-40 shrink-0 grow-0">
			<Image className="object-cover" src="https://picsum.photos/160/256" height={256} width={160} alt="" />
			<Tooltip content={`${rating}/5`} placement="top" size="sm">
				<div className="absolute flex z-10 top-1 right-1">{getRating(rating)}</div>
			</Tooltip>
			<CardFooter className="justify-between flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<div>
					<p className="text-tiny text-white/80">Name of the movies</p>
					<div className="flex items-center justify-start gap-1">
						<p className="text-tiny text-white/60">2024</p>
					</div>
				</div>
				<div className="flex items-center justify-center w-full gap-0.5">
					<Tooltip content="Watch later" placement="top">
						<Button
							className="text-tiny text-white bg-black/20"
							variant="flat"
							color="default"
							isIconOnly
							size="sm">
							<ClockIcon className="w-4 h-4" />
						</Button>
					</Tooltip>
					<Tooltip content="Add to my library" placement="top">
						<Button
							className="text-tiny text-white bg-black/20"
							variant="flat"
							color="default"
							isIconOnly
							size="sm">
							<PlusCircleIcon className="w-4 h-4" />
						</Button>
					</Tooltip>
					<Tooltip content="Like" placement="top">
						<Button
							className="text-tiny text-white bg-black/20"
							variant="flat"
							color="default"
							isIconOnly
							size="sm">
							<HeartIcon className="w-4 h-4" />
						</Button>
					</Tooltip>
				</div>
			</CardFooter>
		</Card>
	);
};
