'use client';
import React from 'react';
import Image from 'next/image';
import { Input, Button } from '@nextui-org/react';
import { LockClosedIcon, UserIcon } from '@heroicons/react/16/solid';

const LoginForm = () => {
	return (
		<div>
			<form className="flex flex-col h-full w-full gap-2 space-y-2">
				<span className="text-3xl font-bold text-gray-200 flex h-full py-2 justify-center">Login</span>
				<Input
					type="email"
					variant="bordered"
					radius="full"
					label="Username"
					endContent={<UserIcon className="w-6 text-white self-center" />}
				/>
				<Input
					type="password"
					variant="bordered"
					radius="full"
					label="Password"
					endContent={<LockClosedIcon className="w-6 text-white self-center" />}
				/>
				<span className="text-gray-400 w-full flex-row text-end hover:text-blue-500 cursor-pointer">
					Forgot password?
				</span>
				<Button size="lg" className="w-full" radius="full">
					Login
				</Button>
				<span className="flex flex-col items-center text-gray-400">Or</span>
				<div className="bg-white/20 rounded-full p-1 flex items-center space-x-3 border-2 border-gray-400">
					<Image
						alt="test"
						width={32}
						height={32}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfAZMOWHDQ3DKE63A9jWhIqQaKcKqUIXvzg&s"
						className="w-8 rounded-full"
					/>
					<span className="text-gray-300">Login with 42</span>
				</div>
				<div className="bg-white/15 rounded-full p-1 flex items-center space-x-3 border-2 border-gray-400">
					<Image
						alt="test"
						width={32}
						height={32}
						src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
						className="w-8 rounded-full"
					/>
					<span className="text-gray-300">Login with google</span>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
