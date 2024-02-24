import React, { Component } from 'react'

import Navbar from './Component/Navbar'
import News from './Component/News'
import About from './Component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App
extends Component {
  render() {
    return (
      <div>
         <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={< News key="science" pageSize={5} country="in" category="General"/>}></Route>
          <Route exact path="/Business" element={< News key="Busines"  pageSize={5} country="in" category="Business"/>}></Route>
          <Route exact path="/Entertainment" element={< News key="Entertainment"  pageSize={5} country="in" category="Entertainment"/>}></Route>
          <Route exact path="/Health" element={< News key="Health"  pageSize={5} country="in" category="Health"/>}></Route>
          <Route exact path="/Science" element={< News key="Science"  pageSize={5} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={< News key="Sports"  pageSize={5} country="in" category="Sports"/>}></Route>
          <Route exact path="/Technology" element={< News key="Technology"  pageSize={5} country="in" category="Technology"/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          </Routes>
        
        </Router>
      
      </div>
    )
  }
}
