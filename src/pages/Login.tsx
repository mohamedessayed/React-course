import { useUser } from "../hooks/useUser";

function Login (){

    const {login, user} = useUser();


    const handleLogin = ()=>{
        login({
            id:1,
            name:"Ali",
            email:"Ali@mail.com"
        })
    }

    if(user){
        return
    }


    return <button onClick={handleLogin}>
        Login
    </button>

}

export default Login;

