import { useState, useTransition } from "react";

function LearnUpdatingObjectsInState() {

    const [isPending1, startTransition1] = useTransition();
    const [isPending2, startTransition2] = useTransition();
    const [isPending3, startTransition3] = useTransition();
    const [user, setUser] = useState({
        name: "Shivam",
        address: {
            city: "Noida",
            state: "Uttar Pradesh",
            country: "India"
        }
    })

    const handleUpdateName = () => {
        startTransition1(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let updateName = user.name === "Shivam" ? "Hritesh" : "Shivam";
            setUser({
                ...user,
                name: updateName
            })
        });
    }

    const handleUpdateCity = () => {
        startTransition2(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let updateCity = user.address.city === "Noida" ? "Hyderabad" : "Noida";
            setUser({
                ...user,
                address: {
                    ...user.address,
                    city: updateCity
                }
            })
        });
    }

    const handleUpdateState = () => {
        startTransition3(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let updateState = user.address.state === "Uttar Pradesh" ? "Telangana" : "Uttar Pradesh";
            setUser({
                ...user,
                address: {
                    ...user.address,
                    state: updateState
                }
            })
        });
    }

    return (
        <div className="universal-container">
            <h4>Learn Updating Objects in State</h4>
            <p>Name: {user.name}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state}</p>
            <p>Country: {user.address.country}</p>
            <button disabled={isPending1} onClick={handleUpdateName}>{isPending1 ? "Updating..." : "Update Name"}</button>
            <button disabled={isPending2} onClick={handleUpdateCity}>{isPending2 ? "Updating..." : "Update City"}</button>
            <button disabled={isPending3} onClick={handleUpdateState}>{isPending3 ? "Updating..." : "Update State"}</button>
        </div>
    )
}

export default LearnUpdatingObjectsInState;