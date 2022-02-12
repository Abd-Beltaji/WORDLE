import React, { createContext, useReducer } from 'react'
import wordsList from '@assets/words.json'

export const { words } = wordsList
export enum WordsActionKind {
	ADD = 'ADD_WORD',
	EDIT = 'EDIT_WORD',
	CLEAR = 'CLEAR_WORDS',
	SUBMIT = 'SUBMIT_WORD'
}

export interface WordsType {
	word1: { value: string; submited: boolean }
	word2: { value: string; submited: boolean }
	word3: { value: string; submited: boolean }
	word4: { value: string; submited: boolean }
	word5: { value: string; submited: boolean }
	word6: { value: string; submited: boolean }
	[id: string]: { value: string; submited: boolean }
}

export interface WordsAction {
	type: WordsActionKind
	payload: string
}

export const initialState: WordsType = {
	word1: { value: '', submited: false },
	word2: { value: '', submited: false },
	word3: { value: '', submited: false },
	word4: { value: '', submited: false },
	word5: { value: '', submited: false },
	word6: { value: '', submited: false }
}

export const reducer = (state: WordsType, action: WordsAction): WordsType => {
	switch (action.type) {
		case WordsActionKind.ADD: {
			const values = Object.values(state)
			for (let i = 0; i < values.length; i++) {
				if (!values[i].submited) {
					if (values[i].value.length < 5)
						values[i] = {
							...values[i],
							value: values[i].value + action.payload
						}
					break
				}
			}
			return Object.fromEntries(
				values.map((a, i) => [`word${i + 1}`, a])
			) as WordsType
		}
		case WordsActionKind.EDIT: {
			const values = Object.values(state)

			for (let i = 0; i < values.length; i++)
				if (values[i].value.length === 0) {
					let index = Math.max(i - 1, 0)
					if (!values[index].submited)
						values[index] = {
							...values[index],
							value: values[index].value.slice(
								0,
								values[index].value.length - 1
							)
						}
					break
				}
			return Object.fromEntries(
				values.map((a, i) => [`word${i + 1}`, a])
			) as WordsType
		}
		case WordsActionKind.SUBMIT: {
			const values = Object.values(state)
			for (let i = 0; i < values.length; i++) {
				if (!values[i].submited) {
					if (
						values[i].value.length === 5 &&
						words.includes(values[i].value.toLowerCase())
					)
						values[i] = { ...values[i], submited: true }
					break
				}
			}
			return Object.fromEntries(
				values.map((a, i) => [`word${i + 1}`, a])
			) as WordsType
		}
		default:
			return state
	}
}

export const WordsContext = createContext<{
	state: WordsType
	dispatch: React.Dispatch<WordsAction>
}>({
	state: initialState,
	dispatch: () => null
})

export const WordsProvider = ({
	children
}: {
	children: React.ReactElement | React.ReactElement[]
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<WordsContext.Provider value={{ state, dispatch }}>
			{children}
		</WordsContext.Provider>
	)
}
