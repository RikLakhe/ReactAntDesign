import React, {Component} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import axios from 'axios'

import Navbar from './components/layout/navbar/navBar'
import MainDisplay from './components/layout/content/mainDisplay'
import TableDisplay from './components/layout/form/TableDisplay'
import FormDisplay from './components/layout/form/FormDisplay'

import 'antd/dist/antd.css';

const {Header, Content} = Layout;

class App extends Component {
    render() {
        return (

            <Router>
                <Layout>
                    <Header>
                        <Navbar/>
                    </Header>

                    <Content>
                        <Switch>
                            <Route exact path="/" component={MainDisplay}/>
                            <Route exact path="/users" component={TableDisplay}/>
                            <Route exact path="/adduser" component={FormDisplay}/>

                        </Switch>

                    </Content>

                </Layout>
            </Router>

        );
    }
}

export default App;
