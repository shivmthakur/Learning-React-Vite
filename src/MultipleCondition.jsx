import { useState } from 'react';

function MultipleCondition() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h2>Multiple Condition Component</h2>
            <button onClick={() => setCounter(counter + 1)}>Click Me - {counter}</button>
            {
                counter === 0 ? <h2>This is {counter} Component</h2>:
                counter === 1 ? <h2>This is {counter} Component</h2>:
                counter === 2 ? <h2>This is {counter} Component</h2>:
                counter > 2 && counter <= 5 ? <h2>This is Greater than 2 and Less than 5 Component</h2> :
                <h2>This is Greater than 5 Component</h2>
            }
        </>
    );
}

export default MultipleCondition;