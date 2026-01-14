import { useState } from 'react';

function HandleRadioDropdown() {

    const [selectedOption, setSelectedOption] = useState('Transgender');
    const [dropdownValue, setDropdownValue] = useState('select a car');

    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked)
            setSelectedOption(value);
    };

    return (
        <>
            <div className="universal-container">
                <p>Handle Radio and Dropdown</p>
                <div className="radio-button">
                    <input onChange={handleChange} type="radio" name="Gender" id="Male" value="Male" />
                    <label htmlFor="Male">Male</label>
                    <input onChange={handleChange} type="radio" name="Gender" id="Female" value="Female" />
                    <label htmlFor="Female">Female</label>
                    <input onChange={handleChange} type="radio" name="Gender" id="Transgender" value={selectedOption} checked={selectedOption === "Transgender"}/>
                    <label htmlFor="Transgender">Transgender</label>
                </div>
            </div>

            <div className="universal-container">
                <label htmlFor="cars">Choose a car</label>
                <select name="cars" id="cars" onChange={(event) => {
                    setDropdownValue(event.target.value);
                }} defaultValue={dropdownValue}>
                    <option value="select a car">Select a car</option>
                    <option value="volvo">Volvo</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="bmw">BMW</option>
                </select>
            </div>
        </>
    );
}

export default HandleRadioDropdown;