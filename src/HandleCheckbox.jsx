import { useState } from 'react';
import './ControlledComponent.css'

function HandleCheckbox() {
    const [check, isChecked] = useState([]);

    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked)
            isChecked([...check, value]);
        else
            isChecked(check.filter((item) => item !== value));
    };

    return (
        <div className="universal-container">
            <p>List of Skills</p>
            <input onChange={handleChange} type="checkbox" value="Football" id="Football" />
            <label htmlFor="Football">Football</label>

            <input onChange={handleChange} type="checkbox" value="BasketBall" id="BasketBall" />
            <label htmlFor="BasketBall">BasketBall</label>

            <input onChange={handleChange} type="checkbox" value="Cricket" id="Cricket" />
            <label htmlFor="Cricket">Cricket</label>

            <input onChange={handleChange} type="checkbox" value="VolleyBall" id="VolleyBall" />
            <label htmlFor="VolleyBall">VolleyBall</label>
            <h4>List of selected Skills are - {check.join(", ")}</h4>
        </div>
    );
}

export default HandleCheckbox;