import { useState } from 'react';

function Loop() {

    // const userData = ["Shivam", "Hritesh", "Sam", "Pragati"];

    const userData = [
        {
            name: "Shivam",
            age: 24,
            email: "shivam@test.com",
            id: 1

        },
        {
            name: "Hritesh",
            age: 25,
            email: "hritesh@test.com",
            id: 2

        },
        {
            name: "Sam",
            age: 20,
            email: "sam@test.com",
            id: 3

        },
        {
            name: "Pragati",
            age: 26,
            email: "pragati@test.com",
            id: 4

        }
    ]
    // Without using component
    // return (
    //     <>
    //         <table border="2px">
    //             <thead>
    //                 <tr>
    //                     <th>ID</th>
    //                     <th>Name</th>
    //                     <th>Age</th>
    //                     <th>Email</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     userData.map((user) => {
    //                         return (
    //                             <tr>
    //                                 <td>{user.id}</td>
    //                                 <td>{user.name}</td>
    //                                 <td>{user.age}</td>
    //                                 <td>{user.email}</td>
    //                             </tr>
    //                         );
    //                     })
    //                 }
    //             </tbody>
    //         </table>
    //     </>
    // );

    return (
        <>
            <table border="2px">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return <UserDetails id={user.id} user={user} />
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

function UserDetails({id, user}) {

    return (
        <tr>
            <td key={id}>{user.id}</td>
            <td key={id}>{user.name}</td>
            <td key={id}>{user.age}</td>
            <td key={id}>{user.email}</td>
        </tr>
    );
}

export default Loop;