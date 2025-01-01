
export default function MoviePlayer() {
	return (
		<div className="flex flex-col">
			<iframe
				className="aspect-video w-full rounded-lg"
				src="https://www.youtube.com/embed/WRRF4NZB3WQ"
				title="7 Early Signs of Autism Every Parent Should Know"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
		</div>
	);
}
