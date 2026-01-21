export function Props () {

    let name = "Shivam Singh",
        age = 24,
        Location = "Noida, Uttar Pradesh, India";

    let userObject = {
        name: "Hritesh Dwivedi",
        age: 25,
        Location: "Noida, Uttar Pradesh, India"
    }

    let userList = ["Ankit Kumar", 26, "Delhi, India"];
    return (
        <>
            <h2>Props Components</h2>
            <UserComponent name={name} age={age} Location={Location} />
            <DynamicObjectUserComponent {...userObject} />
            <DynamicArrayUserComponent name={userList[0]} age={userList[1]} Location={userList[2]} />
        </>
    );
}

function UserComponent(props) {
    return (
        <>
            <h4>Printing User Details</h4>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Location: {props.Location}</p>
        </>
    );
}

function DynamicObjectUserComponent({ name, age, Location}) {
    return (
        <>
            <h4>Printing User Details</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Location: {Location}</p>
        </>
    );
}

function DynamicArrayUserComponent({ name, age, Location}) {
    return (
        <>
            <h4>Printing User Details</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Location: {Location}</p>
        </>
    );
}