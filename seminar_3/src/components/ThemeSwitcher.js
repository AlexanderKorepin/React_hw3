import { useState } from 'react'
import MessagesList from './mList'


function ThemeSwitcher() {
	const [theme, setTheme] = useState('light')

	function switchTheme() {
		if (theme === 'light') {
			setTheme('dark')
			document.querySelector('body').style.backgroundColor = 'black'
		} else {
			setTheme('light')
			document.querySelector('body').style.backgroundColor = 'white'
		}
	}
	return (
		<>
			<button onClick={switchTheme}>Переключить тему</button>
		  {/* Выводим весь список с новым пропсом themeColor: */}
			<MessagesList themeColor={theme} />
		</>
	)
}

export default ThemeSwitcher