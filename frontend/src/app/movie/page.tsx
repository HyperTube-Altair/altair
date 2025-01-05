import Comment from './components/comment';
import CommentInput from './components/comment-input';
import MoviePlayer from './components/movie-player';
import Suggestion from './components/suggestion';

export default function Home() {
	return (
		<main className="w-screen h-screen bg-black flex justify-center">
			<div className="flex flex-wrap w-dvw justify-center gap-[20px]">
				<div className="lg:w-[60dvw] md:w-full">
					<MoviePlayer />
					<div className="rounded-[28px] p-[20px] flex flex-col gap-[20px] max-h-[500px] overflow-y-scroll">
						<CommentInput />
						<Comment
							id="0"
							commentorImgUrl="https://i.pravatar.cc/300"
							commentorUsername="Anass Zakariya"
							commentContent="driss elkhyatte"
						/>
						<Comment
							id="1"
							commentorImgUrl="https://i.pravatar.cc/300"
							commentorUsername="Anass Zakariya"
							commentContent="driss elkhyatte"
						/>
						<Comment
							id="2"
							commentorImgUrl="https://i.pravatar.cc/300"
							commentorUsername="Anass Zakariya"
							commentContent="driss elkhyatte"
						/>
					</div>
				</div>
				<div className="lg:w-[400px] flex flex-col gap-[10px] md:w-full md:p-[20px] lg:p-0">
					<Suggestion
						id="0"
						movieName="Movie name placeholder"
						releaseYear="2024"
						thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
					/>
					<Suggestion
						id="0"
						movieName="Movie name placeholder"
						releaseYear="2024"
						thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
					/>
					<Suggestion
						id="0"
						movieName="Movie name placeholder"
						releaseYear="2024"
						thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
					/>
					<Suggestion
						id="0"
						movieName="Movie name placeholder"
						releaseYear="2024"
						thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
					/>
					<Suggestion
						id="0"
						movieName="Movie name placeholder"
						releaseYear="2024"
						thumbnailUrl="https://nextui.org/images/hero-card-complete.jpeg"
					/>
				</div>
			</div>
		</main>
	);
}
