import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
//import mug from './images/mug.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Paul Habiger</h2>
                        <img
                            //src={mug}
                            src="https://www.shareicon.net/data/512x512/2016/11/28/857840_people_512x512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        <h3 style={{fontSize: '25px', fontFamily: 'Anton'}}>The Lone Nerd - Coding vigilate to the rescue!</h3>
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (727) 914-9414
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        jobforpaulh@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        linkedin.com/in/paul-habiger-249292156/
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        github.com/paulhabiger
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;