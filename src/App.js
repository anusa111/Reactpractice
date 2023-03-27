import React from "react";
import Nav from "./Components/Nav";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Form from "./Components/Form";
import Api from "./Components/Api";
import Usecontext from "./FunctionalComponent/Usecontext";
import Functionalnav from "./FunctionalComponent/Functionalnav";
import Child1 from "./FunctionalComponent/Child1";
import "./App.css";
class App extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/skills/:name" element={<Skills/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/child1/:tvactress" element={<Child1/>}/>

        </Routes>
        <Form/>
        <Api/>
        <Usecontext/>
        <Functionalnav/>
       
      </div>
    )
  }
}
export default App;