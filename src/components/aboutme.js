import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mug from './images/mug.png';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h1>FOR HIRE!</h1>
                        <img
                            src={mug}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <h2>Paul Habiger</h2>
                        <h5>~ AKA ~</h5>
                        <h4>THE LONE NERD</h4>

                        <hr/>
                        <h3>For the development of YOUR Javascript Application</h3> 
                        <p>
                        Through education and practice, I'm an ever-evolving computer technician. Earning my AAS in Computer Programming gave me a solid foundation into the deveopment of software and web applications. Expanding my computer knowledge at USF and earning my BSAS in Systems Administration and Information Security has really broadened my expertise. Today I am looking forward to taking that knowledge into a workplace environment.
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;