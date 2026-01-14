import { useFormStatus } from "react-dom";

function LearnUseFormStatus() {

    const handleSubmit = async (event) => {
        // event.preventDefault();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        alert("Form Submitted Successfully!");
    }

    return (
        <div className="universal-container">
            <h4>Learn Use Form Status Hook</h4>
            <form action={handleSubmit}>
                <Form />
            </form>

        </div>
    );
}

export function Form() {

    const {pending} = useFormStatus();
    console.log(pending);

    const inputStyle = {
        border: "none",
        outline: "none",
        padding: "5px",
        width: "400px",
        backgroundColor: "white",
        fontSize: "18px",
        color: "black",
        display: "block",
        borderRadius: "5px"
    }

    return (
        <div>
            <input style={inputStyle} type="text" placeholder="Enter your name" />
            <br />
            <input style={inputStyle} type="password" placeholder="Enter your password" />
            <br />
            <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
        </div>
    );
}

export default LearnUseFormStatus;