import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  hideToggle() {
      var selectorId = document.querySelector('.mdl-layout');
      selectorId.MaterialLayout.toggleDrawer();
  }
  
  render() {
      return (
          <Navigation>
              <Link to={routes.XXX} onClick={() => this.hideToggle()}> XXX</Link>
          </Navigation>
  
      );
  }