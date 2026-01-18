import { useEffect, useState } from "react";

function LearnAPI() {

    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        let response = await fetch("https://dummyjson.com/users");
        response = await response.json();
        setUsers(response.users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log("Printing users => ", users);

    return (
        <div className="universal-container">
            <h4>Learn API</h4>
            <table style={{
                border: "2px solid gray",
                textAlign: "center",
                width: "100%"
            }}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.length ?
                            users.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.company.name}</td>
                                    </tr>
                                );
                            })
                            :
                            ""
                    }
                </tbody>
            </table>
        </div>
    );
}

export default LearnAPI;