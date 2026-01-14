function LearnFunctionalProps() {
    const displayName = (name) => {
        alert("Hello, " + name);
    }

    const getUser = () => {
        alert("Get User Function Called");
    }

    let x = ["shivam", "shantanu", "vaibhavi", "pragati"]

    return (
        <>
            <div className="universal-container">
                <h4>Learn Functional Props</h4>
                {
                    x.map((item) => {
                        return <ChildOfFunctionalProps displayName={displayName} name={item} getUser={getUser} />
                    })
                }
            </div>
        </>
    );
}

export function ChildOfFunctionalProps({ displayName, name, getUser }) {
    return (
        <>
            <button type="button" onClick={() => {
                displayName(name);
            }}>Click to View Name</button>
            &nbsp; &nbsp;
            <button type="button" onClick={() => {
                getUser();
            }}>Click to call getUser fn</button>
            <br />
            <br />
        </>
    );

}

export default LearnFunctionalProps;