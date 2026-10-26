import { useEffect, useState } from "react";



function EffectEx() {

    const [name,setName]= useState<string>("Ahmed");


    useEffect(()=>{
        document.title = `Profile - ${name}`;
    },[name])

    
    // useEffect(sideEffectFunction,ArrayDependency)

    return <>

    <div className="container mt-4">
        <h2>Student Profile</h2>

        <input 
        type="text"
        className="form-control"
        value={name}
        onChange={(event)=> setName(event.target.value)}
        />

        <p className="mt-3">
            Student Name: {name}
        </p>
    </div>
    
    </>
}


export default EffectEx;