import { useState } from "react";
import './css/LearnExternalStyle.css';

function LearnExternalStyle() {

    const [orientation, setOrientation] = useState('flex');

    const userDetails = [
        {
            "employeeId": "IVP001",
            "name": "Aman Verma",
            "age": 29,
            "role": "Software Engineer",
            "team": "Deal Platform",
            "location": "Bengaluru",
            "img": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            "employeeId": "IVP002",
            "name": "Sneha Singh",
            "age": 26,
            "role": "QA Analyst",
            "team": "Quality Engineering",
            "location": "Hyderabad",
            "img": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            "employeeId": "IVP003",
            "name": "Rohit Sharma",
            "age": 31,
            "role": "Senior Backend Engineer",
            "team": "OMS Integration",
            "location": "Mumbai",
            "img": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            "employeeId": "IVP004",
            "name": "Ananya Raj",
            "age": 28,
            "role": "Data Analyst",
            "team": "Insights & Analytics",
            "location": "Gurugram",
            "img": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            "employeeId": "IVP005",
            "name": "Vikas Mehta",
            "age": 34,
            "role": "Tech Lead",
            "team": "Order Management System",
            "location": "Bengaluru",
            "img": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
            "employeeId": "IVP006",
            "name": "Kritika Joshi",
            "age": 25,
            "role": "Frontend Developer",
            "team": "UI/UX Engineering",
            "location": "Pune",
            "img": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        {
            "employeeId": "IVP007",
            "name": "Harsh Patel",
            "age": 30,
            "role": "Cloud Engineer",
            "team": "Infrastructure",
            "location": "Noida",
            "img": "https://randomuser.me/api/portraits/men/67.jpg"
        },
        {
            "employeeId": "IVP008",
            "name": "Priya Nair",
            "age": 27,
            "role": "Business Analyst",
            "team": "Product Strategy",
            "location": "Chennai",
            "img": "https://randomuser.me/api/portraits/women/71.jpg"
        },
        {
            "employeeId": "IVP009",
            "name": "Shivam Singh",
            "age": 24,
            "role": "Software Developer",
            "team": "Deal Platform (Allocation Flow)",
            "location": "Bengaluru",
            "img": "https://randomuser.me/api/portraits/men/80.jpg"
        },
        {
            "employeeId": "IVP010",
            "name": "Deepak Chauhan",
            "age": 32,
            "role": "DevOps Engineer",
            "team": "CI/CD & Automation",
            "location": "Hyderabad",
            "img": "https://randomuser.me/api/portraits/men/91.jpg"
        }
    ]

    let profileCard = {
        "display": orientation,
        "border-radius": "10px",
        "padding": "5px"
    }

    let changeView = (orientation) => {
        if (orientation === "block")
            setOrientation("flex");
        else if (orientation === "flex") {
            setOrientation("block");
        }

    }
    return (
        <>
            <div className="universal-container">
                <div className="view">
                    <button type="button" onClick={(event) => { changeView(orientation) }}>Change View</button>
                </div>
                <div className="profile-cards" style={profileCard}>
                    <UserCard userDetails={userDetails} />
                </div>
            </div>
        </>
    );
}

function UserCard({ userDetails }) {
    return (
        <>
            {
                userDetails.map(userDetail => {
                    return (
                        <>
                            <div className="user-info-card">
                                <UserImage imgLink={userDetail.img} />
                                <UserName name={userDetail.name} />
                                <UserId id={userDetail.employeeId} />
                                <UserAge age={userDetail.age} />
                                <UserRole role={userDetail.role} />
                                <UserTeam team={userDetail.team} />
                                <UserLocation location={userDetail.location} />
                            </div>
                        </>
                    );
                })
            }
        </>
    );
}

function UserImage({ imgLink }) {
    return (
        <>
            <img src={imgLink} alt="Image not found" />
        </>
    );
}

function UserName({ name }) {
    return (
        <>
            <h4>{name}</h4>
        </>
    );
}

function UserId({ id }) {
    return (
        <>
            <p>{id}</p>
        </>
    );
}

function UserAge({ age }) {
    return (
        <>
            <p>{age}</p>
        </>
    );
}

function UserRole({ role }) {
    return (
        <>
            <p>{role}</p>
        </>
    );
}

function UserTeam({ team }) {
    return (
        <>
            <p>{team}</p>
        </>
    );
}

function UserLocation({ location }) {
    return (
        <>
            <p>{location}</p>
        </>
    );
}

export default LearnExternalStyle;