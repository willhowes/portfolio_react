import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, } from 'react-mdl';
import { Link } from 'react-router-dom';

class NavBar extends Component {

hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}

render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'><i className="fa fa-home" aria-hidden="true" /></Link>} scroll>
              <Navigation>
                  {/* <Link to="/resume">Resume</Link> */}
                  <a href="https://willhowes.herokuapp.com" target="_blank" rel="noopener noreferrer" >CV</a>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/' onClick={() => this.hideToggle()}><i className="fa fa-home" aria-hidden="true" /></Link>}>
              <Navigation>
                  <a href="https://willhowes.herokuapp.com" target="_blank" rel="noopener noreferrer" >CV</a>
                  <Link to="/aboutMe" onClick={() => this.hideToggle()}>About Me</Link>
                  <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
                  <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
              </Navigation>
          </Drawer>
          </Layout>
        </div>
    );
  }
}


export default NavBar;
