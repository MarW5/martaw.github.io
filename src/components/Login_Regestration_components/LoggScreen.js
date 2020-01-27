import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from '../Home_components/HomeHeader';

import myFirebase from "../../Firebase/fbconfig"
import LoggIn from '../LoggIn';
import {Link} from 'react-router-dom';


class LoggScreen extends Component{
      state={
            email: "",
            password:"", 
            error:"" ,
            isTrue: false         
            
      };

      handleChange= e =>{
            this.setState({
                  [e.target.name]: e.target.value
                  });
      };


      handleFormSubmit= e =>{
           
            e.preventDefault();
            myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u)=>{
            this.setState({
                  error: " ",
                  isTrue: true  
            })
            }).catch((error) => {
                  this.setState({
                        error: "Niepoprawny e-mail lub hasło" ,
                        isTrue: false 
                  })
            //     console.log(error);
              });

              
           
      };

      


      render(){
            if(this.state.isTrue === true){
                  return <LoggIn user={this.state.email}/>
            }else{
            
                  return(
                        <>    <div className="Home_Banner_LoggScreen">
                              <HomeHeader/>
                              </div>
                                    <div className="Logg_Form">
                                          <h2>Zaloguj się</h2>
                                          <span><img alt="decoration icon" src={decSvg}/></span>
                                          <div className="Logg_Form_date">
                                                <p className="input_text_name">Email</p>
                                                <input type={"email"} name={"email"} onChange={this.handleChange} value={this.state.email}/>
                                                <p className = "input_text_name">Hasło</p>
                                                <input type={"password"} name={"password"} id="password" onChange={this.handleChange} value={this.state.password}/>
                                                <p className= "Error_msg_logg" >{this.state.error}</p>
                                    </div>
                                    
                                          <div className="Logg_Form_btn">
                                                <Link to = "/rejestracja"><button className="btn_form">Załóż konto</button></Link>
                                                <Link to = "/oddaj-rzeczy"><button className="btn_form" onClick={this.handleFormSubmit}>Zaloguj się</button></Link>
                                          </div>
                                    </div>    
                        </>
                  )
             
            }
                  
      }
}                  

    export default LoggScreen;

