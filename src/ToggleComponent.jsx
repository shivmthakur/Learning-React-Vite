import { useState } from 'react';
import ToggleButton from './ToggleButton.jsx';

function ToggleComponent() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <h2>Toggle Component</h2>
            <button type="button" onClick={() => setDisplay(!display)}>Click to Toggle Component</button>
            {display ? <ToggleButton /> : null}
        </>
    );
}

export default ToggleComponent;