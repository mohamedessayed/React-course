import { Component, type ReactNode } from "react";
import './assets/css/app.css';

import StateEx from "./components/practice/hooks/StateEx";
import EffectEx from "./components/practice/hooks/EffectEx";


class App extends Component {
  
  state = {
    showTimer:true
  };

  render(): ReactNode {


    return <div>

      <StateEx />
      <EffectEx />

      {/* <Welcome />


      <StudentCard  student={ student1 } />
      <StudentCard  student={student2} />

      <button onClick={()=>this.setState({showTimer:!this.state.showTimer})}>Toggle Timer</button>

          {this.state.showTimer && <Timer  />}

          <Header />

          <ServiceSection /> */}


    </div>
    
  }

}

export default App;