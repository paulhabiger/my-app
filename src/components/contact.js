import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Paul Habiger</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci. Est an possit virtute ornatus. Cum ut dicat albucius noluisse, veniam veritus dissentiet no eos. Et mel natum disputationi, qui nonumes blandit sententiae ea, vis option voluptua quaerendum an. Eripuit forensibus at nam. Usu elit dissentiet theophrastus et, ei inermis salutandi usu, in dicam antiopam eam.
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
                                        (123) 450-6666
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        email@my.address
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        LinkedIn
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        GitHub
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