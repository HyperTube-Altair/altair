'use client';
import { Card, CardBody, Input, Button, Tabs, Tab } from '@nextui-org/react';
import { LockClosedIcon, UserIcon } from '@heroicons/react/16/solid';

const Page = () => {
	return (
		<main className='w-screen h-screen flex items-center justify-center bg-[url("https://r4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-89c0584d016a0d0be617288fb071564d.jpg")] bg-no-repeat bg-center bg-cover'>
			<Card className="w-[450px] max-w-[90%] min-w-[260px] h-[550px] flex items-center px-2 bg-white/5" isBlurred>
				<CardBody className="space-y-4 flex items-center justify-start h-full w-3/4 mt-6">
					<Tabs key={'authentication tabs'} color="secondary" radius="full" size="lg" fullWidth>
						<Tab key="login" title="Login">
							<form className="flex flex-col h-full w-full gap-2">
								<span className="text-3xl font-bold text-gray-300 flex justify-center">Login</span>
								<Input
									type="email"
									variant="bordered"
									radius="full"
									label="Username"
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
								<span className="text-gray-400 w-full flex-row text-end hover:text-blue-500 cursor-pointer">
									Forgot password?
								</span>
								<Button size="lg" className="w-full" radius="full">
									Login
								</Button>
								<span className="flex flex-col items-center text-gray-400">Or</span>
								<div className="bg-white/20 rounded-full p-1 flex items-center space-x-3">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfAZMOWHDQ3DKE63A9jWhIqQaKcKqUIXvzg&s"
										className="w-8 rounded-full"
									/>
									<span className="text-gray-300">Login with 42</span>
								</div>
								<div className="bg-white/15 rounded-full p-1 flex items-center space-x-3">
									<img
										src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
										className="w-8 rounded-full"
									/>
									<span className="text-gray-300">Login with google</span>
								</div>
							</form>
						</Tab>
						<Tab key="register" title="Register">
							<form className="flex flex-col h-full w-full gap-2" onSubmit={() => alert('Submitted!')}>
								<span className="text-3xl font-bold text-gray-300 flex justify-center">Register</span>
								<Input
									type="email"
									variant="bordered"
									radius="full"
									label="Username"
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
								<Input
									type="password"
									variant="bordered"
									radius="full"
									label="Confirm password"
									classNames={{ label: 'text-white' }}
									endContent={<LockClosedIcon className="w-6 text-white self-center" />}
								/>
								<Button size="lg" className="w-full" radius="full">
									Register
								</Button>
								<span className="flex flex-col items-center text-gray-400">Or</span>
								<div className="bg-white/20 rounded-full p-1 flex items-center space-x-3">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfAZMOWHDQ3DKE63A9jWhIqQaKcKqUIXvzg&s"
										className="w-8 rounded-full"
									/>
									<span className="text-gray-300">Register with 42</span>
								</div>
								<div className="bg-white/15 rounded-full p-1 flex items-center space-x-3">
									<img
										src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
										className="w-8 rounded-full"
									/>
									<span className="text-gray-300">Register with google</span>
								</div>
							</form>
						</Tab>
					</Tabs>
				</CardBody>
			</Card>
		</main>
	);
};

export default Page;
