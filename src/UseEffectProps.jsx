import { useEffect, useState } from "react";

function UseEffectProps () {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    return (
        <>
            <Counter count={count} data={data}/>
            <button type="button" onClick={() => {
                setCount(count+1)
            }}>Increase Counter</button>
            <button type="button" onClick={()=> { setData(data+1)}}>Increase Data</button>
        </>
    );
}

export function Counter ({ count, data }) {

    const reRenderedFunction = () => {
        console.log("This fn() gets re-rendered every time the props gets updated in the parent component");
    }

    // Now the fn() will only run once, no matter how many times the props are updated.
    useEffect(() => {
        // reRenderedFunction();
    }, []);

    useEffect(() => {
        // reRenderedFunction();
    }, [data]);
    
    return (
        <>
            <h3>Counter Value - {count}</h3>
            <h3>Data Value - {data}</h3>
        </>
    );
}

export default UseEffectProps;