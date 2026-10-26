import { useEffect, useRef } from "react";

function CreateStudent(){

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        nameRef.current?.focus();
    })


    return <>
    
    <div className="container mt-4">
        <h2>
            Add Student
        </h2>

        <form action="">
            <div>
                <label htmlFor="studentName">Stduent Name</label>
            <input ref={nameRef} type="text" className="form-control" placeholder="enter student name" id="studentName"/>

            </div>

            <button className="btn btn-primary" type="submit">Save student</button>
        </form>
    </div>
    
    </>

}


export default CreateStudent;