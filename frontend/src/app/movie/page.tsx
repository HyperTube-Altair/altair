import Comment from './comment';
import CommentInput from './comment-input';
import Suggestion from './suggestion';

export default function Home() {
	return (
		<>
			<div className="flex w-dvw justify-center gap-[20px] mt-[5dvh]">
				<div className="w-[1000px] flex flex-col gap-[20px]">
					<div className="bg-green-400 w-full">
						<iframe
							className="aspect-video w-[1000px]"
							src="https://www.youtube.com/embed/WRRF4NZB3WQ"
							title="7 Early Signs of Autism Every Parent Should Know"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
					</div>
					<div className="rounded-[28px] p-[20px] flex flex-col items-center gap-[20px] max-h-[500px] overflow-y-scroll">
						<CommentInput />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
						<Comment />
					</div>
				</div>
				<div className="w-[400px]">
					<Suggestion />
					<Suggestion />
					<Suggestion />
					<Suggestion />
					<Suggestion />
					<Suggestion />
					<Suggestion />
					<Suggestion />
				</div>
			</div>
		</>
	);
}
