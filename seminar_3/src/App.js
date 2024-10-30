
import React from'react';
import './App.css';
import Greeting from './components/greetingProp';
import ParentCounter from './components/count';
import MessagesList from './components/mList';
import ThemeSwitcher from './components/ThemeSwitcher';
import TextDisplayForm from './components/TextDisplayForm';





function App() {
  // const name = "Alexander";
  return (
   
    <div class='App-header'>
      {/* <Greeting name = {name}/>
      <ParentCounter />  */}
      {/* <MessagesList /> */}
      {/* <ThemeSwitcher />
     */}
     <TextDisplayForm />

    </div>
  );
}

export default App;
