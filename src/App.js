import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import NavBar from './components/navbar'

class App extends React.Component {

  render() {
    return (
			<div className="demo-big-content">
          <NavBar/>

					<Content>
              <div className="page-content">
              <Main></Main>
							</div>
          </Content>
      </div>
    )
  }
}

export default App;

// const App = () => (
//
// 	<div className="demo-big-content">
//
// 	</div>
// );
//
// export default App;
