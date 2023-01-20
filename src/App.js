import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
