import { useState, useMemo } from "react";

function LearnUseMemo() {

    const delayFunction = (num) => {
        console.log("Delaying...");
        for (let i = 0; i < 1000000000; ++i) { }
        return num * 2;
    }

    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState(false);
    const values = useMemo(() => {
        return delayFunction(num);
    }, [num]);

    const styles = useMemo(() => {
        return {
            backgroundColor: theme ? "red" : "green",
            color: theme ? "black" : "white"
        }
    }, [theme]);

    return (
        <div className="universal-container">
            <h4>Learn Use Memo</h4>
            <input type="number" value={num} onChange={(event) => {
                setNum(parseInt(event.target.value));
            }} />
            <button onClick={() => setTheme(!theme)}>Change Theme</button>
            <div style={{ ...styles, width: "200px", justifyContent: "center", alignSelf: "center" }}>
                {values}
            </div>
        </div>
    );
}

export default LearnUseMemo;