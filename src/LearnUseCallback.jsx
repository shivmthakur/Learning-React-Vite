import { useState, useEffect, useCallback, memo } from 'react';

function LearnUseCallback() {

    const [num, setNum] = useState(1);
    const [theme, setTheme] = useState(false);

    const styles = {
        backgroundColor: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "#333"
    }

    const getNumbers = useCallback(() => {
        return [num, num * 2, num * 3];
    }, [num]);

    return (
        <div className="universal-container" style={styles}>
            <h4>Learn Use Callback</h4>

            <input type="number" value={num} onChange={(event) => {
                setNum(parseInt(event.target.value));
            }} />

            <ChildOfLearnUseCallback getNumbers={getNumbers} />

            <button onClick={() => {
                setTheme(prevState => !prevState);
            }}>Change Theme</button>
        </div>
    );
}

const ChildOfLearnUseCallback = memo(function ChildOfLearnUseCallback({ getNumbers }) {

    console.log("Child Component Rendered");
    const [numList, setNumList] = useState([]);

    useEffect(() => {
        setNumList(getNumbers());
    }, [getNumbers]);

    return (
        <>
            <ul>
                {numList.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </>
    );
});

export default LearnUseCallback;