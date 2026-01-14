import { createContext, useContext, useState } from "react";

function LearnContextAPI() {

    const [state, setState] = useState("");

    return (
        <div className="universal-container">
            <h4>Learn Context API</h4>
            <select onChange={(event) => {
                setState(event.target.value);
            }}>
                <option defaultValue={state} value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
            </select>
            <SubjectContext.Provider value={state === "" ? "No Subject Selected": state}>
                <College />
            </SubjectContext.Provider>
        </div>
    );
}

function College() {
    return (
        <div style={{ backgroundColor: 'lightgreen', padding: '10px', color: 'black' }}>
            <h5>College Component</h5>
            <Department />
        </div>
    );
}

function Department() {
    return (
        <div style={{ backgroundColor: 'lightpink', padding: '10px' }}>
            <h5>Department Component</h5>
            <Student />
        </div>
    );
}

function Student() {
    return (
        <div style={{ backgroundColor: 'lightyellow', padding: '10px' }}>
            <h5>Student Component</h5>
            <Subject />
        </div>
    );

}

function Subject() {

    const subject = useContext(SubjectContext);
    return (
        <div style={{ backgroundColor: 'lightgray', padding: '10px' }}>
            <h5>Subject Component</h5>
            <h6>Selected Subject is : {subject}</h6>
        </div>
    );
}

export const SubjectContext = createContext("");

export default LearnContextAPI;