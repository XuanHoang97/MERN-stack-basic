import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Register from './auth/Register';
import Main from './components/Main';
import Login from './auth/Login';
import './App.scss';

console.warn = () => { };
function App() {
  return (
    <Router>
      <div className='container-twitter'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Main}/>
            <Route exact path='*'> <div>Page not found</div> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
