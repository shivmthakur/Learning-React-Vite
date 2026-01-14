import { useId } from 'react';

function LearnUseId() {
    return (
        <>
            <UserForm />
            <UserForm />
        </>
    );
}

function UserForm() {
    const user = useId();

    return (
        <div className="universal-container">
            <h4>Learn useId Hook</h4>
            <form action="">
                <label htmlFor={user + "name"}>Enter User Name</label>
                <br />
                <input type="text" id={user + "name"} placeholder='UserName' />
                <br />
                <label htmlFor={user + "password"}>Enter User Password</label>
                <br />
                <input type="text" id={user + "password"} placeholder='Password' />
                <br />
                <label htmlFor={user + "skills"}>Enter User Skills</label>
                <br />
                <input type="text" id={user + "skills"} placeholder='Skills' />
                <br />
                <input type="checkbox" id={user + "terms"} style={{alignSelf:"left"}}/>
                <label htmlFor={user + "terms"}>Terms & Conditions</label>
            </form>
        </div>
    );
}

export default LearnUseId;