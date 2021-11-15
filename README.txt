React.js

// Links
https://reactjs.org/
https://reactjs.org/tutorial/tutorial.html
https://reactjs.org/docs/getting-started.html
https://redux.js.org/introduction/getting-started


// Create an app
$ npx create-react-app october-2021-app
$ cd october-2021-app
$ npm start
http://localhost:3000/



===========
Success! Created october-2021-app at /Users/brianspinos777/Desktop/react_js_learnings/october-2021-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd october-2021-app
  npm start

Happy hacking!
=============



// Install Redux
$ npm install redux react-redux


// Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.


// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});


export default MyFuncComponent;
import MyFuncComponent from './mystuff/MyFuncComponent';



// GIT
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
$ git remote add origin https://github.com/brianspinos777/october-2021-app-react.git
$ git remote show # origin
$ git push -u origin master
# use github username
# use github token, not password, example: ghp_Vt0gMB8ymoEUqlilAcya7khTj2EdlZ2I1p4e (fake)
https://github.com/brianspinos777/october-2021-app-react


// Run the app
$ git clone https://github.com/brianspinos777/october-2021-app-react.git
$ cd october-2021-app-react/
$ npm install
$ npm start
http://localhost:3000/all










=========================================================================== router

npm install react-router-dom@5 # version 6 is in beta

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

<Router>
    <Switch>
        <Route path="/foo">
            </Foo>
        </Route>
    </Switch>
</Router>


===========================================================================




===========================================================================



===========================================================================




.
