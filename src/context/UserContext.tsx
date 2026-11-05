import { Children, createContext, useState, type ReactNode } from "react";
import type { User } from "./types/User";


interface UserContextType {
    user: User | null;
    login: (user:User) => void,
    logout: ()=>void
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface ProviderProps {
    children: ReactNode
}

export function UserProvider({children}:ProviderProps){
    const [user, setUser] = useState<User | null>(null)
    
    const login = (userDate: User)=> {
        setUser(userDate);
    }

    const logout = ()=>{
        setUser(null)
    }

    return <UserContext.Provider value={ {user,login,logout} }>
        {children}
    </UserContext.Provider>

}
