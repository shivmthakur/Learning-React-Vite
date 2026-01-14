import { useEffect, useState } from "react";

function UseEffect () {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // This useEffect lets the function to execute only once.
    useEffect(() => {
        callOnce();
    }, []);

    useEffect(() => {
        callOnce();
    }, [counter1]);

    function callOnce() {
        console.log("This function is supposed to be called only a single time");
    }
    
    // callOnce();
    return (
        <div className="universal-container">
             <button type="button" onClick={(event) => {
                setCounter1(counter1+1);
             }}>Click Me 1 - {counter1}</button>

             <button type="button" onClick={(event) => {
                setCounter2(counter2+1);
             }}>Click Me 2 - {counter2}</button>
        </div>
    );

}

export default UseEffect;