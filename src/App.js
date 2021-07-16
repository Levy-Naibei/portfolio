import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PageNotFound from './components/PageNotFound';
// import Social from './components/Social';

const App = () => {

  const toggle = () => {
    const el = document.getElementById('sidebar');
    el.classList.toggle('#sidebar')
  }
 
  return (
    <div>
      <Sidebar />
      <button onclick={toggle} />
      <div className='page-content p-5' id='content'>
        <Switch>
          <Route exact path='/' component={Profile}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/education' component={Education}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/projects' component={Projects}/>
          <Route component={PageNotFound}/>
        </Switch> 
      </div>
    </div>
  );
}

export default App