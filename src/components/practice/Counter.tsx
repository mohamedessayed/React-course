import { Component, type ReactNode } from "react";

type StateType = {
  count:number;
  userName: string;
  age:number,
}

class Counter extends Component<{},StateType> {

  constructor(props:{}){

    super(props);

      this.state = {
      count:0,
      userName:"Mohamed",
      age: 35
    };
  }


  handelIncrease():void {
    
    this.setState({count:this.state.count + 1})

  }

  handelDecrease():void {
   
    this.setState({count:this.state.count - 1})

  }

  handelReset():void {
    this.setState({count:0})

  }

  render(): ReactNode {

    let {count,userName} = this.state;

    return <div className="theme-header">
          <h1>{userName} count: {count}</h1>

          <div className="row">
            <button onClick={()=> this.handelIncrease()}>
            Increase
          </button>

          <button onClick={()=> this.handelDecrease()}>
            Decrease
          </button>

          <button onClick={()=> this.handelReset()}>
            Rest
          </button>
          </div>
    </div>
    
  }

}

export default Counter;