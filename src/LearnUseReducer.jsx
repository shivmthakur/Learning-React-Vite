import { useState, useReducer } from 'react';

function LearnUseReducer () {

    const emptyData = {
        name: "",
        password: "",
        email: "",
        city: "",
        address: ""
    };

    function reducer (data, action) {
        return {
            ...data,
            [action.type]: action.val
        };
    }

    const [state, dispatch] = useReducer(reducer, emptyData);

    consol.log(state);

    return (
        <div className="universal-container">
            <h4>Learn Use Reducer</h4>
            <input type="text" placeholder='Enter user name' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "name"
                });
            }} />
            <br /><br />
            <input type="text" placeholder='Enter user password' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "password"
                });
            }} />
            <br /><br />
            <input type="text" placeholder='Enter user email' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "email"
                });
            }} />
            <br /><br />
            <input type="text" placeholder='Enter user city' onChange={(event) => {
                dispatch({
                    value: event.target.value,
                    type: "city"
                });
            }} />
            <br /><br />
            <input type="text" placeholder='Enter user address' onChange={(event) => {
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
            {/* <button type="submit" onClick={() => {
                
            }}>Clear Details</button> */}
        </div>
    );

}

export default LearnUseReducer;