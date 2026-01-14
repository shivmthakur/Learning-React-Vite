import { useState } from "react";

function LearnUpdatingArrayInState() {
    const [user, setUser] = useState(["Shivam", "Hritesh", "Sam"]);
    const [userDetails, setUserDetails] = useState(
        [
            {
                name: "Shivam",
                age: 24,
                role: "Developer"
            },
            {
                name: "Hritesh",
                age: 24,
                role: "Developer"
            },
            {
                name: "Sam",
                age: 24,
                role: "Developer"
            }
        ]);

    return (
        <div className="universal-container">
            <h4>Learn Updating Array in State</h4>
            <input type="text" placeholder="Update Last Name" onChange={(event) => {
                const name = event.target.value;
                user[user.length - 1] = name;
                setUser([...user]);
            }} />
            <ul>
                {
                    user.map((name, index) => {
                        return (
                            <li key={index}>{name}</li>
                        );
                    })
                }
            </ul>

            <input type="text" placeholder="Update Last User's Age" onChange={(event) => {
                const age = event.target.value;
                userDetails[userDetails.length - 1].age = age;
                setUserDetails([...userDetails]);
            }} />
            <ul>
                {
                    userDetails.map((user, index) => {
                        return (
                            <li key={index}>{user.age}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default LearnUpdatingArrayInState;