import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img style={{width: '28%', height: "auto"}}
                            src="https://www.shareicon.net/data/512x512/2016/11/28/857840_people_512x512.png"
                            alt="nerd"
                            className="nerd-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | JavaScript | React | NodeJS | Angular </p>
                            
                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/paul-habiger-249292156/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"   aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/paulhabiger" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"   aria-hidden="true" />
                                </a>
                                {/* Freecodecamp */}
                                <a href="./" rel="noopener noreferrer">
                                    <i className="fa fa-envelope"   aria-hidden="true" />
                                </a>
                                {/* Youtube */}
                                <a href="./" rel="noopener noreferrer">
                                    <i className="fa fa-phone-square"   aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;