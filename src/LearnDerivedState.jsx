import { useState } from 'react';
import './css/inputStyle.css';

function LearnDerivedState() {

    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("");

    // Derived State - since these values can be derived from the existing state (users and userName)
    const total = users.length;
    const totalUniqueUsers = [...new Set(users)].length;
    const user = userName;

    return (
        <div className="universal-container">
            <h4>Learn Derived State</h4>

            <h3>Total Users - {total}</h3>
            <h3>Total Unique Users - {totalUniqueUsers}</h3>
            <h3>Last User Added - {user}</h3>

            <input type="text" onChange={(event) => {
                setUserName(event.target.value);
            }} placeholder="Enter the User Name" />
            <br /> <br />
            <button type="submit" onClick={() => {
                if (userName.trim() !== '')
                    setUsers([...users, userName]);
            }}>Click</button>
            <ul>
                {
                    users.map((user, index) => {

                        return (
                            <li>{user}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default LearnDerivedState;