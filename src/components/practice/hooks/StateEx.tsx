import { useEffect, useState } from "react";


type StudentType = {
        name:string,
        age:number
    }


function StateEx() {

    const [count,setCount] = useState<number>(0);
    
    // const [userName, setUserName] = useState<string>('Ahmed')

    const [isLoggin] = useState<boolean>(false);

    const [students, setStudents] = useState<string[]>(['Ali'])

    const [student,setStudent] = useState<StudentType>({name:"Ali",age:23})


    useEffect(()=>{
        console.log(students);
        console.log(student);
        
    },[isLoggin])




    function increament(){
    //    setCount( count + 1 );

    setStudents( prevStudents => ["Ahmed",...prevStudents] )

    setStudent( prevStudent => ({...prevStudent, name:"Walid"}) )

       setCount( prevCount => prevCount + 1 );
    }

    return <div className="text-center">
        
        <h2>{count}</h2>

        <button onClick={increament}>
            Increase
        </button>
    </div>
}


export default StateEx;