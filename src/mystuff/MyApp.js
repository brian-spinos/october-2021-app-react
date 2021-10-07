import {Provider} from 'react-redux';
import MyFuncComponent from './components/MyFuncComponent';
import MyClassComponent from './components/MyClassComponent';
import MyFuncComponentWithProps from './components/MyFuncComponentWithProps';
import MyClassComponentWithProps from './components/MyClassComponentWithProps';

import MyParentComponent from './components/MyParentComponent';
import MyChildComponent from './components/MyChildComponent';
import store from './store/store';

import './css/App.css';

function MyApp() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>MyApp</h1>
      </header>
      <MyFuncComponent/>
      <MyClassComponent/>

      <MyFuncComponentWithProps fruit="apple"/>
      <MyClassComponentWithProps fruit="orange"/>

      <MyParentComponent>
        <MyChildComponent/>
      </MyParentComponent>


    </div>
    </Provider>
  );
}

export default MyApp;
