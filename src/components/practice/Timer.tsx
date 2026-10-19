import { Component, type ReactNode } from "react";

type Props = {}

type State = {
    seconds:number
}

class Timer extends Component<Props,State>{

    state: Readonly<State> = {
        seconds:0
    }

    private timerId: ReturnType<typeof setInterval> | undefined

    componentDidMount(): void {
        this.timerId = setInterval(()=>{
            this.setState((prevState)=> ({seconds:prevState.seconds+1}));
        },1000)
    }

    componentWillUnmount(): void {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId)
        }
    }


    render(): ReactNode {
        return <div className="text-center">
            {this.state.seconds}
        </div>
    }

}




export default Timer;