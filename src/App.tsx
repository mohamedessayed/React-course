import { Component, type ReactNode } from "react";
import './assets/css/app.css';
import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";
import Timer from "./components/practice/Timer";
import Welcome from "./components/practice/Welcome";
import StudentCard, { type StudentInterface } from "./components/practice/StudentCard";
import CourseList from "./pages/CourseList";


class App extends Component {
  
  state = {
    showTimer:true
  };

  render(): ReactNode {

    let student1:StudentInterface = {name:"ahmed", age:20}
    let student2:StudentInterface = {name:"Walid", age:29, mail:"1321"}

    return <div>

      <Welcome />


      <StudentCard  student={ student1 } />
      <StudentCard  student={student2} />

      <button onClick={()=>this.setState({showTimer:!this.state.showTimer})}>Toggle Timer</button>

          {this.state.showTimer && <Timer  />}

          <Header />

          <ServiceSection />
    </div>
    
  }

}

export default App;