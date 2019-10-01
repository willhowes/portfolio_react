import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl'

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0}
	}
	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: "176px", background: 'url(https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center / cover'}}>Ruby Project #1</CardTitle>
						<CardText>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>

					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: "176px", background: 'url(https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center / cover'}}>Ruby Project #2</CardTitle>
						<CardText>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share"/>
						</CardMenu>
					</Card>

				</div>

			)
		} else if(this.state.activeTab === 1){
			return(
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: "176px", background: 'url(https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center / cover'}}>Rails Project #1</CardTitle>
					<CardText>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
					</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>
			)
		} else if(this.state.activeTab === 2){
			return(
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: "176px", background: 'url(https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center / cover'}}>Ruby Project #1</CardTitle>
					<CardText>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
					</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>
			)
		}

	}

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>Ruby</Tab>
					<Tab>Rails</Tab>
					<Tab>Javascript</Tab>
				</Tabs>
				
				<Grid>
					<Cell col={12}>
						<div className="content">
							{this.toggleCategories()}
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;