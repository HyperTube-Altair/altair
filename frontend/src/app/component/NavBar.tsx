'use client';
import React from 'react';
import {
	Navbar,
	NavbarContent,
	NavbarItem,
	Link,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
	Input,
} from '@nextui-org/react';

export const NavBar = () => {
	return (
		<Navbar isBordered shouldHideOnScroll>
			<NavbarContent className="hidden sm:flex" justify="start">
				<NavbarItem>
					<Link color="foreground" href="/dashboard">
						Dashboard
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page" color="secondary">
						Movies
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Series
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent as="div" justify="end">
				<div>
					
					<Input placeholder="Search" radius='full' />
				</div>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://picsum.photos/id/1/200/200"
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="configurations">Settings</DropdownItem>
						<DropdownItem key="logout" color="danger">
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};
