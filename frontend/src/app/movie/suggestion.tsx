import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

interface ISuggestionProps {
	thumbnailUrl: string;
	movieName: string;
	releaseYear: string;
	id: string;
}

export default function Suggestion(props: Props) {
	return (
		<Card isBlurred>
			<CardBody className="flex flex-row gap-[10px] p-0">
				<Image width="120px" alt="suggested-video" src={props.thumbnailUrl}></Image>
				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-lg">{props.movieName}</span>
					<span className="text-sm text-second-white">{props.releaseYear}</span>
				</div>
			</CardBody>
		</Card>
	);
}
