import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

export default function Suggestion() {
	return (
		<Card isBlurred>
			<CardBody className="flex flex-row gap-[10px]">
				<Image width="120px" src="https://nextui.org/images/hero-card-complete.jpeg"></Image>
				<div className="flex flex-col gap-[10px]">
					<h3 className="font-bold">Smiya ta3 l film</h3>
					<h4 className="text-[12px] text-[rgba(255,255,255,0.87)]">quentin tarantino</h4>
				</div>
			</CardBody>
		</Card>
	);
}
