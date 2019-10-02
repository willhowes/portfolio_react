import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img 
                            src="https://icon-library.net/images/default-profile-icon/default-profile-icon-16.jpg"
                            alt="avatar"
                            className="avatar-img"
                        /> */}
                        <div className="banner-text">
                            <h1>Will Howes</h1>
                            <h2>Software Developer</h2>
                            <hr/>
                            <p>Ruby | Rails | Javascript</p>

                            <div className="social-links">
                            
                                <a href="https://github.com/willhowes" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-github-square" aria-hidden="true" />                               
                                </a>

                                <a href="https://www.linkedin.com/in/will-howes-12a9b529/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-linkedin" aria-hidden="true"/>                                
                                </a>
                                <a href="https://medium.com/@williameldenhowes" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-medium" aria-hidden="true"/>                                
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
            )
    }
}

export default LandingPage;