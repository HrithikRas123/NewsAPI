import React, { Component } from 'react'

import Navbar from './Component/Navbar'
import News from './Component/News'
import About from './Component/About'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
    
  state = {
    progress:0
  }
  setProgress= (progress) => {
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
         <Router>

         <LoadingBar
         height={2}
        color='#f11946'
        progress={this.state.progress}
        />

        <Navbar/>

        
        
        <Routes>
          <Route exact path="/" element={< News setProgress ={this.setProgress}  key="General" pageSize={5} country="in" category="General"/>}></Route>
          <Route exact path="/Business" element={< News setProgress ={this.setProgress}  key="Busines"  pageSize={5} country="in" category="Business"/>}></Route>
          <Route exact path="/Entertainment" element={< News setProgress ={this.setProgress}  key="Entertainment"  pageSize={5} country="in" category="Entertainment"/>}></Route>
          <Route exact path="/Health" element={< News setProgress ={this.setProgress}  key="Health"  pageSize={5} country="in" category="Health"/>}></Route>
          <Route exact path="/Science" element={< News setProgress ={this.setProgress}  key="Science"  pageSize={5} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={< News setProgress ={this.setProgress}  key="Sports"  pageSize={5} country="in" category="Sports"/>}></Route>
          <Route exact path="/Technology" element={< News setProgress ={this.setProgress}  key="Technology"  pageSize={5} country="in" category="Technology"/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          </Routes>
        
        </Router>
      
      </div>
    )
  }
}
