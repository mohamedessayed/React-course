import { useMemo, useState } from "react"

function MemoEx() {

    const [grades] = useState<number[]>([90,85,70,95])

    const [count,setCount] = useState<number>(0);

    // const total = grades.reduce((sum,grade)=>{

    //     console.log('calc again');
        
    //     return sum+grade

    // } );

    const total = useMemo(()=>{
        console.log("calc total");
        
        return grades.reduce((sum, grade)=>sum+grade)
    },[grades])


    return<>
    
    
    <div className="container mt-4">
        <h2>Total Grade: {total}</h2>

        <button
        className="btn btn-primary"
        onClick={()=>setCount(count +1)}
        >
            clicked {count} times
        </button>
    </div>

    </>

}


export default MemoEx