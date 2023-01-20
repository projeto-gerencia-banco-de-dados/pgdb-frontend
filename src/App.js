import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import FormUrna from './pages/form-example/form-example';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/form-example" component={FormUrna} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

