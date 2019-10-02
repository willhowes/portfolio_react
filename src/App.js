import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
	return (
	<div className="demo-big-content">
			<Layout>
					<Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>Will Howes - Portfolio</Link>} scroll>
							<Navigation>
									{/* <Link to="/resume">Resume</Link> */}
									<a href="https://willhowes.herokuapp.com" target="_blank" rel="noopener noreferrer" >CV</a>
									<Link to="/aboutMe">About Me</Link>
									<Link to="/projects">Projects</Link>
									<Link to="/contact">Contact</Link>
							</Navigation>
					</Header>
					<Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>Will Howes - Portfolio</Link>}>
							<Navigation>
									<Link to="/">Home</Link>
									<a href="https://willhowes.herokuapp.com" target="_blank" rel="noopener noreferrer" >CV</a>
									<Link to="/aboutMe" onClick={() => this.hideToggle()}>About Me</Link>
									<Link to="/projects">Projects</Link>
									<Link to="/contact">Contact</Link>
							</Navigation>
					</Drawer>
					<Content>
							<div className="page-content" />
							<Main></Main>
					</Content>
			</Layout>
	</div>  
);
}

export default App;
