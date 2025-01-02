import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardHeader } from '@nextui-org/card';

interface ICommentProps {
	commentContent: string;
	commentorImgUrl: string;
	commentorUsername: string;
	id: string;
}

export default function Comment(props: Props) {
	return (
		<div className="w-full h-fit">
			<Card className="w-full">
				<CardHeader className="flex flex-row gap-[10px] font-bold">
					<Avatar src={props.commentorImgUrl} className="w-[48px] h-[48px]"></Avatar>
					{props.commentorUsername}
				</CardHeader>
				<CardBody>{props.commentContent}</CardBody>
			</Card>
		</div>
	);
}
