/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react'
import { Switch, Transition } from '@headlessui/react'
import className from '@utils/className'
import { MoonIcon as MoonOutlined } from '@heroicons/react/outline'
import { MoonIcon as MoonSolid } from '@heroicons/react/solid'
export default function Header() {
	return (
		<header>
			<ThemeToggle />
		</header>
	)
}

const ThemeToggle: React.FC = () => {
	const [enabled, setEnabled] = useState(false)

	return (
		<div className="py-16">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={className(
					enabled ? `bg-teal-900` : `bg-gray-300`,
					'relative inline-flex flex-shrink-0',
					'h-[38px] w-[74px]',
					'border-2 border-transparent rounded-full',
					'cursor-pointer',
					'transition-colors ease-in-out duration-200',
					'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
					'shadow-md shadow-slate-300'
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
						<MoonSolid className={`text-teal-900 mx-auto w-[20px]`} />
					) : (
						<MoonOutlined className={`text-teal-700 mx-auto w-[20px]`} />
					)}
				</span>
			</Switch>
		</div>
	)
}
