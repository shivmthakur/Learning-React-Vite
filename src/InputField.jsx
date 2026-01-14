import { useState } from "react";

function InputField() {

    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input type="text" value={inputValue} onChange={(event) => {
                setInputValue(event.target.value);
            }} placeholder="Enter Text Here"/>
            <button type="button" onClick={() => {
                setInputValue("");

            }}>Clear</button>
            <h3>{inputValue}</h3>
        </>
    );
}

export default InputField;