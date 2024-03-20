
import React from 'react';
import LoginForm from './LoginForm';

const App = () => {
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default App;



/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './MainPage'; // Asegúrate de tener este import correcto

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/MainPage" component={MainPage} />
            </Switch>
        </Router>
    );
};

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './MainPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/MainPage" component={MainPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
*/