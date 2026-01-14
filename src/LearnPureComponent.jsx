/**
 * Pure components in React are components that do not depend on or modify any external state. They render the same output for the same set of props and state, making them predictable and easier to debug.
 * Impure Components, on the other hand, may rely on or modify external state, leading to side effects and unpredictable behavior.
 */

// import { useState } from 'react';
let count = 0;
function LearnPureComponent() {

    // const [storeCount, setStoreCount] = useState(0);

    const handleClick = (count) => {
        count = count + 1;
        // setStoreCount(count);
    }

    // count += 1;

    return (
        <>
            <ChildOfPureComponent count={count} handleClick={handleClick} />
        </>
    );
}

function ChildOfPureComponent({ count, handleClick}) {
    return (
        <div className="universal-container">
            <h4>Learn Pure Component</h4>
            <p>Value of Count on Rendering the Component : {count}</p>
            <p>Value of Count on Rendering the Component : {count}</p>
            <p>Value of Count on Rendering the Component : {count}</p>
            <p>Value of Count on Rendering the Component : {count}</p>
            <button type="submit" onClick={() => {
                handleClick(count);
            }}>Click</button>
        </div>
    );
}

export default LearnPureComponent;