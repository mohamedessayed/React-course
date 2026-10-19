import type React from "react";

export interface StudentInterface {
        name:string,
        age:number,
        mail?:string | null
    }


type StudentProps = {
    student: StudentInterface
}

function StudentCard({student}:StudentProps): React.JSX.Element {
    return <div className="card p-3">
        <h2>{student.name}</h2>
        <p>Age: {student.age}</p>

    </div>
}

export default StudentCard;