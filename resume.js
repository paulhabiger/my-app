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
                        

                        <h2 style={{paddingTop: '2em'}}>Paul Habiger</h2>
                        <h4 style={{color: 'grey'}}>Programmer / Systems Admin / Information Security</h4>
                        <hr style={{borderTop: '3px solid #e22947', width: '50%'}}/>
                        <p>Through education and practice, I'm an ever-evolving computer technician. Earning my AAS in Computer Programming gave me a solid foundation into the deveopment of 
                            software and web applications. Expanding my computer knowledge at USF and earning my BSAS in Systems Administration and Information Security has really broadened my expertise.
                            Today I am looking forward to taking that knowledge into a workplace environment. 
                        </p>
                        <hr style={{borderTop: '3px solid #e22947', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>3717 11th Ave S St Petersburg, FL 33711</p>
                        <h5>Phone</h5>
                        <p>(727) 914-9414</p>
                        <h5>Email</h5>
                        <p>jobforpaulh@gmail.com</p>
                        <h5>Web</h5>
                        <p style={{BorderTop: '3px solid #833fb2', width: '50%'}}><a className="resume-link" href="http://www.thelonenerd.win" target="_blank" rel="noopener noreferrer">thelonenerd.win</a> <br/><a className="resume-link" href="https://github.com/paulhabiger/thelonenerd.win" target="_blank" rel="noopener noreferrer">github.com/paulhabiger/thelonenerd </a>                   
                        </p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>EDUCATION</h3>
                        <Education 
                            startYear={2013}
                            endYear={2016}
                            schoolName="UNIVERSITY OF SOUTH FLORIDA"
                            schoolDescription="Bachelor of Science in Applied Science - Systems Administration / Information Security "
                        />
                        <Education 
                            startYear={2007}
                            endYear={2010}
                            schoolName="ST CLOUD TECHNICAL & COMMUNITY COLLEGE"
                            schoolDescription="Associate of Arts and Science - Computer Programmer"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h3>EXPERIENCE</h3>
                            
                        <Experience
                            startYear={"11/2014"}
                            endYear={"11/2017"}
                            jobName="FARMTABLE CUCINA  |  Bartender"
                            jobDescription=""
                        />
                        <Experience
                            startYear={"03/2011"}
                            endYear={"01/2013"}
                            jobName="ECHO BLUEPRINT  |  Front Desk / Production"
                            jobDescription=""
                        />
                        <Experience
                            startYear={"08/2008"}
                            endYear={"08/2010"}
                            jobName="SCTCC | Technical Support"
                            jobDescription=""
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h3>Skills</h3>
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