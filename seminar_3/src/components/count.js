import React, {useState} from 'react';


import Button from '@mui/material/Button';


function ParentCounter() {

    const [count, setCount] = useState(0);

    const clicPlus = () => {
        setCount(count + 1);
    }
    const clicMinus = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
       
    }

    
    return ( 
        <div class='App-header'>
        <Button onClick={clicPlus} variant="contained">счетчик +1</Button>
        <p>{count}</p>
        <Button onClick={clicMinus} variant="contained">счетчик -1</Button>
        
    </div>
  );

}

export default ParentCounter;