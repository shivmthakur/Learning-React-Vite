import { useState } from 'react';

function CommonHeader() {
    return (
        <>
            <Header />
            <Navigation />
        </>
    );
}

export function Header() {

    const [count, setCounter] = useState(10);
    return (
        <>
            <h1>Welcome to my website</h1>
            <h3 onClick={() => setCounter(containerCount(count))}>Please follow up with the navigation tools for further more details {containerCount(count)}</h3>
        </>
    );
}

export function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    );
}

export function containerCount(number) {
    if (number > 50) {
        return number;
    }
    return number + 10;
}

export default CommonHeader;