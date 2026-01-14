function NestedLooping() {

    const collegeData = [
        {
            "collegeName": "ABC College of Engineering",
            "collegeCode": "ABC1023",
            "location": "Mumbai, Maharashtra, India",
            "students": [
                {
                    "studentId": "STU-001",
                    "name": "Rohit Kumar",
                    "age": 20,
                    "branch": "CSE",
                    "year": 2
                },
                {
                    "studentId": "STU-002",
                    "name": "Ananya Singh",
                    "age": 21,
                    "branch": "ECE",
                    "year": 3
                },
                {
                    "studentId": "STU-003",
                    "name": "Mohit Sharma",
                    "age": 19,
                    "branch": "Mechanical",
                    "year": 1
                }
            ]
        },
        {
            "collegeName": "National Institute of Technology",
            "collegeCode": "NIT2049",
            "location": "Bengaluru, Karnataka, India",
            "students": [
                {
                    "studentId": "STU-004",
                    "name": "Priya Verma",
                    "age": 22,
                    "branch": "IT",
                    "year": 4
                },
                {
                    "studentId": "STU-005",
                    "name": "Sahil Mehta",
                    "age": 20,
                    "branch": "Civil",
                    "year": 2
                },
                {
                    "studentId": "STU-006",
                    "name": "Sneha Patel",
                    "age": 21,
                    "branch": "CSE",
                    "year": 3
                }
            ]
        },
        {
            "collegeName": "Modern College of Science & Arts",
            "collegeCode": "MCSA5517",
            "location": "Delhi, India",
            "students": [
                {
                    "studentId": "STU-007",
                    "name": "Aman Gupta",
                    "age": 23,
                    "branch": "Biotech",
                    "year": 4
                },
                {
                    "studentId": "STU-008",
                    "name": "Kritika Joshi",
                    "age": 19,
                    "branch": "BCA",
                    "year": 1
                },
                {
                    "studentId": "STU-009",
                    "name": "Rajat Kumar",
                    "age": 20,
                    "branch": "Physics",
                    "year": 2
                }
            ]
        }
    ];
    return (
        <>
            <h2>Nested Looping</h2>
            {
                collegeData.map(college => {
                    return (
                        <College college={college}/>
                    );
                })
            }
        </>
    );
}

export function College ({college}) {
    return (
        <div className="universal-container" key={college.collegeCode}>
            <ul>
                <li>College Name - {college.collegeName}</li>
                <li>College Code - {college.collegeCode}</li>
                <li>Location - {college.location}</li>
                <li>Student Details:</li>
                <ul>
                    {
                        college.students.map(student => {
                            return (
                                <>
                                    <Student student={student} />
                                </>
                            );
                        })
                    }
                </ul>
            </ul>
        </div>
    );
}

export function Student ({student}) {
    return (
        <div key={student.studentId}>
            <table border="1px solid #000" width="400px" textAlign="center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.branch}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default NestedLooping;