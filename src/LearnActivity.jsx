import { useState, Activity } from "react";

function LearnActivity() {

    const [togglePage, setTogglePage] = useState(true);
    return (
        <div className="universal-container">
            <h4>Learn Activity in React 19.2</h4>
            <ul>
                <li>
                    <button type="button" onClick={() => setTogglePage(true)}>
                        Home Page
                    </button>
                </li>
                <br />
                <li>
                    <button type="button" onClick={() => setTogglePage(false)}>
                        Login Page
                    </button>
                </li>
            </ul>
            <Activity mode={togglePage == true ? "visible" : "hidden"}>
                <HomePage />
            </Activity>
            <Activity mode={togglePage == false ? "visible" : "hidden"}>
                <LoginPage />
            </Activity>
        </div>
    );
}

function HomePage() {
    return (
        <>
            <h4>Home Page</h4>
            <h5>Content of the Home Page</h5>
        </>
    );
}

function LoginPage() {
    return (
        <>
            <h4>Login Page</h4>
            <input type="text" name="firstname" placeholder="Enter you firstname" />
            <input type="text" name="middlename" placeholder="Enter you middlename" />
            <input type="text" name="lastname" placeholder="Enter you lastname" />
        </>
    );
}

export default LearnActivity;