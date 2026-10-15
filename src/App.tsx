import { Component, type ReactNode } from "react";
import './assets/css/app.css';
import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";


class App extends Component {
  
  state = {
    count:0
  };

  render(): ReactNode {

    return <div>
          <Header />

          <ServiceSection />
    </div>
    
  }

}

export default App;