import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Will Howes</h2>
                        <img
                            src="https://icon-library.net/images/default-profile-icon/default-profile-icon-16.jpg"
                            alt="Avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Please do get in touch with me by phone, email or on social media. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '16px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                        <i className="fas fa-phone-square"/>                                      
                                        07989 340 804
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '16px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                            <i className="fas fa-envelope"/>                                      
                                            williameldenhowes@gmail.com
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