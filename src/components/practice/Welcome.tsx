import Dashboard from "../system/Dashboard"

type UserType = {
    name:string,
    email:string
}

export type Props = {
    user: UserType
}

function Welcome(): React.JSX.Element{


    return <Dashboard  />
}


export default Welcome;