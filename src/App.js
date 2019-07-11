import React from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import FullPost from './components/blog/FullPost'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'

function App() {
  return (
    <Provider>
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/fullPost/:id' component={FullPost} />
          </Switch>
        </div>
      </>
    </Router>
    </Provider>
  );
}

export default App;
