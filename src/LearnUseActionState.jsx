import { useActionState } from 'react';

function LearnUseActionState() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name'),
            password = formData.get('password');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (name && password) {
            return {
                message: 'Form submitted successfully',
                name,
                password
            };
        } else {
            return {
                error: "Please fill all the fields"
            }
        }
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);
    console.log("Action State Data:", data);

    return (
        <div className="universal-container">
            <h4>Learn UseActionState</h4>
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Name" />
                <input defaultValue={data?.password} type="password" name="password" placeholder="Enter Password" />
                <button disabled={pending} type="submit">Submit</button>
            </form>

            <p key="status-message">
                {data?.message && <span style={{color: "green"}}>{data.message}</span>}
                {data?.error && <span style={{color: "red"}}>{data.error}</span>}
            </p>
        </div>
    );
}

export default LearnUseActionState;