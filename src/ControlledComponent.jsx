import { useState } from 'react';
import './ControlledComponent.css';

function ControlledComponent() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<div className="universal-container">
				<form action="/" method="get">
					<div className="element-section">
						<label htmlFor="name">Name: </label>
						<input type="text" name="" id="" value={name} onChange={(event) => {
							setName(event.target.value);
						}} />
					</div>
					<div className="element-section">
						<label htmlFor="email">Email: </label>
						<input type="email" name="" id="" value={email} onChange={(event) => {
							setEmail(event.target.value);
						}} />
					</div>
					<div className="element-section">
						<label htmlFor="password">Password: </label>
						<input type="password" name="" id="" value={password} onChange={(event) => {
							setPassword(event.target.value);
						}} />
						<span className="material-symbols-outlined" onClick={(event) => {
							// how can I set type password to type text here using react hooks ?
							let passwordInput = event.target.previousElementSibling;
							if (passwordInput.type === "password") {
								passwordInput.type = "text";
							} else {
								passwordInput.type = "password";
							}
						}}>
							face_2
						</span>
					</div>
					<button type="submit">Submit</button>
					<button type="button" onClick={() => {
						setName("");
						setEmail("");
						setPassword("");
					}}>Clear</button>
				</form>
			</div>
		</>
	);
}

export default ControlledComponent;