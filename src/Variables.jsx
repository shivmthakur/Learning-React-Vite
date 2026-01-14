// Understanding the usage of variable, operations, conditioning, function calls, objects, array in JSX

function Variables() {
    let name = "Shivam Singh",
        age = 24,
        a = 10,
        b = 20,
        isLoggedIn = true,
        person = {
            name: "John Doe",
            age: 30,
            city: "New York"
        },
        numbers = [1, 2, 3, 4, 5],
        imgPath = "https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
        sum = (a, b) => a + b,
        imgStyle = {
            width: "auto",
            height: "200px",
            borderRadius: "10px"
        };

    return (
        <>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h4>{isLoggedIn ? "User session is created" : "User session is not created"}</h4>
            <h4>{typeof person === 'object' && person.hasOwnProperty('name') ? person.name : 'Property not found'}</h4>
            <h4>{`Address -> ${person.city}`}</h4>
            <h5>{`Printing Number - ${numbers[3]}`}</h5>
            <h5>{`Sum of two random numbers a = ${a} and b = ${b} is ${sum(a, b)}`}</h5>
            <img style={imgStyle} src={imgPath} alt="Source not found" />
        </>
    );
}

export default Variables;