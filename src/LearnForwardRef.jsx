import { useRef } from 'react';

function LearnForwardRef() {

    let inputRef = useRef(null);

    const updateInputElement = () => {
        inputRef.current.value = "Hello There !";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }

    return (
        <div>
            <ChildOfForwardRef inputRef={inputRef} updateInputElement={updateInputElement} />
        </div>
    );

}

function ChildOfForwardRef({inputRef, updateInputElement}) {

    return (
        <div className="universal-container">
            <h4>Learn Forward Ref Hook</h4>
            <input type="text" ref={inputRef} />
            <br />
            <button type="button" onClick={() => {
                updateInputElement();
            }}>Click Me</button>
        </div>
    );

}

export default LearnForwardRef;