import React, { useEffect, useState } from 'react'
import Words from '@components/Words'
import '@styles/index.scss'
import Header from '@components/header'
import { useDarkTheme } from '@hooks/useDarkTheme'
const App: React.FC<{}> = () => {
	const [clicked, setClicked] = useState<string>('')
	const [darkTheme, setDarkTheme] = useDarkTheme()
	useEffect(() => {
		window.addEventListener('keydown', evt => {
			if (/^[a-z]$/i.exec(evt.key)) setClicked(evt.key)
		})
	}, [])
	return (
		<div className={`App ${darkTheme ? 'dark' : 'light'}`}>
			<Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
			<Words />
			{clicked}
		</div>
	)
}

export default App
