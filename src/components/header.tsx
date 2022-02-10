// Essentials imports
import React, { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import className from '@utils/className'
// Icons imports
import { MoonIcon as MoonOutlined } from '@heroicons/react/outline'
import { MoonIcon as MoonSolid } from '@heroicons/react/solid'
import { AiFillGithub } from 'react-icons/ai'
import { FaGitkraken, FaTwitter } from 'react-icons/fa'
import { ReactComponent as Logo } from '@assets/images/logo.svg'
// Style imports
import '@styles/components/header.scss'

const Header: React.FC<{
	darkTheme: boolean
	setDarkTheme: (value?: boolean) => boolean
}> = ({ darkTheme, setDarkTheme }) => {
	return (
		<header>
			<div className="flex">
				<Logo className="logo" />
				<a href="#dummy">Play</a>
				<a href="#dummy">About</a>
			</div>
			<div className="flex">
				<a href="https://twitter.com/Abd_Elbeltaji">
					<FaTwitter />
				</a>
				<a href="#dummy">
					<FaGitkraken />
				</a>
				<a href="https://github.com/Abd-Beltaji/WORDLE">
					<AiFillGithub />
				</a>
				<ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
			</div>
		</header>
	)
}

const ThemeToggle: React.FC<{
	darkTheme: boolean
	setDarkTheme: (value?: boolean) => boolean
}> = ({ darkTheme, setDarkTheme }) => {
	const [enabled, setEnabled] = useState<boolean>(darkTheme)
	useEffect(() => {
		setDarkTheme(enabled)
	}, [enabled, setDarkTheme])
	return (
		<div className="toggle py-16">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={className(
					enabled ? `bg-blue-600` : `bg-gray-600`,
					'relative inline-flex flex-shrink-0',
					'h-[38px] w-[74px]',
					'border-2 border-transparent rounded-full',
					'cursor-pointer',
					'transition-colors ease-in-out duration-200',
					'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
				)}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={className(
						enabled ? 'translate-x-9' : 'translate-x-0',
						'pointer-events-none',
						'inline-flex',
						'h-[34px] w-[34px]',
						'rounded-full',
						'bg-white',
						'shadow-lg',
						'transform ring-0',
						'transition ease-in-out duration-200',

						'content-center'
					)}
				>
					{enabled ? (
						<MoonSolid className={`text-blue-600 mx-auto w-[20px]`} />
					) : (
						<MoonOutlined className={`text-blue-500 mx-auto w-[20px]`} />
					)}
				</span>
			</Switch>
		</div>
	)
}
export default Header
