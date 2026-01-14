import { useRef, useState } from 'react';

function LearnUncontrolledComponent() {

    const nameElementRef = useRef(null);
    const passwordElementRef = useRef(null);
    const emailElementRef = useRef(null);

    const formElement = {
        width: "auto",
        padding: "20px"
    }

    const commonStyle = {
        display: "block"
    }

    const inputStyle = {
        border: "none",
        outline: "none",
        padding: "5px",
        margin: "5px",
        width: "400px",
        backgroundColor: "white",
        fontSize: "18px",
        color: "black",
        borderRadius: "5px"
    }

    const submitFormUsingUseRef = (event) => {
        event.preventDefault();
        let username = nameElementRef.current.value,
            password = passwordElementRef.current.value,
            email = emailElementRef.current.value;

        alert(username + " " + password + " " + email);
    }

    return (
        <div className="universal-container">
            <h4>Learn Uncontrolled Component</h4>
            <form action="" method='post' onSubmit={(event) => {
                submitFormUsingUseRef(event);
            }}>
                <div style={formElement}>
                    <label style={{...commonStyle }} htmlFor="name">Name</label>
                    <input ref={nameElementRef} style={{...commonStyle, ...inputStyle }} type="text" name="name" id="name" />
                </div>

                <div style={formElement}>
                    <label style={{...commonStyle }} htmlFor="password">Password</label>
                    <input ref={passwordElementRef} style={{...commonStyle, ...inputStyle }} type="password" name="password" id="password" />
                </div>

                <div style={formElement}>
                    <label style={{...commonStyle }}htmlFor="email">Email</label>
                    <input ref={emailElementRef} style={{...commonStyle, ...inputStyle }} type="email" name="email" id="email" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LearnUncontrolledComponent;