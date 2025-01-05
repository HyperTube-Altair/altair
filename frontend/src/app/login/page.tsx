'use client';
import { Card, CardBody, Tabs, Tab } from '@nextui-org/react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Page = () => {
	const imageURL: string =
		'https://r4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-89c0584d016a0d0be617288fb071564d.jpg';
	return (
		<main
			className={`w-screen h-screen overflow-y-scroll flex items-center justify-center bg-no-repeat bg-center bg-cover overflow-hidden`}
			style={{ backgroundImage: `url(${imageURL})` }}>
			{' '}
			<Card
				className="w-[450px] max-w-[90%] min-w-[260px] h-[600px] flex items-center px-2 bg-white/5 self-center max-h-full overflow-y-auto"
				isBlurred>
				<CardBody className="flex items-center justify-start h-full w-full mt-6 overflow-y-auto">
					<Tabs key={'authentication tabs'} color="secondary" radius="full" size="lg" fullWidth>
						<Tab key="login" title="Login" className="w-full h-full">
							<LoginForm />
						</Tab>
						<Tab key="register" title="Register" className="w-full h-full">
							<RegisterForm />
						</Tab>
					</Tabs>
				</CardBody>
			</Card>
		</main>
	);
};

export default Page;
