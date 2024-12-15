'use client';
import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { LockClosedIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/16/solid';

const RegisterForm = () => {
	return (
		<div className="w-full">
			<form className="flex flex-col h-full w-full gap-2 space-y-2" onSubmit={() => alert('Submitted!')}>
				<span className="text-3xl font-bold text-gray-200 flex justify-center py-2">Register</span>
				<div className="flex gap-2">
					<Input
						type="text"
						variant="bordered"
						radius="full"
						size="sm"
						label="First name"
						endContent={<UserIcon className="w-6 text-white self-center" />}
					/>
					<Input
						type="text"
						variant="bordered"
						radius="full"
						label="Last name"
						size="sm"
						endContent={<UserIcon className="w-6 text-white self-center" />}
					/>
				</div>
				<Input
					type="text"
					variant="bordered"
					radius="full"
					label="Username"
					size="sm"
					endContent={<UserIcon className="w-6 text-white self-center" />}
				/>
				<Input
					type="email"
					variant="bordered"
					radius="full"
					label="Email"
					size="sm"
					endContent={<EnvelopeIcon className="w-6 text-white self-center" />}
				/>
				<div className="flex gap-2">
					<Input
						type="password"
						variant="bordered"
						radius="full"
						label="Password"
						size="sm"
						endContent={<LockClosedIcon className="w-6 text-white self-center" />}
					/>
					<Input
						type="password"
						variant="bordered"
						radius="full"
						label="Confirm password"
						size="sm"
						endContent={<LockClosedIcon className="w-6 text-white self-center" />}
					/>
				</div>
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
		</div>
	);
};

export default RegisterForm;
