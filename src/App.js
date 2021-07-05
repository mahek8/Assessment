import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
function App() {
  return (
    <div className="App">
        <Router>
          <Sidebar/>
          <div className="main">
          <Switch>
            <Route path='/Student'></Route>
            <Route exact path='/' component={Content}></Route>
            <Route path='/Settings'></Route>
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
