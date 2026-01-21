import { useState, useReducer } from 'react';

function LearnUseReducer() {

    const emptyData = {
        name: "",
        password: "",
        email: "",
        city: "",
        address: ""
    };

    function reducer(data, action) {
        if (action === "empty") {
            return {
                name: "",
                password: "",
                email: "",
                city: "",
                address: ""
            };
        }
        return {
            ...data,
            [action.type]: action.value
        };
    }

    const [state, dispatch] = useReducer(reducer, emptyData);

    console.log(state);

    return (
        <div className="universal-container">
            <h4>Learn Use Reducer</h4>
            <input type="text" value={state.name} placeholder='Enter user name' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "name"
                });
            }} />
            <br /><br />
            <input type="text" value={state.password} placeholder='Enter user password' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "password"
                });
            }} />
            <br /><br />
            <input type="text" value={state.email} placeholder='Enter user email' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "email"
                });
            }} />
            <br /><br />
            <input type="text" value={state.city} placeholder='Enter user city' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "city"
                });
            }} />
            <br /><br />
            <input type="text" value={state.address} placeholder='Enter user address' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "address"
                });
            }} />
            <br /><br />

            <h4>Printing all the details -</h4>
            <ul>
                <li>Name: {state.name}</li>
                <li>Password: {state.password}</li>
                <li>Email: {state.email}</li>
                <li>City: {state.city}</li>
                <li>Address: {state.address}</li>
            </ul>
            <button type="submit" onClick={() => {
                dispatch("empty")
            }}>Clear Details</button>
        </div>
    );

}

export default LearnUseReducer;