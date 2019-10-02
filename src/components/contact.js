import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={8}>
                        {/* <img
                            src="https://icon-library.net/images/default-profile-icon/default-profile-icon-16.jpg"
                            alt="Avatar"
                            style={{height: '250px'}}
                        /> */}

                        <h2>Contact Me</h2>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Please get in touch with me by phone, email or on social media. 
                        </p>                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '16px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                        <i className="fas fa-phone-square"/>                                      
                                        07989 340 804
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '16px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                            <a href="mailto:williameldenhowes@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'black'}} >
                                            <i className="fas fa-envelope"/>williameldenhowes@gmail.com</a>                         
                                            
                                        </ListItemContent>                                    
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '16px', fontFamily: 'Nanum Gothic, sans-serif', color: 'black' }}>
                                        <a href="https://www.linkedin.com/in/will-howes-12a9b529/" target="_blank" rel="noopener noreferrer" style={{color: 'black'}} >
                                    <i className="fab fa-linkedin" aria-hidden="true"/>LinkedIn Profile</a>                                                                              </ListItemContent>                                    
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