import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import { ArrowLeftCircleIcon } from '@heroicons/react/16/solid';
import { Button } from '@nextui-org/react';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ICardSilderProps {
	children: ReactNode[];
}

export const CardSilder = ({ children }: ICardSilderProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			clearInterval();
		};
	});
	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: -288, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: 288, behavior: 'smooth' });
		}
	};

	const continuousScroll = (callBack: () => void) => {
		const interval = setInterval(() => {
			callBack();
		}, 500);
		setTimeInterval(interval);
	};

	const clearInterval = () => {
		if (timeInterval) {
			clearTimeout(timeInterval);
			setTimeInterval(null);
		}
	};

	return (
		<div className="relative py-1 ">
			<Button
				className="group/left-btn absolute z-50 transition ease-in-out duration-700 !bg-transparent hover:bg-gradient-to-r from-secondary to-transparent h-full left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2"
				onClick={scrollLeft}
				size="lg"
				onPressStart={() => {
					continuousScroll(scrollLeft);
				}}
				onPressEnd={clearInterval}
				isIconOnly>
				<ArrowLeftCircleIcon className="group-hover/left-btn:text-secondary-700 group-hover/left-btn:scale-125 duration-700  transition text-secondary/40 hover:!text-secondary-800" />
			</Button>

			<div ref={containerRef} className="grid grid-flow-col gap-6 overflow-x-hidden">
				{children}
			</div>
			<Button
				className="group/right-btn absolute group z-50 transition-all ease-in duration-500 !bg-transparent hover:bg-gradient-to-l from-secondary to-transparent h-full right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2"
				onClick={scrollRight}
				size="lg"
				onPressStart={() => {
					continuousScroll(scrollRight);
				}}
				onPressEnd={clearInterval}
				isIconOnly>
				<ArrowRightCircleIcon className=" group-hover/right-btn:text-secondary-700 group-hover/right-btn:scale-125 duration-700  transition text-secondary/40 hover:!text-secondary-800" />
			</Button>
		</div>
	);
};
