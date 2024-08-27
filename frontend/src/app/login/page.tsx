import { Card, CardBody, Input, Button } from '@nextui-org/react';
import { LockClosedIcon, UserIcon } from '@heroicons/react/16/solid';

const Page = () => {
	return (
		<main className='w-screen h-screen flex items-center justify-center bg-[url("https://r4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-89c0584d016a0d0be617288fb071564d.jpg")] bg-no-repeat bg-center bg-cover'>
			<Card
				className="w-[450px] max-w-[90%] min-w-[260px] h-[450px] flex items-center px-2 py-10 bg-white/5"
				isBlurred>
				<h1 className="text-3xl font-bold text-gray-300">Login</h1>
				<CardBody className="space-y-4 flex items-center justify-center w-4/5">
					<Input
						type="email"
						variant="bordered"
						radius="full"
						label="Username"
						className="mb-4"
						classNames={{ label: 'text-white' }}
						endContent={<UserIcon className="w-6 text-white self-center" />}
					/>
					<Input
						type="password"
						variant="bordered"
						radius="full"
						label="Password"
						classNames={{ label: 'text-white' }}
						endContent={<LockClosedIcon className="w-6 text-white self-center" />}
					/>
					<div className="text-gray-400 w-full flex-row text-end hover:text-blue-500 cursor-pointer">
						Forgot password?
					</div>
					<Button size="lg" className="w-full" radius="full">
						login
					</Button>
					<div className="text-gray-400 w-full flex-row text-center">
						Don&rsquo;t have an account?{' '}
						<span className="hover:text-blue-500 cursor-pointer">Register</span>
					</div>
				</CardBody>
			</Card>
		</main>
	);
};

export default Page;
