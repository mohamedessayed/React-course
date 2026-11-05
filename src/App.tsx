import { Route, Routes } from "react-router";
import Navbar from "./components/parts/Navbar";
import Welcome from "./components/practice/Welcome";
import ServiceSection from "./components/ServiceSection";
import CourseList from "./pages/CourseList";
import UserList from "./components/practice/api/UserList";
import StateEx from "./components/practice/hooks/StateEx";
import MemoEx from "./components/practice/hooks/MemoEx";
import EffectEx from "./components/practice/hooks/EffectEx";
import RefEx from "./components/practice/hooks/RefEx";
import CallbackEX from "./components/practice/hooks/CallbackEX";
import Login from "./pages/Login";

function App (){

  const user = {
    name:"Mohamed",
    email:"Mohamed@mail.com"
  }

  return <>
  
  <Navbar />

    <Routes>


    <Route index element={<Welcome />} />
    <Route path="/login" element={<Login />} />
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

  </>
}

export default App;