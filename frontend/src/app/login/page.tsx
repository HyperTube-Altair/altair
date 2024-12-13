'use client';
import { Card, CardBody, Tabs, Tab } from '@nextui-org/react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Page = () => {
	return (
		<main className='w-screen h-screen flex items-center justify-center bg-[url("https://r4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-89c0584d016a0d0be617288fb071564d.jpg")] bg-no-repeat bg-center bg-cover'>
			<Card className="w-[450px] max-w-[90%] min-w-[260px] h-[600px] flex items-center px-2 bg-white/5" isBlurred>
				<CardBody className="space-y-4 flex items-center justify-start h-full w-full mt-6">
					<Tabs key={'authentication tabs'} color="secondary" radius="full" size="lg" fullWidth className='w-full'>
						<Tab key="login" title="Login" className='w-full'>
							<LoginForm />
						</Tab>
						<Tab key="register" title="Register" className='w-full'>
							<RegisterForm />
						</Tab>
					</Tabs>
				</CardBody>
			</Card>
		</main>
	);
};

export default Page;
