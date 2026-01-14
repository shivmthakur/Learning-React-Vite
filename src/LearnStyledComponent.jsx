import styled from "styled-components"

function LearnStyledComponent() {

    // const Heading = styled.h4`
    //     color: red;
    //     border: 1px solid green;
    //     border-radius: 5px;
    //     margin: 20px;
    //     padding: 20px;
    // `

    const Heading = styled.h4({
        color: 'red',
        border: '1px solid green',
        borderRadius: '5px',
        margin: '20px',
        padding: '20px'
    });

    const StyledButton = styled.button`
        color: red;
        height: 40px;
        margin: 10px;
        width: 150px;
    `

    return (
        <>
            <h4>Styled Component with React.js</h4>
            <Heading>This is Heading 1</Heading>
            <Heading>This is Heading 2</Heading>
            <Heading>This is Heading 3</Heading>
            <Heading>This is Heading 4</Heading>
            <StyledButton>Click Me 1</StyledButton>
            <StyledButton>Click Me 2</StyledButton>
            <StyledButton>Click Me 3</StyledButton>
            <StyledButton>Click Me 4</StyledButton>
        </>
    );
}

export default LearnStyledComponent;