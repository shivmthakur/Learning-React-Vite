import { useToggle } from "./customHooks/useToggle";

function LearnCustomHook() {

    const [value, toggleState] = useToggle(true);

    const [data, setData] = useToggle(true);

    return (

        <div className="universal-container">
            <h4>Learn Custom Hook</h4>
            <br />
            <ButtonElementComponent name="Toggle Paragraph" toggleState={toggleState} />
            <ButtonElementComponent name="Hide Paragraph" toggleState={toggleState} />
            <ButtonElementComponent name="Show Paragraph" toggleState={toggleState} />

            {
                value && <p>This is the paragraph to show or hide or toggle based on the toggleState Hook.</p>
            }

            <hr />

            <ButtonElementComponent name="Toggle heading" toggleState={setData} />
            <ButtonElementComponent name="Hide heading" toggleState={setData} />
            <ButtonElementComponent name="Show heading" toggleState={setData} />

            {
                data && <h4>This is the heading to show or hide or toggle based on the toggleState Hook.</h4>
            }
        </div>

    );

}

function ButtonElementComponent({ name, toggleState }) {

    const updateToggleState = (value) => {
        if (value === "Toggle Paragraph" || value === "Toggle heading") {
            toggleState();
        }
        else if (value === "Show Paragraph" || value === "Show heading") {
            toggleState(true);
        }
        else if (value === "Hide Paragraph" || value === "Hide heading") {
            toggleState(false);
        }
    }

    return (
        <button type="button" onClick={(event) => {
            debugger;
            updateToggleState(event.target.innerText);
        }}>{name}</button>
    );
}

export default LearnCustomHook;