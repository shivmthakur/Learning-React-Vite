import { Fragment } from "react";

function LearnFragment() {
    return (
        <div className="universal-container">
            <ChildFragment />
        </div>
    );
}

function ChildFragment() {
    return (
        <Fragment>
            <h2>Learn Fragment</h2>
        </Fragment>
    );
}


export default LearnFragment;