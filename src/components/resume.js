import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: "200px"}}
                            />
                        </div>
                        <h2 style={{padding: "top"}}>Will Howes</h2>
                        <h4 style={{color: "grey"}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way....</p>
                        <h5>Phone</h5>
                        <p>(123)12345678</p>
                        <h5>Email</h5>
                        <p>williameldenhowes@gmail.com</p>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear="Jun 2019"
                            endYear="Sept 2019"
                            schoolName="Makers Academy"
                            schoolDescription="12-week Coding Bootcamp"
                        />
                        <Education
                            startYear={2000}
                            endYear={2003}
                            schoolName="University of the West of England"
                            schoolDescription="Business Administration, BA(Hons) 2.2"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Work Experience</h2>
                        <Experience
                            startYear="Aug 2017"
                            endYear="Jun 2019"
                            jobName="Adams & Remers LLP"
                            jobDescription="Licensed Conveyancer"
                        />
                        <Experience
                            startYear="Nov 2011"
                            endYear="Aug 2017"
                            jobName="Streeter Marshall LLP"
                            jobDescription="Trainee/Licensed Conveyancer"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="Ruby"
                            progress={80}
                        />
                        <Skills
                            skill="Rails"
                            progress={70}
                        />
                        <Skills
                            skill="Javascript"
                            progress={60}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Resume;