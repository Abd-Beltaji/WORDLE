import { useState } from 'react'

export const useDarkTheme = () => {
	const initialValue = localStorage.getItem('darkTheme') === 'true'
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
