import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import HomeHeader from "../Home_components/HomeHeader"
import {Link } from 'react-router-dom';

class HomeBanner extends Component{
      
      render(){
            
            return (
                  <nav className="Home_Header">
                        
                        <div className="Header_background"></div>
                                     
                        <div className="Header_menu_banner">
                              <HomeHeader/>
                              <div className="Header_menu_title">                                      
                                    <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                                    <span className="border_decoration"><img alt="line decoration" src={decSvg}/></span>
                                    
                                    <div className="Header_menu_buttons">
                                          <Link to = "/logowanie"><p>ODDAJ RZECZY</p> </Link>
                                          <Link to = "/logowanie"><p>ZORGANIZUJ ZBIÓRKĘ</p></Link>
                                    </div>
                              </div>
                        </div>
                  
                  </nav>
            )
           
            
            

            
      }
}

export default HomeBanner;