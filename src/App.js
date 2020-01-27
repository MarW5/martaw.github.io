import React, { Component } from 'react';

import Home from './components/Home';
import LoggScreen from './components/Login_Regestration_components/LoggScreen';
import ReggScreen from './components/Login_Regestration_components/ReggScreen';
import LoggIn from "./components/LoggIn";
import LogOut from "./components/LogOut";
import FormScreen from "./components/Form_components/FormScreen"
import './scss/main.scss';

import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import myFirebase from "./Firebase/fbconfig"



class App extends Component{
  constructor() {
    super();
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      //  localStorage.setItem('user', user.uid);
      //  console.log(user.uid)
      } else {
        this.setState({ user: null });
      //  localStorage.removeItem('user');
      }
    });
  }



  render(){
    return(     
                <>
                  
                      <BrowserRouter>
                      
                        
                          <Route basename="{process.env.PUBLIC_URL}"> 
                            {this.state.user ? <LoggIn user={this.state.user.email}/> : <Home/>}
                          </Route>

                            <Switch>
                                <Route path ='{process.env.PUBLIC_URL}/logowanie'>
                                  <LoggScreen/>
                                  
                                </Route>

                                <Route path = '{process.env.PUBLIC_URL}/rejestracja'>
                                  <ReggScreen/>
                                  
                                </Route>
                                
                                {/* <Route path ='/user'>
                                  <LoggIn/>
                                </Route> */}

                                <Route path = "{process.env.PUBLIC_URL}/wylogowano" >
                                  <LogOut/>
                                </Route>

                                {/* <Route path ='/user'>
                                  {this.state.user ? <LoggIn user={this.state.user.email}/> : <Redirect to="/logowanie"></Redirect> }
                                </Route> */}

                                <Route path = "{process.env.PUBLIC_URL}/oddaj-rzeczy">                              
                                  {this.state.user ? <FormScreen user={this.state.user.email}/> : <Redirect to="{process.env.PUBLIC_URL}/logowanie"></Redirect> }
                                </Route>
                                  
                            </Switch>
                      
                      </BrowserRouter>  
                    </>           
    )
  }
}



export default App
