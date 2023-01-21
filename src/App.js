import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import ReportForm from './pages/report-form/report-form';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';

function App() {
    return (
        <MuiThemeProvider theme={MyTheme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/report-form" component={ReportForm} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;

