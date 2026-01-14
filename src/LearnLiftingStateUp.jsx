import { useState, useTransition } from 'react';

function LearnLiftingStateUp() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");

    return (
        <div className="universal-container">
            <h4>Learn Lifting State Up</h4>
            <InputUserName setUser={setUser} users={users} setUsers={setUsers} user={user} />
            <DisplayUsers users={users} />
        </div>
    );
}

function InputUserName({ setUser, users, setUsers, user }) {

    const [isPending, startTransition] = useTransition();

    const handleAddUser = () => {

        if (user.trim() !== "" && users.indexOf(user) === -1) {
            startTransition(async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setUsers([...users, user]);
            })
        }
    }
    return (
        <div>
            <input type="text" placeholder="Enter user name" onChange={(event) => setUser(event.target.value)} />
            <button type="submit" disabled={isPending} onClick={() => {
                handleAddUser();
            }}>{isPending ? "Adding User..." : "Add User"}</button>
        </div>
    );
}

function DisplayUsers({ users }) {
    return (
        <div>
            <h5>All Users</h5>
            <ul>
                {
                    users.map((user, index) => {
                        return <li key={index}>{user}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default LearnLiftingStateUp;