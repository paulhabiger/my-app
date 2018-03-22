import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Paul Habiger</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci. Est an possit virtute ornatus. Cum ut dicat albucius noluisse, veniam veritus dissentiet no eos. Et mel natum disputationi, qui nonumes blandit sententiae ea, vis option voluptua quaerendum an. Eripuit forensibus at nam. Usu elit dissentiet theophrastus et, ei inermis salutandi usu, in dicam antiopam eam.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>123-456-7890</p>
                        <h5>Email</h5>
                        <p>mail@here.com</p>
                        <h5>Web</h5>
                        <p style={{BorderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2002}
                            endYear={2006}
                            schoolName="University"
                            schoolDescription="Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci."
                        />
                        <Education 
                            startYear={2006}
                            endYear={2009}
                            schoolName="Different University"
                            schoolDescription="Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                            
                        <Experience
                            startYear={2008}
                            endYear={2010}
                            jobName="First Job"
                            jobDescription="Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci."
                        />
                        <Experience
                            startYear={2011}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem ipsum dolor sit amet, no mei vidisse mentitum evertitur. Ius dico percipit disputationi ne, mel ex primis docendi adipisci."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress="80"
                        />
                        <Skills 
                            skill="Javascript"
                            progress="75"
                        />
                        <Skills 
                            skill="Javascript"
                            progress="50"
                        />
                        <Skills 
                            skill="Javascript"
                            progress="40"
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;