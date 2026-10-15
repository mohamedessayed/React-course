import { Component, type ReactNode } from "react";
import Lamp from './../../assets/images/icons/lamp.png'

interface ServiceInterface {
    title:string,
    description:string,
}

type Props = {
    serviceData: ServiceInterface
}

type ServiceState = {

}

class Service extends Component<Props, ServiceState> {

    constructor(props:Props){
        super(props)
        this.state={}
    }

    render(): ReactNode {

        let {title,description} = this.props.serviceData;

        return <div className="service">
            <div className="img-icon">
                <img src={Lamp} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    }
}

export default Service