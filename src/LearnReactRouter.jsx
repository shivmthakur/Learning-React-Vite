import { Routes, Route, Link, Navigate, NavLink, Outlet } from 'react-router';

function LearnReactRouter() {

    return (
        <div className="universal-container">
            {/* commenting the below in order to render the NavBar using Layout and indexing Routes */}
            {/* <NavBar /> */}
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/college" element={<College />}>
                    {/* <Route path="student" element={<Student />} /> */}
                    {/* apply index in the Route to open the student page by default */}
                    <Route index element={<Student />} />
                    <Route path="departments" element={<Departments />} />
                    <Route path="details" element={<CollegeDetails />} />
                </Route>

                {/* <Route path="/*" element={<h4>Page Not found</h4>}></Route> */}
                <Route path="/*" element={<Navigate to="/login" />}></Route>
            </Routes>
        </div>
    );

}

function NavBar() {
    return (
        <div>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div className="inline-links">
                <ul>
                    <li>
                        <Link to="/">
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <h4>About</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <h4>Login</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/college">
                            <h4>
                                College
                            </h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Home() {
    return (
        <h4>Home Page</h4>
    );
}

function About() {
    return (
        <h4>About Page</h4>
    );
}

function Login() {
    return (
        <h4>Login Page</h4>
    );
}

function College() {
    return (
        <div>
            <h4>College Page</h4>
            <ul>
                <li>
                    <NavLink to="student">Student</NavLink>
                </li>
                <li>
                    <NavLink to="departments">Departments</NavLink>
                </li>
                <li>
                    <NavLink to="details">College Details</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

function Student() {
    return (
        <>
            <h4>Student Page</h4>
        </>
    );
}

function Departments() {
    return (
        <>
            <h4>Departments Page</h4>
        </>
    );
}

function CollegeDetails() {
    return (
        <>
            <h4>College Details Page</h4>
        </>
    );
}

export default LearnReactRouter;