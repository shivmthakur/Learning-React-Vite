import { useState } from 'react';

// If you're exporting multiple fn() directly, then you can use destructuring import while importing
// else if you're exporting single fn() as default export, then you can import without destructuring

export function useToggle(defaultValue = true) {

    const [state, setState] = useState(defaultValue);

    const toggleState = (value) => {
        if (value === undefined) {
            setState(!state);
        }
        else if (value && typeof value === "boolean" && value === true) {
            setState(true);
        }
        else {
            setState(false);
        }
    }
    return [state, toggleState];
}