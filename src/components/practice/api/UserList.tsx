import { useEffect, useState } from "react";
import type { UserInterface } from "../../../types/api.interface";
import { getUsers } from "../../../services/UserService";


function UserList(){
    const [user, setUser] = useState<UserInterface[]>([])


    // method one using fetch
    // useEffect(()=>{
    //     axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
    //     .then((response)=>{
    //         setUser(response.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // },[])




    // method two using async/await
    // useEffect(()=>{
    //     const fetchUsers = async ()=>{
    //         try {
    //             const response = await axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
    //         setUser(response.data);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchUsers();
    // },[])


    // method three lib -> services -> effect
    
    useEffect(()=>{
        getUsers().then(setUser)
        .catch((error)=>{
            console.log(error);
        })
    },[])


    return <>
    
    <div className="container py-4">
        <h1>Users</h1>

        {user.map((user)=> <div key={user.id} className="card mb-3">
            <div className="card-body">
                <h5>{user.name}</h5>
                <p>{user.email}</p>
            </div>
        </div>
        )}
    </div>
    
    </>
}

export default UserList;