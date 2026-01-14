// Understanding of event handling in JSX, particulary button click events. Also understand which function scope works, one within the component or outside the component.


// Since this function is outside the component, it won't have access to component state or props.
function buttonClick() {
    console.log("Button Clicked Outside the Component");
    alert("Button was clicked outside the component!");
}

function ButtonClicks() {

    function buttonClick() {
        console.log("Button Clicked Inside the Component");
        alert("Button was clicked inside the component!");
    }

    return (
        <>
            <button onClick={() => buttonClick()}>Click Me</button>
        </>
    );
}

export default ButtonClicks;