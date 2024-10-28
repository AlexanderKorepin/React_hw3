import logo from './logo.svg';
import './App.css';
import ParentCounter from './components/parent';
import InputForm from './components/TextDisplayForm';
import Nav from './components/menu';
import HoverRating from './components/rating';
import BasicList from './components/list';
import Student from './components/propType';

function App() {
  return (
    <div>
        <HoverRating />
        <Nav />
        <ParentCounter />
        <InputForm />
        <BasicList />
        <Student name='Dima' age={21} isStudent={true}/>
        
    </div>
  );
}

export default App;
