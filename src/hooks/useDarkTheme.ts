import { useState } from 'react'

export const useDarkTheme = () => {
	const localStorageValue = localStorage.getItem('darkTheme')
	const prefered: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches
	const initialValue = localStorageValue === null ? prefered : localStorageValue === 'true'
	const [darkMode, setDarkMode] = useState<boolean>(initialValue)
	return [
		darkMode,
		(value = true) => {
			localStorage.setItem('darkTheme', value.toString())
			setDarkMode(value)
			return value
		}
	] as const
}
