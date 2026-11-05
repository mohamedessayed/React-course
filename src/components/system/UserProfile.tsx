import { useUser } from "../../hooks/useUser";

function UserProfile() {

    const {user,logout} = useUser()

    return <>
    
    <h2>{user?.name}</h2>
    <p>{user?.email}</p>

    {user&& <div>
        <button onClick={logout}>
            Logout
        </button>
    </div>}

    </>
}

export default UserProfile;