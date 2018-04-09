import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import mug from './images/mug.png';

class Contact extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h2>Paul Habiger</h2>
                        <img
                            //src={mug}
                            src="https://www.shareicon.net/data/512x512/2016/11/28/857840_people_512x512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '50%', margin: 'auto', paddingTop: '1em'}}>
                        <h3 style={{fontSize: '25px', fontFamily: 'Anton'}}>The Lone Nerd - Coding vigilate to the rescue!</h3>
                        </p>
                    </Cell>

                    <Cell col={12}>
                        <h2>About Me</h2>
                        <hr/>
                        <p className="fill">Through educa
                        
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;





