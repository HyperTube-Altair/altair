import { Avatar } from '@nextui-org/avatar';

export default function CommentInput() {
	return (
		<div className="w-[80%] h-fit flex flex-row gap-[10px] items-center">
			<Avatar src="https://i.pravatar.cc/300" className="w-[48px] h-[48px]"></Avatar>
			<input
				placeholder="leave a comment..."
				className="h-[48px] p-[10px] text-[16px] w-full outline-none border-none rounded-[8px] bg-[#191919]"></input>
		</div>
	);
}
