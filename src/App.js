import React, { Component } from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import axios from 'axios'

import Navbar from './components/layout/navbar/navBar'
import MainDisplay from './components/layout/content/mainDisplay'


import 'antd/dist/antd.css';

const { Header,Content } = Layout;


class App extends Component {
  render() {
    return (
      <Router>

     <Layout>
     <Header>
       <Navbar />
     </Header>
     <Content>
        <MainDisplay />
     </Content>
     </Layout>
     
     </Router>
    );
  }
}

export default App;
