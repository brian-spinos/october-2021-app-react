import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import MyFuncComponent from './components/MyFuncComponent';
import MyClassComponent from './components/MyClassComponent';
import MyFuncComponentWithProps from './components/MyFuncComponentWithProps';
import MyClassComponentWithProps from './components/MyClassComponentWithProps';

import MyParentComponent from './components/MyParentComponent';
import MyChildComponent from './components/MyChildComponent';
import MyComponentWithPropTypes from './components/MyComponentWithPropTypes.jsx'
import store from './store/store';


import './css/App.css';

function MyApp() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>MyApp</h1>
      </header>

      
      {/* ==================================== Router */}
      <Router>
          <Switch>
              <Route path='/MyFuncComponent'>
                  <MyFuncComponent/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/all'>
                        <MyFuncComponent/>
                        <MyClassComponent/>

                        <MyFuncComponentWithProps fruit="apple"/>
                        <MyClassComponentWithProps fruit="orange"/>

                        <MyParentComponent>
                          <MyChildComponent/>
                        </MyParentComponent>
                        
                        <MyComponentWithPropTypes title='foo'/>
                        <MyComponentWithPropTypes/>
              </Route>
          </Switch>
      </Router>
  	  {/* ==================================== */}


    </div>
    </Provider>
  );
}

export default MyApp;
