import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/homepage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Homepage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
