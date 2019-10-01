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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '18px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                        <i class="fas fa-phone-square"/>                                      
                                        07989 340 804
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '18px', fontFamily: 'Nanum Gothic, sans-serif' }}>
                                            <i class="fas fa-envelope"/>                                      
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