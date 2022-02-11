import React, { useContext, useEffect, useMemo, useState } from 'react'
import '@styles/components/Words.scss'
import { WordsContext, WordsActionKind, words } from '@hooks/useWords'
const Words: React.FC<{}> = () => {
	const { state, dispatch } = useContext(WordsContext)
	const [word, setWord] = useState<string>('')
	useEffect(() => {
		setWord(words[Math.floor(Math.random() * (words.length - 1))])
	}, [])
	// const word = useMemo(
	// 	() => words[Math.floor(Math.random() * (words.length - 1))],
	// 	[]
	// )
	useEffect(() => {
		console.log(word)
	}, [word])
	useEffect(() => {
		window.addEventListener('keydown', evt => {
			if (/^[a-z]$/i.exec(evt.key)) {
				dispatch({
					type: WordsActionKind.ADD,
					payload: evt.key.toUpperCase()
				})
			} else if (evt.key === 'Backspace') {
				dispatch({
					type: WordsActionKind.EDIT,
					payload: ''
				})
			} else if (evt.key === 'Enter') {
				dispatch({
					type: WordsActionKind.SUBMIT,
					payload: ''
				})
			}
		})
	}, [dispatch])
	return (
		<div className="words">
			<table>
				<tbody>
					{[...Array(6)].map((_e, i) => (
						<tr key={i}>
							{(state[`word${i + 1}`].value + '     ')
								.slice(0, 5)
								.split('')
								.map((c, i2) => (
									<td
										key={i2}
										className={
											state[`word${i + 1}`].submited
												? `${
														word.includes(c.toLowerCase()) // The word contains the letter
															? word[i2] === c.toLowerCase() // the letter in in the same exact place
																? 'bg-green-600'
																: 'bg-orange-500'
															: 'bg-slate-700' // The word does not contain the letter
												  }`
												: ''
										}
									>
										{c}
									</td>
								))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Words
