'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import { store } from '@/app/store'
import { Provider as ReduxProvider } from 'react-redux'

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<NextUIProvider>
			<ReduxProvider store={store}>
				{children}
			</ReduxProvider>
		</NextUIProvider>	
	);
};
export default Providers;
