import { useEffect, useState } from 'react';

function Clock() {

    const [dropdownValue, setDropdownValue] = useState('select a color');

    return (
        <>
            <Dropdown dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} />
            <ClockBanner color={dropdownValue} />
        </>
    );
}

export function Dropdown({ dropdownValue, setDropdownValue }) {

    let handleChange = (event) => {
        setDropdownValue(event.target.value)
    }
    return (
        <>
            <div className="universal-container">
                <select name="color" id="color" onChange={handleChange} defaultValue={dropdownValue}>
                    <option value="select a color" hidden>Select a color</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Gray">Gray</option>
                </select>
            </div>
        </>
    );

}

export function ClockBanner({ color }) {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const bannerStyle = {
        color: color !== "select a color" ? color : "pink",
        padding: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px'
    };

    return (
        <div className="universal-container" style={bannerStyle}>
            Current Time - {time}
        </div>
    );
}

export default Clock;