import { Component, type ReactNode } from "react";
import Service from "./layouts/Service";

interface servicesInterface {
    icon?:string,
    title:string,
    description:string
}

type State = {
servicesItem:servicesInterface[]
}

type Props = {}


class ServiceSection extends Component<Props, State> {

    constructor(props:Props){
        super(props)


        this.state = {
            servicesItem:[
                {
                    title:"service one",
                    description: "Random service text app utility"
                },

                {
                    title:"service two",
                    description: "Random service text app utility"
                },

                {
                    title:"service three",
                    description: "Random service text app utility"
                },
                {
                    title:"service four",
                    description: "Random service text app utility"
                },
                {
                    title:"service five",
                    description: "Random service text app utility"
                },
                {
                    title:"service six",
                    description: "Random service text app utility"
                }
            ]
        }
    }

    render(): ReactNode {
        return <div className="container">
            <div className="row">

                {
                   this.state.servicesItem.map((serviceObject,index) => { return <div key={index} className="col-md-3">
                                            <Service serviceData={serviceObject} />
                                        </div>})
                }
            
        </div>
        </div>
    }
}


export default ServiceSection;