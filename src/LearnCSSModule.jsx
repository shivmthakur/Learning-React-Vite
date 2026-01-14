import style from './css/LearnCSSModule.module.css'

function LearnCSSModule() {
    return (
        <div className={style.card}>
            <h4>CSS Modules</h4>
            <img
                className={style.img}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
            />
            <div className={style.textContainer}>
                <h4>Shivam Singh</h4>
                <p>Software Developer</p>
            </div>
        </div>
    );
}

export default LearnCSSModule;