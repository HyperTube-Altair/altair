'use client';
import React, { useState } from 'react';
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
	Button,
	NavbarBrand,
} from '@nextui-org/react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export const NavBar = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

	const applySearch = (searchValue: string | undefined): void => {
		if (searchValue) {
			// Perform the search operation using the searchValue
			console.log('Searching for:', searchValue);
			// Add your search logic here
		} else {
			// Handle the case when searchValue is undefined
			alert('Please enter a search term');
			// Add your handling logic here
		}
	};

	return (
		<Navbar position="sticky" className=" px-24" maxWidth="full">
			<NavbarBrand>
				<Link href="/" color="foreground">
					<span className="text-2xl font-bold text-white">Hypertube</span>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex" justify="center">
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
				<div className=" flex flex-row justify-between items-center">
					<Button
						isIconOnly
						color="warning"
						variant="faded"
						onClick={() => setIsSearchOpen(true)}
						className={` transition-all ease-in bg-transparent border-none ${!isSearchOpen ? 'opacity-100' : 'opacity-0 w-0 h-0'}`}>
						<MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
					</Button>

					<Input
						placeholder="Search"
						radius="full"
						value={searchValue}
						disabled={!isSearchOpen}
						onChange={(e) => setSearchValue(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && applySearch(searchValue)}
						className={` transition-all ease-in ${isSearchOpen ? ' duration-500 opacity-100' : ' duration-0 opacity-0 w-0 h-0'}`}
						onBlur={() => !searchValue && setIsSearchOpen(false)}
						endContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
					/>
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
