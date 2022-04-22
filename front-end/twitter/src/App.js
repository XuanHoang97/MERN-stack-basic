import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Register from './auth/Register';
import Main from './components/Main';
import Login from './auth/Login';
import './App.scss';
import AppReducer from './reducers/AppReducer';
import {useCallback, useEffect, useReducer} from 'react';
import AppContext from './components/AppContext';
import axios from 'axios';

console.warn = () => { };
function App() {
  const initialState = {user:null, posts :[]};
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const checkCurrentUser = useCallback(async() => {
    try{
      const token = localStorage.getItem('token');
      const option = {
        method: 'get',
        url: "http://localhost:7000/api/v1/auth",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      };

      const response = await axios(option);
      if(response.data.data.user){
        const {userName} = response.data.data.user;
        dispatch({type: 'CURRENT_USER', payload: {userName}});
      }
    }catch(error){
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <Router>
      <AppContext.Provider value={{state, dispatch}}>
      <div className='container-twitter'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/register'><Register /></Route>
            <Route exact path='/'><Main /></Route>
            <Route exact path='*'> <div>Page not found</div> </Route>
          </Switch>
        </div>
      </div>
      </AppContext.Provider>
    </Router>
  );
}
export default App;
