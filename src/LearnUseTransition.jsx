import { useTransition, useState } from "react";

/*
 * Difference b/w useTransition and useFormStatus
 * useTransition can be used at any transition point in the application
 * useFormStatus is specifically designed to manage the state of form submissions
*/

function LearnUseTransition() {

    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // Marking the state update as a transition
        startTransition(async () => {
            await new Promise((resolve) => {
                setTimeout(resolve, 500);
            })
            setCount(count+1);
        });
    }

    return (
        <div className="universal-container">
            <h4>Learn Use Transition Hook</h4>
            <button type="button" onClick={handleClick} disabled={isPending}>
                {isPending ? "Updating..." : `Count: ${count}`}
            </button>
        </div>
    );

}

export default LearnUseTransition;