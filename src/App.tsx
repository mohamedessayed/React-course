import { Component, type ReactNode } from "react";
import './assets/css/app.css';


import { Route, Routes } from "react-router";
import Welcome from "./components/practice/Welcome";
import ServiceSection from "./components/ServiceSection";
import CourseList from "./pages/CourseList";
import StateEx from "./components/practice/hooks/StateEx";
import MemoEx from "./components/practice/hooks/MemoEx";
import EffectEx from "./components/practice/hooks/EffectEx";
import RefEx from "./components/practice/hooks/RefEx";
import CallbackEX from "./components/practice/hooks/CallbackEX";
import Navbar from "./components/parts/Navbar";
import UserList from "./components/practice/api/UserList";


class App extends Component {
  
  state = {
    showTimer:true
  };

  render(): ReactNode {


    return <>

      <Navbar />

    <Routes>


    <Route index element={<Welcome />} />
    <Route path="/service" element={<ServiceSection />} />
    <Route path="/courses" element={<CourseList />} />

    <Route path="/user/list" element={<UserList />} />

    <Route path="/hooks">
        <Route path="state" element={<StateEx />} />
        <Route path="memo" element={<MemoEx />} />
        <Route path="effect" element={<EffectEx />} />
        <Route path="ref" element={<RefEx />} />
        <Route path="callback" element={<CallbackEX />} />
    </Route>

    </Routes>
    
    

{/* <CallbackEX /> */}
{/* <MemoEx /> */}

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

           */}


        </>

    
  }

}

export default App;