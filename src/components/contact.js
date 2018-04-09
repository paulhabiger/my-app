import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mug from './images/mug.png';

class About extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <div className="contact-heading">
                        <h1>FOR HIRE!</h1>
                        <img
                            src={mug}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <h2>Paul Habiger</h2>
                        <h5>~ AKA ~</h5>
                        <h4>THE LONE NERD</h4>
                        </div>
                            <h3>For the development of YOUR Javascript Application</h3>
                        <hr/>
                         
                        
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>

                        <div className="contact-list">
                            
                            <p className="cli"><i className="fa fa-phone-square" aria-hidden="true"/>
                            (727) 914-9414</p>
                    
                            <p className="cli"><i className="fa fa-envelope" aria-hidden="true"/>
                            jobforpaulh@gmail.com</p>
                        
                        
                            <p className="cli"><i className="fa fa-linkedin-square" aria-hidden="true"/>
                            linkedin.com/in/paul-habiger-249292156/</p>
                        
                            <p className="cli"><i className="fa fa-github-square" aria-hidden="true"/>
                            github.com/paulhabiger</p>
                                   
                        </div>

                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;