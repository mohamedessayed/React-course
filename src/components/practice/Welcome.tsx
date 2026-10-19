import { useState } from "react";

function Welcome(): React.JSX.Element{

    const [userName,setUserName] = useState("Ali")

    return <h1>Welcome {userName} to React!</h1>
}


export default Welcome;