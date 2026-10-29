import { useCallback, useState } from "react";

function CallbackEX() {

    const [count,setCount] = useState<number>(0)

    const handleClick = useCallback(()=>{
        console.log('Button is Clicked');
    },[count])


    return <div className="text-center">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count +1)}>
                Increased
                </button>

                <button onClick={handleClick}>
                click me
                </button>
        </div>
}


export default CallbackEX;