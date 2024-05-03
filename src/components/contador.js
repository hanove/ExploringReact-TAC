//imports
import { useState } from 'react';

//component
function Contador() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        console.log(count);
    }

    function decrement() {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <p>Valor: {count}</p>
            
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}


//export
export default Contador;