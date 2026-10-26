import { useRef, useState } from "react";

function RefEx() {

    const clicks = useRef<number>(-1);
    const [init,setInit] = useState(0)

    function handelClick(){

        setInit(init+1)

        console.log(clicks);
        

    }
    return <>
    
    <div className="container mt-4">
        <h2>Click Counter</h2>

        <p>{init}</p>

        <button onClick={handelClick} className="btn btn-primary">
            click Me
        </button>
    </div>


    </>

}


export default RefEx;