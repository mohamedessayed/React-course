import { Component, type ReactNode } from "react";
import './assets/css/app.css';

import StateEx from "./components/practice/hooks/StateEx";
import EffectEx from "./components/practice/hooks/EffectEx";
import GetPosts from "./components/practice/api/GetPosts";
import RefEx from "./components/practice/hooks/RefEx";
import CreateStudent from "./components/practice/CreateStudent";
import MemoEx from "./components/practice/hooks/MemoEx";


class App extends Component {
  
  state = {
    showTimer:true
  };

  render(): ReactNode {


    return <div>

<MemoEx />

{/* <CreateStudent /> */}


{/* <RefEx />
<GetPosts />
      <StateEx />
      <EffectEx /> */}

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