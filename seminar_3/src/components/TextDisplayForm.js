import { useState } from 'react'
import { TextField, Button } from '@mui/material'
function TextDisplayForm() {
	// Создаем состояния для хранения текста в поле ввода:
	const [text, setText] = useState('')
	// И состояние для отображаемого текста:
	const [printText, setPrintText] = useState('')

	const handleText = event => {

		event.preventDefault() 
		// Передаем текст из инпута в переменную для отображения:
		setPrintText(text)
		// Очищаем поле ввода:
		setText('')
	}
	return (
		<>
			<TextField
				label='Введите текст'
				variant='outlined'
				fullWidth
				value={text}
				onChange={e => setText(e.target.value)}
			/>
            <h2></h2>
			<Button  variant='contained' color='primary' onClick={handleText}>
				Отобразить текст
			</Button>
			<h5>{printText}</h5>
		</>
	)
}

export default TextDisplayForm