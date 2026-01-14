function LearnInnerStyle() {

    const cardStyle = {
        border: "1px solid #ccc",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px"
    };

    const imageStyle = {
        width: "200px",
    };

    const textContainerStyle = {
        padding: "5px",
    };

    return (
        <div>
            <h1 style={{ color: "red" }}>Inline Style in React</h1>
            <div style={{ display: "flex" }}>
                <div
                    style={cardStyle}
                >
                    <img
                        style={imageStyle}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt=""
                    />
                    <div style={textContainerStyle}>
                        <h4>Shivam Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div
                    style={cardStyle}
                >
                    <img
                        style={imageStyle}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt=""
                    />
                    <div style={textContainerStyle}>
                        <h4>Shivam Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div
                    style={cardStyle}
                >
                    <img
                        style={imageStyle}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt=""
                    />
                    <div style={textContainerStyle}>
                        <h4>Shivam Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div
                    style={cardStyle}
                >
                    <img
                        style={imageStyle}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt=""
                    />
                    <div style={textContainerStyle}>
                        <h4>Shivam Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div
                    style={cardStyle}
                >
                    <img
                        style={imageStyle}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt=""
                    />
                    <div style={textContainerStyle}>
                        <h4>Shivam Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnInnerStyle;