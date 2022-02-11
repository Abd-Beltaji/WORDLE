import React from 'react'
import Words from '@components/Words'
import '@styles/index.scss'
import Header from '@components/header'
import { useDarkTheme } from '@hooks/useDarkTheme'
import { WordsProvider } from '@hooks/useWords'

const App: React.FC<{}> = () => {
	const [darkTheme, setDarkTheme] = useDarkTheme()

	return (
		<div className={`App ${darkTheme ? 'dark' : 'light'}`}>
			<WordsProvider>
				<Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<Words />
			</WordsProvider>
		</div>
	)
}

export default App
