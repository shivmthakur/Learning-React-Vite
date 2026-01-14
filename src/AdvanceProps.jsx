function AdvanceProps() {
    
    let user = {
        name: "John Doe",
        age: 30
    }

    let wrapperElements = [];
    for (let i = 1; i <= 3; i++) {
        wrapperElements.push(<h4 key={i}>Wrapper Content {i}</h4>);
    }

    return (
        <>
            <h2>Advance Props Component</h2>
            <Users {...user}/>
            <Users />
            <Wrapper color="red"> 
                {
                    wrapperElements
                }
            </Wrapper>
            <Wrapper color="white">
                {<h4>Wrapper Content 2</h4>}
            </Wrapper>
            <Wrapper>
                {<h4 style={{color: "yellow"}}>Wrapper Content 3</h4>}
            </Wrapper>
            <Wrapper>
                {<h4>Wrapper Content 3</h4>}
            </Wrapper>
        </>
    );
}

// How to pass default props to a component
export function Users ({ name = "Guest", age = 18 }) {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    );
}

export function Wrapper({children, color = "gray"}) {
    let styleObject = {
        color: color,
        fontSize: "20px",
        margin: "10px",
        border: "1px solid black",
        padding: "10px",
        width: "auto"
    }
    return (
        <>
            <div style={styleObject}>
                {children}
            </div>
        </>
    );
}

export default AdvanceProps;