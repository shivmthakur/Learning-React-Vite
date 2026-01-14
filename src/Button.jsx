import { useState } from 'react';

function Button() {

    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter+2)}>Click me - {counter}</button>
        </>
    )
}

export default Button;