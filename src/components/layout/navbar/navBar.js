import React, { Component } from 'react'

import {Link} from 'react-router-dom';

import {Menu} from 'antd'



class navBar extends Component {
render() {
    return (
      <React.Fragment>
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
          <Menu.Item key="1"><Link to="/">DASHBOARD</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/users">USERS</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/addusers">ADD USERS</Link></Menu.Item>
      </Menu>
      </React.Fragment>
    )
  }
}

export default navBar;