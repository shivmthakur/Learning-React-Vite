import { useRef, useState } from 'react';

function LearnUseRef() {

    const [buttonValue, setButtonValue] = useState("Hide Text");
    const [value, setValue] = useState("");
    const h1ElementRef = useRef(null);
    const inputElementRef = useRef(null);

    const toggleHandler = () => {
        if (h1ElementRef.current.style.display === 'none') {
            h1ElementRef.current.style.display = 'block';
            setButtonValue('Hide Text');
        }
        else {
            h1ElementRef.current.style.display = 'none';
            setButtonValue("Show Text");
        }
    }

    const clearAndShowInputElementValue = () => {
        if (inputElementRef.current.value !== "")
            inputElementRef.current.value = ""
        else
            inputElementRef.current.value = value;
    }

    const inputStyle = {
        border: "none",
        outline: "none",
        padding: "5px",
        width: "400px",
        backgroundColor: "white",
        fontSize: "18px",
        color: "black",
        display: "block",
        borderRadius: "5px"
    }

    return (
        <div className="universal-container">
            <h4>Learning Use Ref Hook</h4>
            <div className='universal-container'>
                <button type="button" onClick={() => { toggleHandler(); }}>{buttonValue}</button>

                <h2 ref={h1ElementRef}>This heading tag is controlled by the button</h2>
            </div>
            <div className='universal-container'>
                <input type="text" style={inputStyle} ref={inputElementRef} id="inputElementRef" value={value} onChange={(event) => { setValue(event.target.value)}} placeholder='Enter a value' />

                <button type="button" onClick={() => { clearAndShowInputElementValue(); }}>Hide / Show</button>
            </div>
        </div>
    );
}

export default LearnUseRef;