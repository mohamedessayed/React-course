import { Component, type ReactNode } from "react";

type Props = {}

type State = {
    count:number,
}




class Counter extends Component <Props,State> {

    constructor(props:Props){
        super(props)
        this.state = {
            count: 0,
        }
        console.log('constructor');
    }

    componentDidMount(): void {
        console.log('did mount call');
    }

    shouldComponentUpdate(nextState:State): boolean {
        return nextState.count !== this.state.count
    }

    componentDidUpdate(): void {
        console.log('component is updated');
        
    }

    render(): ReactNode {
        console.log('render');
        
        return <div className="text-center">
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count + 1})}>Increased</button>
        </div>
    }
}

export default Counter;
