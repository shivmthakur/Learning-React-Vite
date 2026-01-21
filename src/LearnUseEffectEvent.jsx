import { useEffect, useEffectEvent, useState } from "react";

function LearnUseEffectEvent () {

    const [count, setCount] = useState(0);

    const countController = useEffectEvent(() => {
        setCount(count + 1);
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            countController();
        }, 1000);

        // Using only useEffect here will led to create infinite intervalId since the useEffect executes every time the component re-renders.
        console.log(intervalId);

        // This statement clears the interval when the component is unmounted from the DOM.
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="universal-container">
            <h4>Learn Use Effect Event</h4>
            <h4>Current Count - {count}</h4>
        </div>
    ); 

}

export default LearnUseEffectEvent;