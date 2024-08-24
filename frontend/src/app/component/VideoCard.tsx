'use client';
import { StarIcon } from '@heroicons/react/16/solid';
import { ClockIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardFooter, Chip, Image, Tooltip } from '@nextui-org/react';

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
		<Card
			isPressable
			isFooterBlurred
			radius="lg"
			className=" relative border-none h-80 w-64"
			onPress={() => alert('Card pressed')}>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				src="https://picsum.photos/id/1/256/320"
				height={320}
				width={256}
			/>
			<Tooltip content={`${rating}/5`} placement="top" size='sm'>
				<div className="absolute flex z-10 top-1 right-1">{getRating(rating)}</div>
			</Tooltip>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<div>
					<p className="text-tiny text-white/80">Name of the movies</p>
					<div className="flex items-center justify-start gap-1">
						<p className="text-tiny text-white/60">2024</p>
					</div>
				</div>
				<div className="flex">
					<Tooltip content="Watch later" placement="top">
						<Button
							className="text-tiny text-white bg-black/20"
							variant="flat"
							color="default"
							isIconOnly
							radius="lg"
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
							radius="lg"
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
							radius="lg"
							size="sm">
							<HeartIcon className="w-4 h-4" />
						</Button>
					</Tooltip>
				</div>
			</CardFooter>
		</Card>
	);
};
