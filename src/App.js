import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import ReportForm from './pages/report-form/report-form';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import CandidateRegister from './pages/candidate-register/candidate-register';
import TallyChart from './pages/tally-chart/tally-chart';
import HeaderComponent from './components/header/header.component';

function App() {
    return (
        <MuiThemeProvider theme={MyTheme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/report-form" component={ReportForm} />
                    <Route exact path="/candidate-register" component={CandidateRegister} />
                    <Route exact path="/tally-chart" component={TallyChart} />
                    <Route exact path="/tally-chart" component={HeaderComponent}></Route>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;

